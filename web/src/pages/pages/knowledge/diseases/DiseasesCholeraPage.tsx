import ArticlePreview from "@/pages/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import ArticleComponent from "@/pages/components/article/ArticleComponent.tsx";
import SpeakPage from "@/pages/components/speech/SpeakPage.tsx";

export default function KnowledgeDiseasesCholeraPage() {

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