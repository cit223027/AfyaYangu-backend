import {Button} from "@/components/ui/button.tsx";
import {ExitIcon} from "@radix-ui/react-icons";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import React, {useContext, useState} from "react";
import {AppLanguage, AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";
import {MicIcon, SendIcon} from "lucide-react";
import {Textarea} from "@/components/ui/textarea.tsx";
import {useAudioRecorder} from "react-audio-voice-recorder";

type AIChatSpaceProps = {
    className?:string
    onCloseAIChatSpace: () => void;
}

type AISuggestion = {
    action: string
    message: string
}

type AIConversationMessage = {
    isUserMessage: boolean;
    language: AppLanguage;
    message: string;
    suggestions: AISuggestion[]
}

export default function AIChatSpace({
    className,
    onCloseAIChatSpace
}: AIChatSpaceProps) {

    const { appLanguage } = useContext(AppLanguageContext)

    const [conversationMessages, setConversationMessages] = useState<AIConversationMessage[]>([])
    const [textPrompt, setTextPrompt] = useState("")
    const [isListening, setIsListening] = useState(false)

    const { startRecording } = useAudioRecorder()

    const handleStartListening = async () => {

    }

    const handleStopRecording = () => {

    };

    const handleSubmit = () => {
        
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (textPrompt !== '') {
                handleSubmit()
            }
        }
    };

    return (
        <div className={`${className} flex flex-col w-full`}>
            <div className="flex flex-row justify-between py-4 my-2">
                <h4>{LanguageTranslations.aiAsk.getTranslation(appLanguage)}</h4>
                <Button variant="ghost" onClick={onCloseAIChatSpace}><ExitIcon /></Button>
            </div>

            <div className="grow w-full">
                {/* Contents of a conversation*/}
            </div>

            <div className="flex flex-row items-center px-2 py-2">
                {/* Input fields */}

                {textPrompt === '' && (
                    <Button
                        variant={isListening ? "destructive" : "default"}
                        onClick={isListening ? handleStartListening : handleStopRecording}
                        className={`transition-all duration-300 ease-in-out ${isListening ? "grow" : "rounded-full"}`}
                    >
                        <MicIcon className="w-4 h-4" />
                        <span className='ms-2'>{LanguageTranslations.speak.getTranslation(appLanguage)}</span>
                    </Button>
                )}

                <Textarea
                    className={`transition-all duration-300 ease-in-out mx-2 ${isListening ? "hidden" : "grow"}`}
                    value={textPrompt}
                    onChange={(e) => setTextPrompt(e.target.value)}
                    placeholder={`${LanguageTranslations.aiAsk.getTranslation(appLanguage)}...`}
                    onKeyDown={handleKeyDown}
                />

                <Button
                    className={`rounded-full`}
                    disabled={isListening || textPrompt === ''}
                    onClick={handleSubmit}
                >
                    <SendIcon className="w-4 h-4" />
                    <span className="ms-2">{LanguageTranslations.ask.getTranslation(appLanguage)}</span>
                </Button>
            </div>
        </div>
    )
}
