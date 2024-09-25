
// Enum for DosageType
export enum DosageType {
    Syrup = "syrup",
    Tablets = "tablets"
}

// Enum for DosagePeriod
export enum DosagePeriod {
    Day = "day",
    Week = "week",
    Month = "month"
}

// Enum for IntakeMealInstruction
export enum IntakeMealInstruction {
    BeforeMeal = "before_meal",
    AfterMeal = "after_meal"
}

// UserMedication Class
export default class UserMedication {
    user_medication_id?: string;
    user_id: string;
    medication_id: string;
    dosage_type: DosageType;
    dosage_period: DosagePeriod;
    dosages_per_period: number;
    intake_per_dosage: number;
    intake_meal_instruction?: IntakeMealInstruction;
    time_to_take: number[] = [];

    constructor(
        user_id: string,
        medication_id: string,
        dosage_type: DosageType,
        dosage_period: DosagePeriod,
        dosages_per_period: number,
        intake_per_dosage: number,
        user_medication_id?: string,
        intake_meal_instruction?: IntakeMealInstruction,
        time_to_take: number[] = []
    ) {
        this.user_medication_id = user_medication_id;
        this.user_id = user_id;
        this.medication_id = medication_id;
        this.dosage_type = dosage_type;
        this.dosage_period = dosage_period;
        this.dosages_per_period = dosages_per_period;
        this.intake_per_dosage = intake_per_dosage;
        this.intake_meal_instruction = intake_meal_instruction;
        this.time_to_take = time_to_take;
    }
}
