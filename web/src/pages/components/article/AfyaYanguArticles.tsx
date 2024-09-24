
import {KnowledgeOrgansBrainPreview} from "@/pages/pages/knowledge/organs/KnowledgeOrgansBrainPage.tsx";
import {KnowledgeOrgansHeartPreview} from "@/pages/pages/knowledge/organs/KnowledgeOrgansHeartPage.tsx";
import {LanguageTranslation, LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import {KnowledgeOrgansKidneyPreview} from "@/pages/pages/knowledge/organs/KnowledgeOrgansKidneyPage.tsx";
import {KnowledgeOrgansLiverPreview} from "@/pages/pages/knowledge/organs/KnowledgeOrgansLiverPage.tsx";
import {KnowledgeOrgansLungPreview} from "@/pages/pages/knowledge/organs/KnowledgeOrgansLungPage.tsx";
import ArticlePreview from "@/pages/components/article/ArticlePreview.tsx";

// <editor-fold desc="Articles">
// <editor-fold desc="Organ articles">
const OrgansBrain: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeOrgansBrainTitle,
    preview: (isWide) => {
        return (
            <KnowledgeOrgansBrainPreview
                link="/knowledge/organs/brain"
                isWide={isWide}
            />
        )
    }
}

const OrgansHeart: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeOrgansHeartTitle,
    preview: (isWide) => {
        return (
            <KnowledgeOrgansHeartPreview
                link="/knowledge/organs/heart"
                isWide={isWide}
            />
        )
    }
}

const OrgansKidney: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeOrgansKidneyTitle,
    preview: (isWide) => {
        return (
            <KnowledgeOrgansKidneyPreview
                link="/knowledge/organs/kidney"
                isWide={isWide}
            />
        )
    }
}

const OrgansLiver: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeOrgansLiverTitle,
    preview: (isWide) => {
        return (
            <KnowledgeOrgansLiverPreview
                link="/knowledge/organs/liver"
                isWide={isWide}
            />
        )
    }
}

const OrgansLung: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeOrgansLungTitle,
    preview: (isWide) => {
        return (
            <KnowledgeOrgansLungPreview
                link='/knowledge/organs/lung'
                isWide={isWide}
            />
        )
    }
}

const OrgansSkin: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeOrgansSkinTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/organs/skin"
                title={LanguageTranslations.knowledgeOrgansSkinTitle}
                description={LanguageTranslations.knowledgeOrgansSkinDescription}
                isWide={isWide}
            />
        )
    }
}

const OrgansStomach: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeOrgansStomachTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/organs/stomach"
                title={LanguageTranslations.knowledgeOrgansStomachTitle}
                description={LanguageTranslations.knowledgeOrgansStomachDescription}
                isWide={isWide}
            />
        )
    }
}

// </editor-fold>
// <editor-fold desc="Diseases Articles">

const DiseasesBreastCancer: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeDiseasesBreastCancerTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/diseases/breastcancer"
                title={LanguageTranslations.knowledgeDiseasesBreastCancerTitle}
                description={LanguageTranslations.knowledgeDiseasesBreastCancerDescription}
                isWide={isWide}
            />
        )
    }
}

const DiseasesCholera: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeDiseasesCholeraTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/diseases/cholera"
                title={LanguageTranslations.knowledgeDiseasesCholeraTitle}
                description={LanguageTranslations.knowledgeDiseasesCholeraDescription}
                isWide={isWide}
            />
        )
    }
}

const DiseasesDiabetes: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeDiseasesDiabetesTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/diseases/diabetes"
                title={LanguageTranslations.knowledgeDiseasesDiabetesTitle}
                description={LanguageTranslations.knowledgeDiseasesDiabetesDescription}
                isWide={isWide}
            />
        )
    }
}

const DiseasesHivAids: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeDiseasesHivAidsTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/diseases/hivaids"
                title={LanguageTranslations.knowledgeDiseasesHivAidsTitle}
                description={LanguageTranslations.knowledgeDiseasesHivAidsDescription}
                isWide={isWide}
            />
        )
    }
}

const DiseasesMalaria: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeDiseasesMalariaTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/diseases/malaria"
                title={LanguageTranslations.knowledgeDiseasesMalariaTitle}
                description={LanguageTranslations.knowledgeDiseasesMalariaDescription}
                isWide={isWide}
            />
        )
    }
}

const DiseasesTyphoid: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeDiseasesTyphoidTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/diseases/typhoid"
                title={LanguageTranslations.knowledgeDiseasesTyphoidTitle}
                description={LanguageTranslations.knowledgeDiseasesTyphoidDescription}
                isWide={isWide}
            />
        )
    }
}
// </editor-fold>
// <editor-fold desc="Exercise Articles">

