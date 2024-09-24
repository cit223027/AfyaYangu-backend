import {useContext} from "react";
import { SpeakPageContext} from "@/pages/components/speech/SpeakContext.ts";
import {Button} from "@/components/ui/button.tsx";
import {SpeechIcon} from "lucide-react";

type SpeakPageHeadingType = {
    id?: string
    className?: string
    children: JSX.Element
}

export default function SpeakPageHeading(
    { id, className, children }: SpeakPageHeadingType
) {

    const { speakPage } = useContext(SpeakPageContext)


    return (
        <div id={id} className={`${className} group flex items-center`}>
            <div className="">
                {children}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
                <Button className="" variant="outline" onClick={speakPage}>
                    <SpeechIcon/>
                </Button>
            </div>
        </div>
    )
}
