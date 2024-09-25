import useSpeakHook from "@/components/speech/SpeakHook.ts";
import {SpeakContext} from "@/components/speech/SpeakContext.ts";


type SpeakProviderType = {
    children: JSX.Element | JSX.Element[]
}

export default function SpeakProvider({ children }: SpeakProviderType) {

    let forceStop = false;

    const { isSpeaking, startSpeech, stopCurrentSpeech} = useSpeakHook()

    const startSpeaking = (texts: string[]) => {

        forceStop = false;

        console.log("SpeakProvider: startSpeaking", texts)

        for (let text of texts) {
            if (forceStop) {
                break;
            }
            startSpeech(text)
        }
    }

    const stopAllSpeaking = () => {
        forceStop = true
        stopCurrentSpeech()
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
