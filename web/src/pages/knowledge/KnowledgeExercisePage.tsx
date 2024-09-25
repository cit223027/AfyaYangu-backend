import SearchArticleSection from "@/components/search/SearchArticleSection.tsx";
import {AfyaYanguExerciseArticles} from "@/components/article/AfyaYanguArticles.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Link} from "react-router-dom";

export default function KnowledgeExercisePage() {

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
                            <h4 className="andika-bold text-xl pb-1">{LanguageTranslations.knowledgeExercise.getTranslation(appLanguage)}</h4>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <p>{LanguageTranslations.knowledgeExerciseDescription.getTranslation(appLanguage)}</p>

            <SearchArticleSection articles={AfyaYanguExerciseArticles}/>
        </div>
    )
}
