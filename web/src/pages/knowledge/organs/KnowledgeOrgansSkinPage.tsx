import ArticlePreview from "@/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";


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