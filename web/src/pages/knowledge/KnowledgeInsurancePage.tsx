import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import SearchArticleSection from "@/components/search/SearchArticleSection.tsx";
import {AfyaYanguInsuranceArticles} from "@/components/article/AfyaYanguArticles.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Link} from "react-router-dom";

export default function KnowledgeInsurancePage() {

    const { appLanguage } = useContext(AppLanguageContext)

    return (
        <div className="w-full">
            <Breadcrumb className="mb-2 flex flex-row items-center">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/public">{LanguageTranslations.pageHome.getTranslation(appLanguage)}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator className="" />

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/knowledge">{LanguageTranslations.pageKnowledge.getTranslation(appLanguage)}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator className="" />

                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <h4 className="andika-bold text-xl pb-1">{LanguageTranslations.knowledgeInsurance.getTranslation(appLanguage)}</h4>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <p>{LanguageTranslations.knowledgeInsuranceDescription.getTranslation(appLanguage)}</p>

            <SearchArticleSection articles={AfyaYanguInsuranceArticles}/>
        </div>
    )
}
