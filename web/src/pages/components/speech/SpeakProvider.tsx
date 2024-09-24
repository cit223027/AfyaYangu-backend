import useSpeakHook from "@/pages/components/speech/SpeakHook.ts";
import {SpeakContext} from "@/pages/components/speech/SpeakContext.ts";


type SpeakProviderType = {
    children: JSX.Element | JSX.Element[]
}

export default function SpeakProvider({ children }: SpeakProviderType) {

    let forceStop = false;

    const { isSpeaking, speak, stopSpeaking} = useSpeakHook()

    const startSpeaking = (texts: string[]) => {

        forceStop = false;
        for (let text of texts) {
            if (forceStop) {
                break;
            }
            speak(text)
        }
    }

    const stopAllSpeaking = () => {
        forceStop = true
        stopSpeaking()
    }

    return (
        <SpeakContext.Provider value={{
            isSpeaking: isSpeaking,
            startSpeaking: startSpeaking,
            stopSpeaking: stopAllSpeaking
        }}>
            <>
                {Array.isArray(children) ? (
                    children.map((child, _index) => <>{child}</>)
                ) : (
                    {children}
                )}
            </>
        </SpeakContext.Provider>
    )
}
