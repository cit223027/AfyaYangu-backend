import {createContext} from "react";

type SpeakContextType = {
    isSpeaking: boolean;
    startSpeaking: (texts: string[]) => void;
    stopSpeaking: () => void;
}

type SpeakPageContextProps = {
    hasSpeakPage: boolean;
    appendSpeakPageText:(id: string, text: string) => void;
    speakPage: () => void
}

type SpeakDivContextProps = {
    hasSpeakDiv: boolean
    appendSpeakDivText:(id: string, text: string) => void;
    speakDivContent: () => void
}

export const SpeakContext = createContext<SpeakContextType>({
    isSpeaking: false,
    startSpeaking: (_texts: string[]) => {},
    stopSpeaking: () => {}
})

export const SpeakPageContext = createContext<SpeakPageContextProps>({
    hasSpeakPage: false,
    appendSpeakPageText: (_id: string, _text: string) => {},
    speakPage: () => {}
})

export const SpeakDivContext = createContext<SpeakDivContextProps>({
    hasSpeakDiv: false,
    appendSpeakDivText: (_id: string, _text: string) => {},
    speakDivContent: () => {}
})
