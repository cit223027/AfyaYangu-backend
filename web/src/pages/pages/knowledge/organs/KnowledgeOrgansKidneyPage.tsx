import ArticlePreview from "@/pages/components/article/ArticlePreview.tsx";
import { LanguageTranslations } from "@/pages/utils/LanguageTranslations.ts";
import ArticleComponent from "@/pages/components/article/ArticleComponent.tsx";
import SpeakPage from "@/pages/components/speech/SpeakPage.tsx";


export default function KnowledgeOrgansKidneyPage() {

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

type KnowledgeOrgansKidneyPreviewProps = {
    link: string;
    isWide?: boolean;
}

export function KnowledgeOrgansKidneyPreview({link, isWide}: KnowledgeOrgansKidneyPreviewProps) {
    return (
        <ArticlePreview
            link={link}
            description={LanguageTranslations.knowledgeOrgansKidneyDescription}
            title={LanguageTranslations.knowledgeOrgansKidneyTitle}
            isWide={isWide}
        />
    )
}