import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import SearchArticleSection from "@/components/search/SearchArticleSection.tsx";
import {AfyaYanguFirstAidArticles} from "@/components/article/AfyaYanguArticles.tsx";

export default function KnowledgeFirstAidPage() {

    const { appLanguage } = useContext(AppLanguageContext)

    return (
        <div className="w-full">
            <p>{LanguageTranslations.knowledgeFirstAidDescription.getTranslation(appLanguage)}</p>

            <SearchArticleSection articles={AfyaYanguFirstAidArticles}/>
        </div>
    )
}
