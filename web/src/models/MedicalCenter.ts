
// MedicalCenter Class
export class MedicalCenter {
    medical_center_id?: string;
    name: string;
    description: string;
    swahili_description?: string;
    kikuyu_description?: string;
    emergency_mobile_number?: string;
    secondary_emergency_mobile_number?: string;
    latitude: number;
    longitude: number;

    constructor(
        name: string,
        description: string,
        latitude: number,
        longitude: number,
        medical_center_id?: string,
        swahili_description?: string,
        kikuyu_description?: string,
        emergency_mobile_number?: string,
        secondary_emergency_mobile_number?: string
    ) {
        this.medical_center_id = medical_center_id;
        this.name = name;
        this.description = description;
        this.swahili_description = swahili_description;
        this.kikuyu_description = kikuyu_description;
        this.emergency_mobile_number = emergency_mobile_number;
        this.secondary_emergency_mobile_number = secondary_emergency_mobile_number;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
