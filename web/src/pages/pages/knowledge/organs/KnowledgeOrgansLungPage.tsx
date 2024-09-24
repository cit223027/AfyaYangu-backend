import ArticlePreview from "@/pages/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import ArticleComponent from "@/pages/components/article/ArticleComponent.tsx";
import SpeakPage from "@/pages/components/speech/SpeakPage.tsx";

export default function KnowledgeOrgansLungPage() {

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

type KnowledgeOrgansLungPreviewProps = {
    link: string,
    isWide?: boolean;
}

export function KnowledgeOrgansLungPreview({link, isWide}: KnowledgeOrgansLungPreviewProps) {
    return (
        <ArticlePreview
            link={link}
            description={LanguageTranslations.knowledgeOrgansLungDescription}
            title={LanguageTranslations.knowledgeOrgansLungTitle}
            isWide={isWide}
        />
    )
}