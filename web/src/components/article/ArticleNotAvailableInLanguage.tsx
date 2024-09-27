import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import {useContext} from "react";
import {AppLanguage, AppLanguageContext} from "@/context/AppLanguageContext.ts";
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

    const {appLanguage} = useContext(AppLanguageContext);

    const generateEnglishClassName = () => {
        let className = ""

        if (!hasSwahiliTranslation && !hasKikuyuTranslation) {
            className += " rounded-lg border"
        } else {
            className += " rounded-r-none rounded-l-lg border-l border-t border-b"
        }

        return className
    }

    const generateSwahiliClassName = () => {
        let className = "rounded-l-none border-l-none border-t border-b"

        if (!hasKikuyuTranslation) {
            className += " rounded-r-lg border-r"
        } else {
            className += " rounded-r-none border-r-none"
        }

        return className
    }

    return (
        <Card className="mx-auto w-72 lg:w-96 xl:w-1/3 my-2">
            <CardHeader>
                <CardTitle>{LanguageTranslations.articleNoTranslation.getTranslation(appLanguage)}</CardTitle>
                <CardDescription>{LanguageTranslations.articleNoTranslationDescription.getTranslation(appLanguage)}</CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="mx-auto">
                    <Button
                        className={generateEnglishClassName()}
                        variant={currentChosenLanguage == AppLanguage.English ? "default" : "ghost"}
                        onClick={onTranslateToEnglish}
                    >
                        <span>{LanguageTranslations.english.getTranslation(appLanguage)}</span>
                    </Button>
                    {hasSwahiliTranslation && (
                        <Button
                            className={generateSwahiliClassName()}
                            variant={currentChosenLanguage == AppLanguage.Swahili ? "default" : "ghost"}
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
                </div>
            </CardFooter>
        </Card>
    )
}
