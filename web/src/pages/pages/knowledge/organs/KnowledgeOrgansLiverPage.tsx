import ArticlePreview from "@/pages/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import ArticleComponent from "@/pages/components/article/ArticleComponent.tsx";
import SpeakPage from "@/pages/components/speech/SpeakPage.tsx";


export default function KnowledgeOrgansLiverPage() {

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

type KnowledgeOrgansLiverPreviewProps = {
    link: string;
    isWide?: boolean;
}

export function KnowledgeOrgansLiverPreview({link, isWide}: KnowledgeOrgansLiverPreviewProps) {
    return (
        <ArticlePreview
            link={link}
            description={LanguageTranslations.knowledgeOrgansLiverDescription}
            title={LanguageTranslations.knowledgeOrgansLiverTitle}
            isWide={isWide}
        />
    )
}