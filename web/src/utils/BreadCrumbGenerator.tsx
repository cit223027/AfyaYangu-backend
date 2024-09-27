import {LanguageTranslation, LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import {Link} from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {AppLanguage} from "@/context/AppLanguageContext.ts";

export default class BreadCrumbGenerator {

    static generateBreadCrumbs(path: String, appLanguage: AppLanguage) {

        const pages = path.split('/').filter(page => page !== '');

        const breadcrumbItems = []

        if (pages.length < 1) {
            return this.createBreadCrumbItem("", appLanguage, "", true);
        }

        breadcrumbItems.push(this.createBreadCrumbItem("", appLanguage));

        let pagePrefix = ""

        for (let i = 0; i < pages.length; i++) {
            breadcrumbItems.push(this.createBreadCrumbSeparator());

            breadcrumbItems.push(this.createBreadCrumbItem(pages[i], appLanguage, pagePrefix, i == pages.length - 1));

            pagePrefix += `/${pages[i]}`;
        }

        return (
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbItems.map((breadcrumbItem) => breadcrumbItem)}
                </BreadcrumbList>
            </Breadcrumb>
        )
    }

    private static createBreadCrumbSeparator() {
        return (
            <BreadcrumbSeparator />
        )
    }

    private static createBreadCrumbItem(
        pageName: string,
        appLanguage: AppLanguage,
        linkPrefix: string = "",
        isCurrentPage: boolean = false
    ) {

        if (!isCurrentPage) {
            return (
                <BreadcrumbItem key={pageName}>
                    <BreadcrumbLink asChild>
                        <Link className="text-xl" to={`${linkPrefix}/${pageName}`}>{BreadCrumbGenerator.generatePageTranslation(pageName).getTranslation(appLanguage)}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )
        } else {
            return (
                <BreadcrumbItem key={pageName}>
                    <BreadcrumbPage>
                        <h4 className="andika-bold text-xl pb-1">{BreadCrumbGenerator.generatePageTranslation(pageName).getTranslation(appLanguage)}</h4>
                    </BreadcrumbPage>
                </BreadcrumbItem>
            )
        }
    }

    private static generatePageTranslation(pageName: string): LanguageTranslation {
        switch (pageName.toLowerCase()) {
            case "home":
                return LanguageTranslations.pageHome
            case "knowledge":
                return LanguageTranslations.pageKnowledge
            case "medicine":
                return LanguageTranslations.pageMedicine
            case "emergencycontacts":
                return LanguageTranslations.pageEmergencyContacts
            case "organs":
                return LanguageTranslations.knowledgeOrgans
            case "diseases":
                return LanguageTranslations.knowledgeDiseases
            case "exercise":
                return LanguageTranslations.knowledgeExercise
            case "firstaid":
                return LanguageTranslations.knowledgeFirstAid
            case "insurance":
                return LanguageTranslations.knowledgeInsurance
            case "mentalhealth":
                return LanguageTranslations.knowledgeMentalHeath
            case "brain":
                return LanguageTranslations.knowledgeOrgansBrainTitle
            case "heart":
                return LanguageTranslations.knowledgeOrgansHeartTitle
            case "lung":
                return LanguageTranslations.knowledgeOrgansLungTitle
            case "liver":
                return LanguageTranslations.knowledgeOrgansLiverTitle
            case "kidney":
                return LanguageTranslations.knowledgeOrgansKidneyTitle
            case "skin":
                return LanguageTranslations.knowledgeOrgansSkinTitle
            case "stomach":
                return LanguageTranslations.knowledgeOrgansStomachTitle
            case "breastcancer":
                return LanguageTranslations.knowledgeDiseasesBreastCancerTitle
            case "cholera":
                return LanguageTranslations.knowledgeDiseasesCholeraTitle
            case "malaria":
                return LanguageTranslations.knowledgeDiseasesMalariaTitle
            case "typhoid":
                return LanguageTranslations.knowledgeDiseasesTyphoidTitle
            case "hivaids":
                return LanguageTranslations.knowledgeDiseasesHivAidsTitle
            case "diabetes":
                return LanguageTranslations.knowledgeDiseasesDiabetesTitle
            case "pushups":
                return LanguageTranslations.knowledgeExercisePushUpTitle
            case "fainting":
                return LanguageTranslations.knowledgeFirstAidFaintingTitle
            case "choking":
                return LanguageTranslations.knowledgeFirstAidChokingTitle
            case "nosebleed":
                return LanguageTranslations.knowledgeFirstAidNoseBleedTitle
            case "nhif":
                return LanguageTranslations.knowledgeInsuranceNhifTitle
            case "uhc":
                return LanguageTranslations.knowledgeInsuranceUniversalHealthCareTitle
            case "anxiety":
                return LanguageTranslations.knowledgeMentalHealthAnxietyTitle
            case "autism":
                return LanguageTranslations.knowledgeMentalHealthAutismTitle
            case "depression":
                return LanguageTranslations.knowledgeMentalHealthDepressionTitle
            case "dyslexia":
                return LanguageTranslations.knowledgeMentalHealthDyslexiaTitle
            default:
                return LanguageTranslations.pageHome
        }
    }

}
