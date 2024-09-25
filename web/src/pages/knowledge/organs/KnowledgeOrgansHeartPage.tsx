import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import ArticlePreview from "@/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Link} from "react-router-dom";

export default function KnowledgeOrgansHeartPage() {

    return (
        <ArticleComponent
            englishComponent={EnglishFunction()}
        />
    )
}

function EnglishFunction() {
     return (
         <div>
             <h2>Heart</h2>
             <p>
                 The heart is a muscular <a href="/knowledge/organs">organ</a> found in most animals. This organ pumps
                 blood through the blood vessels of the{' '}
                 <a href="https://en.wikipedia.org/wiki/Circulatory_system">circulatory system</a>. The pumped blood
                 carries{' '}
                 <a href="https://en.wikipedia.org/wiki/Oxygen">oxygen</a> and{' '}
                 <a href="https://en.wikipedia.org/wiki/Nutrient">nutrients</a> to the body, while carrying metabolic
                 waste such as{' '}
                 <a href="https://en.wikipedia.org/wiki/Carbon_dioxide">carbon dioxide</a> to the lungs. The heart is
                 approximately the size of a closed fist and
                 is located between the lungs, in the middle compartment of the chest, called the{' '}
                 <a href="https://en.wikipedia.org/wiki/Mediastinum">mediastinum</a>.
             </p>

             <img
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Heart_anterior_exterior_view.png/250px-Heart_anterior_exterior_view.png"
                 alt="Heart exterior view"
             />

             <h3>Structure</h3>
             <p>
                 The heart is divided into four chambers: upper left and right{' '}
                 <a href="https://en.wikipedia.org/wiki/Atrium_(heart)">atria</a> and lower left and right{' '}
                 <a href="https://en.wikipedia.org/wiki/Ventricle_(heart)">ventricles</a>. Commonly, the right atrium
                 and ventricle are referred to together as the
                 right heart and their left counterparts as the left heart.
             </p>

             <h3>Function</h3>
             <img
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/CG_Heart.gif/220px-CG_Heart.gif"
                 alt="Heart animation"
             />

             <h4>Right Side</h4>
             <p>The right side of the heart receives deoxygenated blood and sends it to the lungs.</p>
             <ul>
                 <li>
                     The right atrium receives deoxygenated blood from the body through veins called the superior and
                     inferior vena cava. These are the largest veins
                     in the body.
                 </li>
                 <li>The right atrium contracts, and blood passes to the right ventricle.</li>
                 <li>
                     Once the right ventricle is full, it contracts and pumps the blood to the lungs via the pulmonary
                     artery. In the lungs, the blood picks up oxygen
                     and offloads carbon dioxide.
                 </li>
             </ul>

             <h4>Left Side</h4>
             <p>The left side of the heart receives blood from the lungs and pumps it to the rest of the body.</p>
             <ul>
                 <li>Newly oxygenated blood returns to the left atrium via the pulmonary veins.</li>
                 <li>The left atrium contracts, pushing the blood into the left ventricle.</li>
                 <li>Once the left ventricle is full, it contracts and pushes the blood back out to the body via the
                     aorta.
                 </li>
             </ul>
         </div>
     )
}

type KnowledgeOrgansHeartPreviewProps = {
    link: string;
    isWide?: boolean
}

export function KnowledgeOrgansHeartPreview({link, isWide}: KnowledgeOrgansHeartPreviewProps) {
    return (
        <ArticlePreview
            link={link}
            description={LanguageTranslations.knowledgeOrgansHeartDescription}
            title={LanguageTranslations.knowledgeOrgansHeartTitle}
            isWide={isWide}
        />
    )
}
