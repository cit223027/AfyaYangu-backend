import {AppLanguage} from "@/context/AppLanguageContext.ts";
import AIConversationMessage from "@/components/ai/AIConversationMessage.ts";
import UserMedication from "@/models/UserMedication.ts";
import {MedicalCenter} from "@/models/MedicalCenter.ts";
import Prescription from "@/models/Prescription.ts";

type BackendAIPromptCallRequest = {
    language: string
    conversation: any
    pageContext?: string
    userContext?: string
    chatContext?: string
}

type BackendAIPromptCallResponse = {
    language: string
    message: string
}

export default class BackendApi {

    static async makeAIPrompt(
        language: AppLanguage,
        prompt: string,
        conversation: AIConversationMessage[],
        pageContext: string = "",
        userContext: string = ""
    ): Promise<AIConversationMessage | undefined> {
        try {
            const backendConversation = conversation.map((message) => message.convertToBackendMessage())

            // Add the new message
            backendConversation.push(AIConversationMessage.createUserMessage(language, prompt).convertToBackendMessage())

            const requestBody: BackendAIPromptCallRequest = {
                language: language.toString().toLowerCase(),
                conversation: backendConversation,
                pageContext: pageContext,
                userContext: userContext
            }

            const response = await fetch(`${BACKEND_SITE}/ai/assistant_prompt`, {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (!response.ok) {
                console.error("Failed to fetch AI prompt:", response.status, response.statusText);
                return undefined;
            }

            const data: BackendAIPromptCallResponse = await response.json();

            let returnedAppLanguage = AppLanguage.English

            switch (data.language.toLowerCase()) {
                case "en":
                case "en-us":
                case "english":
                    returnedAppLanguage = AppLanguage.English
                    break
                case "sw":
                case "sw-ke":
                case "swahili":
                case "kiswahili":
                    returnedAppLanguage = AppLanguage.Swahili
                    break
                case "ki":
                case "kikuyu":
                case "gikuyu":
                    returnedAppLanguage = AppLanguage.Kikuyu
                    break
            }

            return AIConversationMessage.createAssistantMessage(
                returnedAppLanguage,
                data.message
            )

        } catch (e) {
            console.error("Error while making AI prompt:", e);
            return undefined
        }
    }

    /* Data Prompts */

    // <editor-fold desc="UserMedication API calls">
    static async getUserMedicationsForUser(user_id: string): Promise<UserMedication[] | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/user_medications/user/${user_id}`, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error(`Failed to fetch User Medications for User ID: ${user_id}`, response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error(`Error fetching user medications for User ID: ${user_id}`, e);
            return undefined;
        }
    }

    static async getUserMedication(user_medication_id: string): Promise<UserMedication | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/user_medication/${user_medication_id}`, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error(`Failed to fetch User Medication with ID: ${user_medication_id}`, response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error(`Error fetching user medication with ID: ${user_medication_id}`, e);
            return undefined;
        }
    }

    static async upsertNewUserMedication(user_medication: UserMedication): Promise<string | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/user_medication`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user_medication),
            });

            if (!response.ok) {
                console.error("Failed to upsert new User Medication", response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;  // This should return the `user_medication_id`
        } catch (e) {
            console.error("Error upserting new User Medication", e);
            return undefined;
        }
    }
    // </editor-fold>

    // <editor-fold desc="MedicalCenter API calls">
    /* Medical Centers */
    static async getAllMedicalCenters(): Promise<MedicalCenter[] | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/medical_centers`, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error("Failed to fetch Medical Centers", response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error("Error fetching Medical Centers", e);
            return undefined;
        }
    }

    static async getMedicalCenter(medical_center_id: string): Promise<MedicalCenter | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/medical_center/${medical_center_id}`, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error(`Failed to fetch Medical Center with ID: ${medical_center_id}`, response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error(`Error fetching Medical Center with ID: ${medical_center_id}`, e);
            return undefined;
        }
    }

    static async upsertMedicalCenter(medical_center: MedicalCenter): Promise<string | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/medical_center`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(medical_center),
            });

            if (!response.ok) {
                console.error("Failed to upsert Medical Center", response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;  // This should return the `medical_center_id`
        } catch (e) {
            console.error("Error upserting Medical Center", e);
            return undefined;
        }
    }

    static async deleteMedicalCenter(medical_center_id: string): Promise<void> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/medical_center/${medical_center_id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                console.error(`Failed to delete Medical Center with ID: ${medical_center_id}`, response.status, response.statusText);
            }
        } catch (e) {
            console.error(`Error deleting Medical Center with ID: ${medical_center_id}`, e);
        }
    }

    static async getClosestMedicalCenters(latitude: number, longitude: number, number_of_centers: number): Promise<MedicalCenter[] | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/medical_center/closest`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ latitude, longitude, number_of_centers }),
            });

            if (!response.ok) {
                console.error("Failed to fetch Closest Medical Centers", response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error("Error fetching Closest Medical Centers", e);
            return undefined;
        }
    }

    static async filterMedicalCentersByDistance(latitude: number, longitude: number, max_distance_km: number): Promise<MedicalCenter[] | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/medical_center/filter_distance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ latitude, longitude, max_distance_km }),
            });

            if (!response.ok) {
                console.error("Failed to fetch Medical Centers by Distance", response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error("Error fetching Medical Centers by Distance", e);
            return undefined;
        }
    }

    // </editor-fold>

    // <editor-fold desc="Prescription API calls">
    /* Prescription */
    static async getUserPrescriptions(user_id: string): Promise<Prescription[] | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/prescriptions/user/${user_id}`, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error(`Failed to fetch Prescriptions for User ID: ${user_id}`, response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error(`Error fetching prescriptions for User ID: ${user_id}`, e);
            return undefined;
        }
    }

    static async getPrescription(prescription_id: string): Promise<Prescription | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/prescription/${prescription_id}`, {
                method: 'GET'
            });

            if (!response.ok) {
                console.error(`Failed to fetch Prescription with ID: ${prescription_id}`, response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error(`Error fetching prescription with ID: ${prescription_id}`, e);
            return undefined;
        }
    }

    static async upsertPrescription(prescription: Prescription): Promise<string | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/prescription`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(prescription),
            });

            if (!response.ok) {
                console.error("Failed to upsert Prescription", response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();
            return data.data;  // This should return the `prescription_id`
        } catch (e) {
            console.error("Error upserting Prescription", e);
            return undefined;
        }
    }

    static async deletePrescription(prescription_id: string): Promise<void> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/prescription/${prescription_id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                console.error(`Failed to delete Prescription with ID: ${prescription_id}`, response.status, response.statusText);
            }
        } catch (e) {
            console.error(`Error deleting Prescription with ID: ${prescription_id}`, e);
        }
    }

    // </editor-tabs>

}

const BACKEND_SITE = "https://afyayangu.onrender.com"
// const BACKEND_SITE = "http://localhost:8000"
