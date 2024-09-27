import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import SearchArticleSection from "@/components/search/SearchArticleSection.tsx";
import {AfyaYanguOrgansArticles} from "@/components/article/AfyaYanguArticles.tsx";

export function KnowledgeOrgansPage() {

    const { appLanguage } = useContext(AppLanguageContext)

    return (
        <div className="w-full">
            <p>{LanguageTranslations.knowledgeOrgansDescription.getTranslation(appLanguage)}</p>

            <SearchArticleSection articles={AfyaYanguOrgansArticles} />
        </div>
    )
}
