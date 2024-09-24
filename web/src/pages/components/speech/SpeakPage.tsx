import {useContext} from "react";
import {SpeakContext, SpeakPageContext} from "@/pages/components/speech/SpeakContext.ts";

type SpeakPageProps = {
    id?: string;
    className?: string
    children: JSX.Element | JSX.Element[];
}

type SpeakDivContentType = {
    id: string
    text: string
}

export default function SpeakPage({ id, className, children }: SpeakPageProps) {

    const { startSpeaking } = useContext(SpeakContext)

    const speakDivContent: SpeakDivContentType[] = []

    const appendNewSpeakText = (id: string, text: string) => {
        speakDivContent.push({id: id, text: text})
    }

    const startSpeakingPageContent = () => {
        startSpeaking(speakDivContent.map((speakContent) => speakContent.text))
    }

    return (
        <SpeakPageContext.Provider value={{
            hasSpeakPage: true,
            appendSpeakPageText: appendNewSpeakText,
            speakPage: startSpeakingPageContent
        }}>
            <div id={id} className={className}>
                {Array.isArray(children) ? (
                    children.map((child) => <>{child}</>)
                ) : (
                    <>{children}</>
                )}
            </div>
        </SpeakPageContext.Provider>
    )
}
