import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import SearchArticleSection from "@/pages/components/search/SearchArticleSection.tsx";
import {AfyaYanguDiseasesArticles} from "@/pages/components/article/AfyaYanguArticles.tsx";
import {useContext} from "react";
import {AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Link} from "react-router-dom";

export default function KnowledgeDiseasesPage() {

    const { appLanguage } = useContext(AppLanguageContext);

    return (
        <div className="w-full">
            <Breadcrumb className="mb-2 flex flex-row items-center">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/">{LanguageTranslations.pageHome.getTranslation(appLanguage)}</Link>
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
                            <h4 className="andika-bold text-xl pb-1">{LanguageTranslations.knowledgeDiseases.getTranslation(appLanguage)}</h4>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <p>{LanguageTranslations.knowledgeDiseasesDescription.getTranslation(appLanguage)}</p>

            <SearchArticleSection articles={AfyaYanguDiseasesArticles}/>
        </div>
    )
}
