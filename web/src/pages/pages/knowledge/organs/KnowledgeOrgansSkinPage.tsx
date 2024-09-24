import ArticlePreview from "@/pages/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import ArticleComponent from "@/pages/components/article/ArticleComponent.tsx";
import SpeakPage from "@/pages/components/speech/SpeakPage.tsx";


export default function KnowledgeOrgansSkinPage() {

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

type KnowledgeOrgansSkinPreviewProps = {
    link: string
    isWide?: boolean
}

export function KnowledgeOrgansSkinPreview({link, isWide}: KnowledgeOrgansSkinPreviewProps) {
    return (
        <ArticlePreview
            link={link}
            description={LanguageTranslations.knowledgeOrgansSkinDescription}
            title={LanguageTranslations.knowledgeOrgansSkinTitle}
            isWide={isWide}
        />
    )
}