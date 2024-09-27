import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import ArticlePreview from "@/components/article/ArticlePreview.tsx";
import SpeakPage from "@/components/speech/SpeakPage";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";

export default function KnowledgeOrgansHeartPage() {

    return (
        <ArticleComponent
            englishComponent={EnglishFunction()}
        />
    )
}

function EnglishFunction() {
     return (
         <SpeakPage>
             <SpeakParagraph>
                 <p>The heart is a vital muscular <a href="/knowledge/organs">organ</a> present in most animals, responsible for pumping blood throughout the body. Through the <a href="https://en.wikipedia.org/wiki/Circulatory_system">circulatory system</a>, it ensures the delivery of <a href="https://en.wikipedia.org/wiki/Oxygen">oxygen</a> and <a href="https://en.wikipedia.org/wiki/Nutrient">nutrients</a> to tissues, while transporting metabolic waste such as <a href="https://en.wikipedia.org/wiki/Carbon_dioxide">carbon dioxide</a> to the lungs for removal. About the size of a closed fist, the heart is located in the chest's central compartment, known as the <a href="https://en.wikipedia.org/wiki/Mediastinum">mediastinum</a>, nestled between the lungs.</p>
             </SpeakParagraph>

             <div className="my-4">
                 <div className="bg-white rounded-lg p-2 w-fit mx-auto">
                     <img
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Heart_anterior_exterior_view.png/250px-Heart_anterior_exterior_view.png"
                         alt="Heart exterior view"
                     />
                 </div>
             </div>

             <SpeakDiv>
                 <SpeakDivHeading>
                     <h3>Anatomy of the Heart</h3>
                 </SpeakDivHeading>
                 <SpeakParagraph>
                     <p>The heart is divided into four chambers, which work together to ensure proper blood flow:</p>
                 </SpeakParagraph>
                 <ul>
                     <SpeakParagraph>
                         <li><strong>Atria (Upper Chambers):</strong> The heart has two upper chambers called atria — the right atrium and the left atrium. These chambers receive blood: the right atrium receives deoxygenated blood from the body, and the left atrium receives oxygenated blood from the lungs.</li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>Ventricles (Lower Chambers):</strong> The two lower chambers, the right and left ventricles, pump blood out of the heart. The right ventricle sends deoxygenated blood to the lungs, while the left ventricle pumps oxygenated blood to the rest of the body through the aorta.</li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>Heart Valves:</strong> Four valves ensure unidirectional blood flow through the heart: the tricuspid, pulmonary, mitral, and aortic valves. These valves prevent backflow, ensuring efficient circulation.</li>
                     </SpeakParagraph>
                 </ul>
                 <SpeakParagraph>
                     <p>The heart is also surrounded by a protective double-layered membrane called the pericardium, which provides lubrication and reduces friction during heartbeats.</p>
                 </SpeakParagraph>
             </SpeakDiv>

             <SpeakDiv>
                 <SpeakDivHeading>
                     <h3>Function of the Heart</h3>
                 </SpeakDivHeading>
                 <SpeakParagraph>
                     <p>The heart functions as a pump, working in a coordinated manner to circulate blood throughout the body. This process is split between the right and left sides of the heart:</p>
                 </SpeakParagraph>

                 <SpeakDivHeading>
                     <h4>Right Side of the Heart</h4>
                 </SpeakDivHeading>
                 <ul>
                     <SpeakParagraph>
                         <li><strong>Receiving Deoxygenated Blood:</strong> The right atrium collects deoxygenated blood from the body through the superior and inferior vena cava.</li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>Blood to the Lungs:</strong> The right atrium contracts, pushing the blood into the right ventricle, which then pumps it to the lungs through the pulmonary artery. In the lungs, the blood releases carbon dioxide and absorbs oxygen.</li>
                     </SpeakParagraph>
                 </ul>

                 <SpeakDivHeading>
                     <h4>Left Side of the Heart</h4>
                 </SpeakDivHeading>
                 <ul>
                     <SpeakParagraph>
                         <li><strong>Receiving Oxygenated Blood:</strong> The left atrium receives oxygenated blood from the lungs via the pulmonary veins.</li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>Blood to the Body:</strong> The left atrium contracts, moving the blood into the left ventricle. The left ventricle, being the strongest chamber, pumps oxygenated blood out to the rest of the body through the aorta, the body's largest artery.</li>
                     </SpeakParagraph>
                 </ul>
                 <SpeakParagraph>
                     <p>With each heartbeat, the heart ensures that oxygen-rich blood is supplied to organs and tissues while removing waste products like carbon dioxide.</p>
                 </SpeakParagraph>
             </SpeakDiv>

             <div className="my-4">
                 <div className="p-2 w-fit mx-auto">
                     <img
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/CG_Heart.gif/220px-CG_Heart.gif"
                         alt="Heart animation"
                     />
                 </div>
             </div>

             <SpeakDiv>
                 <SpeakDivHeading>
                     <h3>Common Complications and Disorders of the Heart</h3>
                 </SpeakDivHeading>
                 <ul>
                     <SpeakParagraph>
                         <li><strong>Heart Attack (Myocardial Infarction):</strong> Occurs when blood flow to a part of the heart is blocked, usually by a clot, leading to damage of the heart muscle. Symptoms include chest pain, shortness of breath, and fatigue.</li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>Heart Failure:</strong> A condition where the heart is unable to pump blood effectively, leading to fatigue, fluid retention, and shortness of breath. This can result from chronic high blood pressure or coronary artery disease.</li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>Arrhythmia:</strong> A disorder of the heart's electrical system that causes abnormal heart rhythms. Some arrhythmias may be harmless, but others can lead to serious complications like stroke or heart failure.</li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>Cardiomyopathy:</strong> A disease of the heart muscle that makes it harder for the heart to pump blood. It can lead to heart failure and other complications if left untreated.</li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>Hypertension (High Blood Pressure):</strong> A condition that puts extra strain on the heart and blood vessels, increasing the risk of heart disease, stroke, and kidney damage.</li>
                     </SpeakParagraph>
                 </ul>
             </SpeakDiv>
         </SpeakPage>
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
