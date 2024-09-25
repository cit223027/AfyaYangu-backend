import {AppLanguage} from "@/context/AppLanguageContext.ts";
import AIConversationMessage from "@/components/ai/AIConversationMessage.ts";
import {Medicine} from "@/models/Medicine.ts";

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

            const response = await fetch(`${BACKEND_SITE}/ai/prompt`, {
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

    /* Medicine */
    static async getAllMedicines(): Promise<Medicine[] | undefined> {
        try {
            const response = await fetch(`${BACKEND_SITE}/data/medicines`, {
                method: 'GET'
            })

            if (!response.ok) {
                console.error("Failed to fetch All Medicine", response.status, response.statusText);
                return undefined;
            }

            const data = await response.json();

            return data.data
        } catch (e) {
            console.error("Error querying all medicine", e)
            return undefined;
        }
    }



}

const BACKEND_SITE = "https://afyayangu.onrender.com"
