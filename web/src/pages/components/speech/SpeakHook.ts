import { useSpeechSynthesis } from 'react-speech-kit'
import {useState} from "react";

type SpeakHookType = {
    isSpeaking: boolean;
    speak: (str: string) => void;
    stopSpeaking: () => void;
}
export default function useSpeakHook(): SpeakHookType {

    const [isSpeaking, setIsSpeaking] = useState(false)

    const { speak, cancel } = useSpeechSynthesis({
        onEnd: () => {
            setIsSpeaking(false)
        }
    })

    return {
        isSpeaking: isSpeaking,
        speak: (str: string) => {
            setIsSpeaking(true)
            speak(str)
        },
        stopSpeaking: () => {
            setIsSpeaking(false)
            cancel()
        }
    }
}
