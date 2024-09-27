import UserMedication, {DosagePeriod} from "@/models/UserMedication.ts";

export default class UserMedicationUtils {

    static getNextMedications(user_medications: UserMedication[], count: number): UserMedication[] {
        const now = new Date();

        // Helper function to get the time in seconds from a reference point
        const getSecondsFromReference = (med: UserMedication): number => {
            const nowTime = now.getTime() / 1000; // current time in seconds
            const currentDayStart = new Date(now.setHours(0, 0, 0, 0)).getTime() / 1000; // Midnight of today

            switch (med.dosage_period) {
                case DosagePeriod.Day:
                    // Seconds since midnight of the current day
                    return Math.min(...med.time_to_take.filter(t => t > (nowTime - currentDayStart))) + currentDayStart;

                case DosagePeriod.Week:
                    // Seconds since midnight on the previous Sunday
                    const currentWeekStart = currentDayStart - now.getDay() * 86400; // 86400 seconds = 1 day
                    return Math.min(...med.time_to_take.filter(t => t > (nowTime - currentWeekStart))) + currentWeekStart;

                case DosagePeriod.Month:
                    // Seconds since midnight on the 1st of the current month
                    const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime() / 1000;
                    return Math.min(...med.time_to_take.filter(t => t > (nowTime - currentMonthStart))) + currentMonthStart;

                default:
                    return Infinity; // If period is not set, put it at the end of the list
            }
        };

        // Sort user medications by the next closest time to take
        const sortedMedications = user_medications
            .filter(med => med.time_to_take.length > 0) // Only consider medications with valid time_to_take values
            .sort((a, b) => getSecondsFromReference(a) - getSecondsFromReference(b));

        // Return the first 'count' medications from the sorted list
        return sortedMedications.slice(0, count);
    }

}
