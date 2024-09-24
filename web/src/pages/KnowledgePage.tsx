import {LanguageTranslation, LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import {useContext} from "react";
import {AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {GraduationCap} from "lucide-react";
import {Link} from "react-router-dom";
import SpeakPage from "@/pages/components/speech/SpeakPage.tsx";
import SearchArticleSection from "@/pages/components/search/SearchArticleSection.tsx";
import {AfyaYanguKnowledgeArticles} from "@/pages/components/article/AfyaYanguArticles.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";

export default function KnowledgePage() {

    const {appLanguage} = useContext(AppLanguageContext)


    return (
        <SpeakPage className="w-full h-full">
            <div className="w-full h-full flex flex-col">
                <div className="my-2">
                    <Breadcrumb className="mb-2 flex flex-row items-center">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator className="" />

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <h4 className="andika-bold text-xl pb-1">{LanguageTranslations.pageKnowledge.getTranslation(appLanguage)}</h4>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <p>{LanguageTranslations.knowledgePageDescription.getTranslation(appLanguage)}</p>
                </div>

                <div className="w-full">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="sections">
                            <AccordionTrigger>
                                <h6 className="andika-bold text-lg">{LanguageTranslations.knowledgeSubSections.getTranslation(appLanguage)}</h6>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div
                                    className="w-full max-w-dvw px-3 pt-2 pb-4 overflow-x-auto flex flex-row space-x-12 justify-evenly">

                                    <KnowledgeSubSectionCard
                                        link={"/knowledge/organs"}
                                        title={LanguageTranslations.knowledgeOrgans}
                                        description={LanguageTranslations.knowledgeOrgansDescription}
                                    />

                                    <KnowledgeSubSectionCard
                                        link={"/knowledge/diseases"}
                                        title={LanguageTranslations.knowledgeDiseases}
                                        description={LanguageTranslations.knowledgeDiseasesDescription}
                                    />

                                    <KnowledgeSubSectionCard
                                        link={"/knowledge/exercise"}
                                        title={LanguageTranslations.knowledgeExercise}
                                        description={LanguageTranslations.knowledgeExerciseDescription}
                                    />

                                    <KnowledgeSubSectionCard
                                        link={"/knowledge/firstaid"}
                                        title={LanguageTranslations.knowledgeFirstAid}
                                        description={LanguageTranslations.knowledgeFirstAidDescription}
                                    />

                                    <KnowledgeSubSectionCard
                                        link={"/knowledge/mentalhealth"}
                                        title={LanguageTranslations.knowledgeMentalHeath}
                                        description={LanguageTranslations.knowledgeMentalHealthDescription}
                                    />


                                    <KnowledgeSubSectionCard
                                        link={"/knowledge/insurance"}
                                        title={LanguageTranslations.knowledgeInsurance}
                                        description={LanguageTranslations.knowledgeInsuranceDescription}
                                    />

                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </div>

                <SearchArticleSection className="min-h-0 grow flex-shrink" articles={AfyaYanguKnowledgeArticles}/>

            </div>
        </SpeakPage>
    )
}

function KnowledgeSubSectionCard(
    {
        link,
        title,
        description
    }: {
        link: string
        title: LanguageTranslation;
        description: LanguageTranslation;
    }
) {

    const {appLanguage} = useContext(AppLanguageContext)

    return (
        <Card className="w-72 min-w-64">
            <CardHeader>
                <CardTitle>{title.getTranslation(appLanguage)}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{description.getTranslation(appLanguage)}</p>
            </CardContent>
            <CardFooter>
                <Link className="w-full" to={link}>
                    <Button className="w-full rounded-lg">
                        <GraduationCap/>
                        <span
                            className="ms-2">{LanguageTranslations.learn.getTranslation(appLanguage)}</span>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
