import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import SearchArticleSection from "@/components/search/SearchArticleSection.tsx";
import {AfyaYanguDiseasesArticles} from "@/components/article/AfyaYanguArticles.tsx";
import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";

export default function KnowledgeDiseasesPage() {

    const { appLanguage } = useContext(AppLanguageContext);

    return (
        <div className="w-full">
            <p>{LanguageTranslations.knowledgeDiseasesDescription.getTranslation(appLanguage)}</p>

            <SearchArticleSection articles={AfyaYanguDiseasesArticles}/>
        </div>
    )
}
