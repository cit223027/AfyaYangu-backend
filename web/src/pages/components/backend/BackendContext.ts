
type BackendContextType = {

}

class BackendConfiguration {

    const backendUrl = "https://afyayangu-backend.onrender.com/"

    async makeAIRequest(
        language: string,
        prompt: string,
        currentPageContext: string,
        currentUserContext: string,
        currentConversationContext: string
    ) {
        const rawResponse = await fetch(`${this.backendUrl}/airequest`, {
            method: "POST",
            body: JSON.stringify({
                language: language,
                prompt: prompt,
                currentPageContext: currentPageContext,
                currentUserContext: currentUserContext,
                currentConversationContext: currentConversationContext
            })
        })


    }

}
