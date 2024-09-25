import ArticlePreview from "@/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";


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