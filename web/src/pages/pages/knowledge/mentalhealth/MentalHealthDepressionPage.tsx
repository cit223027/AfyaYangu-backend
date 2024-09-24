import ArticleComponent from "@/pages/components/article/ArticleComponent.tsx";
import SpeakPage from "@/pages/components/speech/SpeakPage.tsx";

export default function KnowledgeMentalHealthDepressionPage() {

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