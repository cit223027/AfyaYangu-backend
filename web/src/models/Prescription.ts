import UserMedication from "@/models/UserMedication.ts";

// Prescription Class
export default class Prescription {
    user_id: string;
    date_scanned?: number;
    medications: UserMedication[];

    constructor(
        user_id: string,
        medications: UserMedication[],
        date_scanned?: number
    ) {
        this.user_id = user_id;
        this.date_scanned = date_scanned;
        this.medications = medications;
    }
}
