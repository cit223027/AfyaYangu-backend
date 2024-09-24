import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useContext} from "react";
import {AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {LanguageTranslation, LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import {GraduationCapIcon} from "lucide-react";

type ArticlePreviewProps = {
    className?: string;
    title: LanguageTranslation;
    description: LanguageTranslation;
    image?: JSX.Element | string
    link: string;
    isWide?: boolean;
}

export default function ArticlePreview({ className, title, description, image, link, isWide }: ArticlePreviewProps) {

    if (isWide) {
        return (
            <WideArticlePreview
                className={className}
                title={title}
                description={description}
                link={link}
                image={image}
            />
        )
    } else {
        return (
            <NormalArticlePreview
                className={className}
                title={title}
                description={description}
                link={link}
                image={image}
            />
        )
    }
}

function NormalArticlePreview({ className, title, description, image, link }: ArticlePreviewProps) {

    const { appLanguage } = useContext(AppLanguageContext)

    return (
        <Card className={`${className}`}>
            <CardHeader className="">
                <div className="">
                    {image && typeof image === 'string' && (
                        <img src={image} alt="Article preview" className="rounded-md mb-4" />
                    )}
                    {image && typeof image !== 'string' && (
                        <div className="mb-4">{image}</div> // Render JSX if it's passed as an element
                    )}
                </div>
                <CardTitle>{title.getTranslation(appLanguage)}</CardTitle>
                <CardDescription>{description.getTranslation(appLanguage)}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link className="w-full" to={link}>
                    <Button className="w-full rounded-lg">
                        <GraduationCapIcon className="h-6 w-6" />
                        <span className="ms-2">{LanguageTranslations.learn.getTranslation(appLanguage)}</span>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

function WideArticlePreview({ className, title, description, link, image }: ArticlePreviewProps) {
    const { appLanguage } = useContext(AppLanguageContext)

    return (
        <Card className={`${className} flex flex-row px-3 py-2`}>
            <div className="h-full">
                {image && typeof image === 'string' && (
                    <img src={image} alt="Article preview" className="w-24 h-24 rounded-md" />
                )}
                {image && typeof image !== 'string' && (
                    <div className="w-24 h-24">{image}</div> // Render JSX if it's passed as an element
                )}
            </div>
            <div className="flex flex-col grow">
                <CardTitle>{title.getTranslation(appLanguage)}</CardTitle>
                <CardDescription>{description.getTranslation(appLanguage)}</CardDescription>
            </div>

            <div className="h-full">
                <Link className="my-auto" to={link}>
                    <Button className="w-full rounded-lg">
                        <GraduationCapIcon className="h-6 w-6" />
                        <span className="ms-2">{LanguageTranslations.learn.getTranslation(appLanguage)}</span>
                    </Button>
                </Link>
            </div>
        </Card>
    )
}
