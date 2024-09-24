import {useContext} from "react";
import {SpeakDivContext} from "@/pages/components/speech/SpeakContext.ts";
import {Button} from "@/components/ui/button.tsx";
import {SpeechIcon} from "lucide-react";

type SpeakDivHeaderProps = {
    id?: string
    className?: string
    children: JSX.Element
}

export default function SpeakDivHeading({ id, className, children }: SpeakDivHeaderProps) {

    const { speakDivContent } = useContext(SpeakDivContext)

    return (
        <div id={id} className={`${className} group flex items-center`}>
            <div className="">
                {children}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
                <Button className="" variant="outline" onClick={speakDivContent}>
                    <SpeechIcon/>
                </Button>
            </div>
        </div>
    )
}
