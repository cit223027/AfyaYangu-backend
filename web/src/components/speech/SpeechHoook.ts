import {useContext, useState} from "react";
import {AppLanguage, AppLanguageContext} from "@/context/AppLanguageContext.ts";
import { useSpeech } from "react-text-to-speech";

type SpeechHookProps = {

}

type SpeechHookResult = {
    isRecording: boolean,
    speechResult: string
    startRecording: () => void,
    stopRecording: () => void
}

export function useSpeechRecorder(): SpeechHookProps {

    const {appLanguage} = useContext(AppLanguageContext)
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [speechResult, setSpeechResult] = useState("")


    const startRecording = () => {
        setIsRecording(true)

        // startRecording
        switch (appLanguage) {
            case AppLanguage.English:

                break
            case AppLanguage.Swahili:
                break
        }
    }

    const stopRecording = () => {
        setIsRecording(false)

        // stop recording
        switch (appLanguage) {
            case AppLanguage.English:
                stop()
                break
            case AppLanguage.Swahili:
                break
        }
    }



    return {
        isRecording: isRecording,
        speechResult: speechResult,
        startRecording: startRecording,
        stopRecording: stopRecording
    }
}
