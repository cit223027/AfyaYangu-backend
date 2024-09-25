import {AppLanguage} from "@/context/AppLanguageContext.ts";

export enum AIConversationUser {
    User,
    System,
    Assistant
}

export default class AIConversationMessage {
    language: AppLanguage
    user: AIConversationUser
    message: string

    private constructor(
        language: AppLanguage,
        user: AIConversationUser,
        message: string
    ) {
        this.language = language
        this.user = user
        this.message = message
    }

    static createUserMessage(
        language: AppLanguage,
        message: string
    ): AIConversationMessage {
        return new AIConversationMessage(language, AIConversationUser.User, message)
    }

    static createAssistantMessage(
        language: AppLanguage,
        message: string
    ): AIConversationMessage {
        return new AIConversationMessage(language, AIConversationUser.Assistant, message)
    }

    convertToBackendMessage() {
        return {
            role: this.user.toString().toLowerCase(),
            message: this.message
        }
    }

}
