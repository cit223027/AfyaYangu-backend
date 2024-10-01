import UserMedication from "@/models/UserMedication.ts";
import BackendApi from "@/components/backend/BackendApi.ts";
import {MedicalCenter} from "@/models/MedicalCenter.ts";
import Prescription from "@/models/Prescription.ts";

type CacheObject<T> = {
    lastUpdateTime: Date;
    item: T
}

type ClosestMedicalCentersCacheKey = string;

export default class BackendCache {
    CACHE_UPDATE_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

    // Prescription cache
    private prescriptionCache: Map<string, CacheObject<Prescription>> = new Map();
    private userPrescriptionsCache: Map<string, CacheObject<Array<string>>> = new Map();

    // Medical center cache
    private medicalCenterCache: Map<string, CacheObject<MedicalCenter>> = new Map();
    private closestMedicalCentersCache: Map<ClosestMedicalCentersCacheKey, MedicalCenter[]> = new Map();

    // User medication cache
    private userMedicationCache: Map<string, CacheObject<UserMedication>> = new Map();
    private userMedicationUserCache: Map<string, CacheObject<Array<string>>> = new Map();

    private generateCacheObject<T>(item: T): CacheObject<T> {
        return {
            lastUpdateTime: new Date(),
            item
        };
    }

    // Prescription methods
    async getUserPrescriptions(user_id: string): Promise<Prescription[] | undefined> {
        const now = new Date();
        const userPrescriptionsCache = this.userPrescriptionsCache.get(user_id);

        // If user cache exists and is still valid, check if the prescription objects are cached
        if (userPrescriptionsCache && now.getTime() - userPrescriptionsCache.lastUpdateTime.getTime() < this.CACHE_UPDATE_TIME) {
            const prescriptionIds = userPrescriptionsCache.item; // This is an array of prescription IDs
            const prescriptions: Prescription[] = [];

            for (const prescriptionId of prescriptionIds) {
                const cachedPrescription = this.prescriptionCache.get(prescriptionId);

                if (cachedPrescription && now.getTime() - cachedPrescription.lastUpdateTime.getTime() < this.CACHE_UPDATE_TIME) {
                    prescriptions.push(cachedPrescription.item);
                } else {
                    // Fetch the prescription if it's not in cache or is stale
                    const prescription = await BackendApi.getPrescription(prescriptionId);
                    if (prescription) {
                        this.prescriptionCache.set(prescriptionId, this.generateCacheObject(prescription));
                        prescriptions.push(prescription);
                    }
                }
            }
            return prescriptions;
        }

        // If cache is stale or doesn't exist, fetch from backend
        const prescriptions = await BackendApi.getUserPrescriptions(user_id);
        if (!prescriptions) return undefined;

        // Cache the fetched prescriptions and IDs
        const prescriptionIds = prescriptions.map(p => p.prescription_id!!);
        this.userPrescriptionsCache.set(user_id, this.generateCacheObject(prescriptionIds));
        prescriptions.forEach(p => {
            this.prescriptionCache.set(p.prescription_id!!, this.generateCacheObject(p));
        });

        return prescriptions;
    }


    async getPrescription(prescription_id: string): Promise<Prescription | undefined> {
        const cachedPrescription = this.prescriptionCache.get(prescription_id);
        const now = new Date();

        if (cachedPrescription && now.getTime() - cachedPrescription.lastUpdateTime.getTime() < this.CACHE_UPDATE_TIME) {
            return cachedPrescription.item;
        }

        const prescription = await BackendApi.getPrescription(prescription_id);
        if (prescription) {
            this.prescriptionCache.set(prescription_id, this.generateCacheObject(prescription));
        }

        return prescription;
    }

    async upsertPrescription(prescription: Prescription): Promise<string | undefined> {
        const prescription_id = await BackendApi.upsertPrescription(prescription);
        if (prescription_id) {
            this.prescriptionCache.delete(prescription.prescription_id!!);
        }
        return prescription_id;
    }

    async deletePrescription(prescription_id: string): Promise<void> {
        await BackendApi.deletePrescription(prescription_id);
        this.prescriptionCache.delete(prescription_id);
    }

    // Medical Center methods
    async getAllMedicalCenters(): Promise<MedicalCenter[] | undefined> {
        const medicalCenters = await BackendApi.getAllMedicalCenters();
        if (medicalCenters) {
            medicalCenters.forEach(center => {
                this.medicalCenterCache.set(center.medical_center_id!!, this.generateCacheObject(center));
            });
        }
        return medicalCenters;
    }

    async getMedicalCenter(medical_center_id: string): Promise<MedicalCenter | undefined> {
        const cachedMedicalCenter = this.medicalCenterCache.get(medical_center_id);
        const now = new Date();

        if (cachedMedicalCenter && now.getTime() - cachedMedicalCenter.lastUpdateTime.getTime() < this.CACHE_UPDATE_TIME) {
            return cachedMedicalCenter.item;
        }

        const medicalCenter = await BackendApi.getMedicalCenter(medical_center_id);
        if (medicalCenter) {
            this.medicalCenterCache.set(medical_center_id, this.generateCacheObject(medicalCenter));
        }

        return medicalCenter;
    }

