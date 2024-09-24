import ArticlePreview from "@/pages/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import ArticleComponent from "@/pages/components/article/ArticleComponent.tsx";
import SpeakPage from "@/pages/components/speech/SpeakPage.tsx";

export function KnowledgeOrgansStomachPreview() {
    return (
        <ArticlePreview
            link="/knowledge/organs/stomach"
            description={LanguageTranslations.knowledgeOrgansStomachDescription}
            title={LanguageTranslations.knowledgeOrgansStomachTitle}
        />
    )
}

export default function KnowledgeOrgansStomachPage() {

    return (
        <ArticleComponent
            englishComponent={<EnglishArticle />}
        />
    )
}

function EnglishArticle() {
    return (
        <SpeakPage>
            <div>

            </div>
        </SpeakPage>
    )
}