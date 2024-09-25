import ArticlePreview from "@/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";

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