    async upsertMedicalCenter(medicalCenter: MedicalCenter): Promise<string | undefined> {
        const medical_center_id = await BackendApi.upsertMedicalCenter(medicalCenter);
        if (medical_center_id) {
            this.medicalCenterCache.delete(medicalCenter.medical_center_id!!);
        }
        return medical_center_id;
    }

    async deleteMedicalCenter(medical_center_id: string): Promise<void> {
        await BackendApi.deleteMedicalCenter(medical_center_id);
        this.medicalCenterCache.delete(medical_center_id);
    }

    async getClosestMedicalCenters(latitude: number, longitude: number, number_of_centers: number): Promise<MedicalCenter[] | undefined> {
        const cacheKey = `${latitude},${longitude},${number_of_centers}`;
        const cachedCenters = this.closestMedicalCentersCache.get(cacheKey);

        if (cachedCenters) {
            return cachedCenters;
        }

        const centers = await BackendApi.getClosestMedicalCenters(latitude, longitude, number_of_centers);
        if (centers) {
            this.closestMedicalCentersCache.set(cacheKey, centers);
        }

        return centers;
    }

    async filterMedicalCentersByDistance(latitude: number, longitude: number, max_distance_km: number): Promise<MedicalCenter[] | undefined> {
        return await BackendApi.filterMedicalCentersByDistance(latitude, longitude, max_distance_km);
    }

    // User Medication methods
    async getUserMedications(user_id: string): Promise<UserMedication[] | undefined> {
        const now = new Date();
        const userMedicationCache = this.userMedicationUserCache.get(user_id);

        // If user cache exists and is still valid, check if the medication objects are cached
        if (userMedicationCache && now.getTime() - userMedicationCache.lastUpdateTime.getTime() < this.CACHE_UPDATE_TIME) {
            const medicationIds = userMedicationCache.item; // This is an array of medication IDs
            const medications: UserMedication[] = [];

            for (const medicationId of medicationIds) {
                const cachedMedication = this.userMedicationCache.get(medicationId);

                if (cachedMedication && now.getTime() - cachedMedication.lastUpdateTime.getTime() < this.CACHE_UPDATE_TIME) {
                    medications.push(cachedMedication.item);
                } else {
                    // Fetch the medication if it's not in cache or is stale
                    const medication = await BackendApi.getUserMedication(medicationId);
                    if (medication) {
                        this.userMedicationCache.set(medicationId, this.generateCacheObject(medication));
                        medications.push(medication);
                    }
                }
            }
            return medications;
        }

        // If cache is stale or doesn't exist, fetch from backend
        const medications = await BackendApi.getUserMedicationsForUser(user_id);
        if (!medications) return undefined;

        // Cache the fetched medications and IDs
        const medicationIds = medications.map(m => m.user_medication_id!!);
        this.userMedicationUserCache.set(user_id, this.generateCacheObject(medicationIds));
        medications.forEach(m => {
            this.userMedicationCache.set(m.user_medication_id!!, this.generateCacheObject(m));
        });

        return medications;
    }


    async getUserMedication(user_medication_id: string): Promise<UserMedication | undefined> {
        const now = new Date();
        const cachedMedication = this.userMedicationCache.get(user_medication_id);

        // Check if the medication is in the cache and if it's still valid
        if (cachedMedication && now.getTime() - cachedMedication.lastUpdateTime.getTime() < this.CACHE_UPDATE_TIME) {
            return cachedMedication.item;
        }

        // Fetch the medication from the backend if not in cache or cache is stale
        const medication = await BackendApi.getUserMedication(user_medication_id);
        if (medication) {
            // Update the cache with the newly fetched medication
            this.userMedicationCache.set(user_medication_id, this.generateCacheObject(medication));
        }

        return medication;
    }

    async upsertNewUserMedication(user_medication: UserMedication): Promise<string | undefined> {
        const medication_id = await BackendApi.upsertNewUserMedication(user_medication);

        if (medication_id) {
            // Clear cache for this specific medication_id in the user medication cache
            this.userMedicationCache.delete(medication_id);

            // Clear this medication_id from every user's cache
            this.userMedicationUserCache.forEach(userCache => {
                const medicationIds = userCache.item.filter(id => id !== medication_id);
                // Update user cache after deletion
                if (medicationIds.length > 0) {
                    this.userMedicationUserCache.set(userCache.item[0], this.generateCacheObject(medicationIds));
                } else {
                    this.userMedicationUserCache.delete(userCache.item[0]);
                }
            });
        }

        return medication_id;
    }
}

