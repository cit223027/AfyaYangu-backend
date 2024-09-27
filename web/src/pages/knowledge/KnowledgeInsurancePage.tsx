import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import SearchArticleSection from "@/components/search/SearchArticleSection.tsx";
import {AfyaYanguInsuranceArticles} from "@/components/article/AfyaYanguArticles.tsx";

export default function KnowledgeInsurancePage() {

    const { appLanguage } = useContext(AppLanguageContext)

    return (
        <div className="w-full">
            <p>{LanguageTranslations.knowledgeInsuranceDescription.getTranslation(appLanguage)}</p>

            <SearchArticleSection articles={AfyaYanguInsuranceArticles}/>
        </div>
    )
}
