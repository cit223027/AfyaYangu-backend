import {useContext, useEffect, useState} from "react";
import {AppLanguage, AppLanguageContext} from "@/context/AppLanguageContext.ts";
import ArticleNotAvailableInLanguage from "@/components/article/ArticleNotAvailableInLanguage.tsx";

type ArticleComponentProps = {
    englishComponent: JSX.Element
    swahiliComponent?: JSX.Element
    kikuyuComponent?: JSX.Element
}

export default function ArticleComponent({
    englishComponent,
    swahiliComponent,
    kikuyuComponent
}: ArticleComponentProps) {

    const { appLanguage } = useContext(AppLanguageContext)

    const hasSwahiliTranslation = swahiliComponent !== undefined
    const hasKikuyuTranslation = kikuyuComponent !== undefined

    const [isLackingTranslation, setIsLackingTranslation] = useState<boolean>(false)

    const [currentChosenLanguage, setCurrentChosenLanguage] = useState(AppLanguage.English)

    function chooseNewLanguage(chosenAppLanguage: AppLanguage) {
        switch (chosenAppLanguage) {
            case AppLanguage.English:
                setCurrentChosenLanguage(AppLanguage.English)
                break;
            case AppLanguage.Swahili:
                if (hasSwahiliTranslation) {
                    setCurrentChosenLanguage(AppLanguage.Swahili)
                } else {
                    setCurrentChosenLanguage(AppLanguage.English)
                }
                break;
            case AppLanguage.Kikuyu:
                if (hasKikuyuTranslation) {
                    setCurrentChosenLanguage(AppLanguage.Kikuyu)
                } else {
                    setCurrentChosenLanguage(AppLanguage.English)
                }
                break;
        }
    }

    function setUpNewLanguage(newAppLanguage: AppLanguage) {
        switch (newAppLanguage) {
            case AppLanguage.English:
                setCurrentChosenLanguage(AppLanguage.English)
                setIsLackingTranslation(false)
                break;
            case AppLanguage.Swahili:
                if (hasSwahiliTranslation) {
                    setIsLackingTranslation(false)
                    setCurrentChosenLanguage(AppLanguage.Swahili)
                } else {
                    setIsLackingTranslation(true)
                    setCurrentChosenLanguage(AppLanguage.English)
                }
                break;
            case AppLanguage.Kikuyu:
                if (hasKikuyuTranslation) {
                    setIsLackingTranslation(false)
                    setCurrentChosenLanguage(AppLanguage.Kikuyu)
                } else {
                    setIsLackingTranslation(true)
                    setCurrentChosenLanguage(AppLanguage.English)
                }
                break;
        }
    }

    useEffect(() => {
        setUpNewLanguage(appLanguage)
    }, [appLanguage]);



    return (
        <div className="w-full h-full article-page">
            {isLackingTranslation && (
                <div className="w-full flex flex-row justify-center">
                    <ArticleNotAvailableInLanguage
                        currentChosenLanguage={currentChosenLanguage}
                        hasSwahiliTranslation={hasSwahiliTranslation}
                        hasKikuyuTranslation={hasKikuyuTranslation}
                        onTranslateToEnglish={() => { chooseNewLanguage(AppLanguage.English) }}
                        onTranslateToSwahili={() => { chooseNewLanguage(AppLanguage.Swahili) }}
                        onTranslateToKikuyu={() => { chooseNewLanguage(AppLanguage.Kikuyu) }}
                    />
                </div>
            )}

            {currentChosenLanguage === AppLanguage.English && (<>{englishComponent}</>)}
            {currentChosenLanguage === AppLanguage.Swahili && (<>{swahiliComponent}</>)}
            {currentChosenLanguage === AppLanguage.Kikuyu && (<>{kikuyuComponent}</>)}
        </div>
    )
}
