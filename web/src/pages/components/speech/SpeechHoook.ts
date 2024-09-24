import {useContext, useState} from "react";
import { useSpeechRecognition } from 'react-speech-kit'
import {AppLanguage, AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";

type SpeechHookProps = {
    isRecording: boolean,
    speechResult: string
    startRecording: () => void,
    stopRecording: () => void
}

export function useSpeechRecorder(): SpeechHookProps {

    const { appLanguage } = useContext(AppLanguageContext)
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [speechResult, setSpeechResult] = useState("")

    const { listen, stop } = useSpeechRecognition({
        onResult: (result: string) => {
            setSpeechResult(result)
        },
        onEnd: () => {
            setIsRecording(false)
        }
    })

    const startRecording = () => {
        setIsRecording(true)

        // startRecording
        switch (appLanguage) {
            case AppLanguage.English:
                listen({
                    interimResults: true
                })
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

    return {
        isRecording: isRecording,
        speechResult: speechResult,
        startRecording: startRecording,
        stopRecording: stopRecording
    }
}
