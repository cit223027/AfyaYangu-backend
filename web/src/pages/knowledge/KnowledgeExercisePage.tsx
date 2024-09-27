import SearchArticleSection from "@/components/search/SearchArticleSection.tsx";
import {AfyaYanguExerciseArticles} from "@/components/article/AfyaYanguArticles.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";

export default function KnowledgeExercisePage() {

    const { appLanguage } = useContext(AppLanguageContext)

    return (
        <div className="w-full">
            <p>{LanguageTranslations.knowledgeExerciseDescription.getTranslation(appLanguage)}</p>

            <SearchArticleSection articles={AfyaYanguExerciseArticles}/>
        </div>
    )
}
