import UserMedication from "@/models/UserMedication.ts";

// Prescription Class
export default class Prescription {
    prescription_id: string;
    user_id: string;
    date_scanned?: number;
    medications: UserMedication[];

    constructor(
        prescription_id: string,
        user_id: string,
        medications: UserMedication[],
        date_scanned?: number
    ) {
        this.prescription_id = prescription_id;
        this.user_id = user_id;
        this.date_scanned = date_scanned;
        this.medications = medications;
    }
}
