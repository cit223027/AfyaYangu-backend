import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import {useContext} from "react";
import {AppLanguage, AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";
import {Button} from "@/components/ui/button.tsx";

type ArticleNotAvailableInLanguageProps = {
    currentChosenLanguage: AppLanguage;
    hasSwahiliTranslation: boolean;
    hasKikuyuTranslation: boolean;

    onTranslateToEnglish: () => void;
    onTranslateToSwahili: () => void;
    onTranslateToKikuyu: () => void;
}

export default function ArticleNotAvailableInLanguage({
    currentChosenLanguage,
    hasSwahiliTranslation,
    hasKikuyuTranslation,
    onTranslateToEnglish,
    onTranslateToSwahili,
    onTranslateToKikuyu
}: ArticleNotAvailableInLanguageProps) {

    const { appLanguage } = useContext(AppLanguageContext);

    return (
        <Card className="mx-auto w-48">
            <CardHeader>
                <CardTitle>{LanguageTranslations.articleNoTranslation.getTranslation(appLanguage)}</CardTitle>
                <CardDescription>{LanguageTranslations.articleNoTranslationDescription.getTranslation(appLanguage)}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button
                    className=""
                    variant={currentChosenLanguage == AppLanguage.English ? "default" : "outline"}
                    onClick={onTranslateToEnglish}
                >
                    <span>{LanguageTranslations.english.getTranslation(appLanguage)}</span>
                </Button>
                {hasSwahiliTranslation && (
                    <Button
                        className=""
                        variant={currentChosenLanguage == AppLanguage.Swahili ? "default" : "outline"}
                        onClick={onTranslateToSwahili}
                    >
                        <span>{LanguageTranslations.swahili.getTranslation(appLanguage)}</span>
                    </Button>
                )}
                {hasKikuyuTranslation && (
                    <Button
                        className=""
                        variant={currentChosenLanguage == AppLanguage.Kikuyu ? "default" : "outline"}
                        onClick={onTranslateToKikuyu}
                    >
                        <span>{LanguageTranslations.kikuyu.getTranslation(appLanguage)}</span>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