const ExercisePushUps: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeExercisePushUpTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/exercise/pushups"
                title={LanguageTranslations.knowledgeExercisePushUpTitle}
                description={LanguageTranslations.knowledgeExercisePushUpDescription}
                isWide={isWide}
            />
        )
    }
}
// </editor-fold>
// <editor-fold desc="Mental Health Articles">
const MentalHealthAnxiety: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeMentalHealthAnxietyTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/mentalhealth/anxiety"
                title={LanguageTranslations.knowledgeMentalHealthAnxietyTitle}
                description={LanguageTranslations.knowledgeMentalHealthAnxietyDescription}
                isWide={isWide}
            />
        )
    }
}

const MentalHealthAutism: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeMentalHealthAutismTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/mentalhealth/autism"
                title={LanguageTranslations.knowledgeMentalHealthAutismTitle}
                description={LanguageTranslations.knowledgeMentalHealthAutismDescription}
                isWide={isWide}
            />
        )
    }
}

const MentalHealthDepression: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeMentalHealthDepressionTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/mentalhealth/depression"
                title={LanguageTranslations.knowledgeMentalHealthDepressionTitle}
                description={LanguageTranslations.knowledgeMentalHealthDepressionDescription}
                isWide={isWide}
            />
        )
    }
}

const MentalHealthDyslexia: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeMentalHealthDyslexiaTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/mentalhealth/dyslexia"
                title={LanguageTranslations.knowledgeMentalHealthDyslexiaTitle}
                description={LanguageTranslations.knowledgeMentalHealthDyslexiaDescription}
                isWide={isWide}
            />
        )
    }
}

// </editor-fold>
// <editor-fold desc="First Aid Articles">
const FirstAidChoking: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeFirstAidChokingTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/firstaid/choking"
                title={LanguageTranslations.knowledgeFirstAidChokingTitle}
                description={LanguageTranslations.knowledgeFirstAidChokingDescription}
                isWide={isWide}
            />
        )
    }
}

const FirstAidFainting: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeFirstAidFaintingTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/firstaid/fainting"
                title={LanguageTranslations.knowledgeFirstAidFaintingTitle}
                description={LanguageTranslations.knowledgeFirstAidFaintingDescription}
                isWide={isWide}
            />
        )
    }
}

const FirstAidNoseBleed: AfyaYanguArticle = {
    title: LanguageTranslations.knowledgeFirstAidNoseBleedTitle,
    preview: (isWide) => {
        return (
            <ArticlePreview
                link="/knowledge/firstaid/nosebleed"
                title={LanguageTranslations.knowledgeFirstAidNoseBleedTitle}
                description={LanguageTranslations.knowledgeFirstAidNoseBleedDescription}
                isWide={isWide}
            />
        )
    }
}
// </editor-fold>


export const AfyaYanguKnowledgeArticles: AfyaYanguArticle[] = [
    OrgansBrain,
    OrgansHeart,
    OrgansKidney,
    OrgansLiver,
    OrgansLung,
    OrgansSkin,
    OrgansStomach,

    DiseasesBreastCancer,
    DiseasesCholera,
    DiseasesDiabetes,
    DiseasesMalaria,
    DiseasesHivAids,
    DiseasesTyphoid,

    ExercisePushUps,

    FirstAidChoking,
    FirstAidFainting,
    FirstAidNoseBleed,

    MentalHealthAnxiety,
    MentalHealthAutism,
    MentalHealthDepression,
    MentalHealthDyslexia,
]

export const AfyaYanguOrgansArticles = [
    OrgansBrain,
    OrgansHeart,
    OrgansKidney,
    OrgansLiver,
    OrgansLung,
    OrgansSkin,
    OrgansStomach
]

export const AfyaYanguDiseasesArticles = [
    DiseasesBreastCancer,
    DiseasesCholera,
    DiseasesDiabetes,
    DiseasesMalaria,
    DiseasesHivAids,
    DiseasesTyphoid
]

export const AfyaYanguFirstAidArticles = [
    FirstAidChoking,
    FirstAidFainting,
    FirstAidNoseBleed,
]

export const AfyaYanguInsuranceArticles = []

export const AfyaYanguExerciseArticles = [
    ExercisePushUps
]

export const AfyaYanguMentalHealthArticles = [
    MentalHealthAnxiety,
    MentalHealthAutism,
    MentalHealthDepression,
    MentalHealthDyslexia
]

export type AfyaYanguArticle = {
    title: LanguageTranslation,
    preview: (isWide: boolean) => JSX.Element
}

