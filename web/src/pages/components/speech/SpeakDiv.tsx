import { useContext } from "react";
import {SpeakContext, SpeakDivContext, SpeakPageContext} from "@/pages/components/speech/SpeakContext.ts";

type SpeakDivProps = {
    id?: string;
    className?: string;
    children: JSX.Element | JSX.Element[];
}

type SpeakDivContentType = {
    id: string;
    text: string;
}

export default function SpeakDiv({ id, className, children }: SpeakDivProps) {
    const { startSpeaking } = useContext(SpeakContext);
    const { hasSpeakPage, appendSpeakPageText } = useContext(SpeakPageContext);
    const { hasSpeakDiv, appendSpeakDivText } = useContext(SpeakDivContext);

    const speakDivContent: SpeakDivContentType[] = [];

    const appendNewSpeakText = (id: string, text: string) => {
        speakDivContent.push({ id: id, text: text });

        if (hasSpeakDiv) {
            appendSpeakDivText(id, text);
        } else if (hasSpeakPage) {
            appendSpeakPageText(id, text);
        }
    };

    const startSpeakingDevContent = () => {
        startSpeaking(speakDivContent.map((speakContent) => speakContent.text));
    };

    return (
        <SpeakDivContext.Provider
            value={{
                hasSpeakDiv: true,
                appendSpeakDivText: appendNewSpeakText,
                speakDivContent: startSpeakingDevContent,
            }}
        >
            <div id={id} className={className}>
                {Array.isArray(children) ? (
                    children.map((child, index) => <div key={index}>{child}</div>)
                ) : (
                    <div>{children}</div> // Render single element directly
                )}
            </div>
        </SpeakDivContext.Provider>
    );
}
