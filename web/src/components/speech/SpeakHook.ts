import {useContext, useEffect, useState} from "react";
import {AppLanguage, AppLanguageContext} from "@/context/AppLanguageContext.ts";

type SpeakHookType = {
    isAvailable: boolean;
    isSpeaking: boolean;
    startSpeech: (text: string) => void;
    pauseCurrentSpeech: () => void;
    stopCurrentSpeech: () => void;
}

export default function useSpeakHook(): SpeakHookType {

    const { appLanguage } = useContext(AppLanguageContext);

    switch (appLanguage) {
        case AppLanguage.English:
            return useEnglishSpeakHook()
        case AppLanguage.Swahili:
            return useSwahiliSpeakHook()
        case AppLanguage.Kikuyu:
            return useKikuyuSpeakHook()
    }
}

function useEnglishSpeakHook(): SpeakHookType {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isAvailable, _setIsAvailable] = useState(typeof window !== 'undefined' && 'speechSynthesis' in window);
    const [_new, _setNew] = useState(false)
    const [_new1, _setNew1] = useState(false)

    useEffect(() => {
        if (!isAvailable) return;

        // Handle events for when speaking starts, pauses, and ends
        const onSpeakStart = () => setIsSpeaking(true);
        const onSpeakEnd = () => setIsSpeaking(false);
        const onSpeakPause = () => setIsSpeaking(false);

        window.speechSynthesis.addEventListener('start', onSpeakStart);
        window.speechSynthesis.addEventListener('end', onSpeakEnd);
        window.speechSynthesis.addEventListener('pause', onSpeakPause);

        return () => {
            window.speechSynthesis.removeEventListener('start', onSpeakStart);
            window.speechSynthesis.removeEventListener('end', onSpeakEnd);
            window.speechSynthesis.removeEventListener('pause', onSpeakPause);
        };
    }, [isAvailable]);

    const startSpeech = (text: string) => {
        if (!isAvailable || !text) return;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB';

        // Start speech
        window.speechSynthesis.speak(utterance);
    };

    const pauseCurrentSpeech = () => {
        if (!isAvailable || !isSpeaking) return;

        window.speechSynthesis.pause();
        setIsSpeaking(false);
    };

    const stopCurrentSpeech = () => {
        if (!isAvailable || !isSpeaking) return;

        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    return {
        isAvailable,
        isSpeaking,
        startSpeech,
        pauseCurrentSpeech,
        stopCurrentSpeech,
    };
}

function useSwahiliSpeakHook(): SpeakHookType {
    /* Flag to indicate whether support for calling the backend model is supported */
    const canUseBackendModel = false;

    const [isAvailable, setIsAvailable] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isUsingBrowserSpeechSynthesis, setIsUsingBrowserSpeechSynthesis] = useState(false);
    const [swahiliAudio, setSwahiliAudio] = useState<HTMLAudioElement | null>(null);

    // Check if browser supports Swahili (sw-KE)
    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            const voices = window.speechSynthesis.getVoices();
            const swahiliVoice = voices.find(voice => voice.lang === 'sw-KE');
            if (swahiliVoice) {
                setIsAvailable(true);
                setIsUsingBrowserSpeechSynthesis(true);
            } else if (canUseBackendModel) {
                setIsAvailable(true); // Backend model can handle Swahili
                setIsUsingBrowserSpeechSynthesis(false);
            } else {
                setIsAvailable(false); // No Swahili support
            }
        }
    }, [canUseBackendModel]);

    // Start speech synthesis via browser if Swahili is supported
    const startBrowserSpeechSynthesis = (text: string) => {
        if (isAvailable && isUsingBrowserSpeechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'sw-KE';
            window.speechSynthesis.speak(utterance);

            setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
        }
    };

    // Make a request to the backend model for Swahili speech synthesis
    const makeBackendTextToSpeechRequest = async (text: string) => {
        // Simulate a backend request, replace with your API call
        const response = await fetch('afyayangu.onrender.com/audio/swahili_tts', {
            method: 'POST',
            body: JSON.stringify({ text: text }),
            headers: { 'Content-Type': 'application/json' },
        });

        const { audioUrl } = await response.json();
        return audioUrl;
    };

    // Start speech by either using browser synthesis or backend fallback
    const startNewSpeech = async (text: string) => {
        if (!isAvailable) return;

        if (isUsingBrowserSpeechSynthesis) {
            startBrowserSpeechSynthesis(text);
        } else if (canUseBackendModel) {
            const audioUrl = await makeBackendTextToSpeechRequest(text);
            const audioElement = new Audio(audioUrl);
            setSwahiliAudio(audioElement);
            audioElement.play();

            setIsSpeaking(true);
            audioElement.onended = () => {
                setIsSpeaking(false);
                setSwahiliAudio(null);
            };
        }
    };

    const pauseCurrentSpeech = () => {
        if (isUsingBrowserSpeechSynthesis) {
            window.speechSynthesis.pause();
            setIsSpeaking(false);
        } else if (swahiliAudio) {
            swahiliAudio.pause();
            setIsSpeaking(false);
        }
    };

    const stopCurrentSpeech = () => {
        if (isUsingBrowserSpeechSynthesis) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else if (swahiliAudio) {
            swahiliAudio.pause();
            swahiliAudio.currentTime = 0;
            setIsSpeaking(false);
            setSwahiliAudio(null);
        }
    };

    return {
        isAvailable: isAvailable,
        isSpeaking: isSpeaking,
        startSpeech: startNewSpeech,
        pauseCurrentSpeech,
        stopCurrentSpeech,
    };
}

function useKikuyuSpeakHook(): SpeakHookType {

    return {
        isAvailable: false,
        isSpeaking: false,
        startSpeech: () => {},
        pauseCurrentSpeech: () => {},
        stopCurrentSpeech: () => {}
    }
}
