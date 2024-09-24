import {Button} from "@/components/ui/button.tsx";
import {SpeechIcon} from "lucide-react";
import {useContext} from "react";
import {SpeakContext, SpeakDivContext, SpeakPageContext} from "@/pages/components/speech/SpeakContext.ts";

type SpokenParagraphProps = {
    id?: string
    className?: string
    children: JSX.Element | JSX.Element[]
}

type SpeakContentProps = {
    id: string;
    text: string;
}

export default function SpeakParagraph({ id, className, children }: SpokenParagraphProps) {

    const { startSpeaking } = useContext(SpeakContext);

    const { hasSpeakDiv, appendSpeakDivText } = useContext(SpeakDivContext)
    const { hasSpeakPage, appendSpeakPageText } = useContext(SpeakPageContext)

    const speakDivContent: SpeakContentProps[] = [];

    const appendNewSpeakText = (id: string, text: string) => {
        speakDivContent.push({ id: id, text: text });

        if (hasSpeakDiv) {
            appendSpeakDivText(id, text);
        } else if (hasSpeakPage) {
            appendSpeakPageText(id, text);
        }
    };

    if(Array.isArray(children)) {
        children.forEach((child: JSX.Element) => {
            appendNewSpeakText("", processElement(child));
        })
    } else {
        appendNewSpeakText("", processElement(children));
    }


    return (
        <div id={id} className={`${className} group flex items-center`}>
            <div className="">

                {Array.isArray(children) ? (
                    children.map((child, index) => <div key={index}>{child}</div>)
                ) : (
                    <div>{children}</div> // Render single element directly
                )}

            </div>
            <div className="ml-2 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform duration-300 ease-in-out">
                <Button className="" variant="outline" onClick={() => startSpeaking(speakDivContent.map((content) => content.text))}>
                    <SpeechIcon/>
                </Button>
            </div>
        </div>
    )
}

function processElement(element: JSX.Element): string {
    let text = ""

    switch (element.type) {
        case "p":
            text += element.props.children.toString()
            break
        case "strong":
            text += element.props.children.toString()
            break
        case "ol":
        case "ul":
            let listElements = element.props.children
            for (const listElement of listElements) {
                text += processElement(listElement)
            }
            break
    }

    return text
}
