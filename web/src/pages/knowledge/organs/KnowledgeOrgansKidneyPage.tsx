import ArticlePreview from "@/components/article/ArticlePreview.tsx";
import { LanguageTranslations } from "@/utils/LanguageTranslations.ts";
import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";


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
             <SpeakParagraph>
                 <p>The kidneys are two bean-shaped <a href="/knowledge/organs">organs</a> located on either side of the
                     spine, just below the rib cage. These organs play a critical role in filtering waste products,
                     balancing fluids, and regulating various essential functions in the body. Each kidney is about the
                     size of a fist, and together, they ensure the body maintains a stable internal environment.</p>
             </SpeakParagraph>

             <div className="my-4">
                 <div className="bg-white rounded-lg p-2 w-fit mx-auto">
                     <img
                         src="/images/knowledge/organs/kidney_anatomy.png"
                         alt="Kidney Anatomy"
                     />
                 </div>
             </div>

             <SpeakDiv>
                 <SpeakDivHeading>
                     <h2>Anatomy of the Kidney</h2>
                 </SpeakDivHeading>
                 <SpeakParagraph>
                     <p>Each kidney consists of several distinct parts that work together to filter blood and produce
                         urine:</p>
                 </SpeakParagraph>

                 <ul className="ms-2 my-1">
                     <SpeakParagraph>
                         <li><strong>- Renal Cortex:</strong> The outer layer of the kidney, which contains the
                             filtering units called nephrons. The renal cortex is where blood filtration begins.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Renal Medulla:</strong> Located beneath the renal cortex, this inner layer
                             contains the renal pyramids, which carry filtered substances from the nephrons to the renal
                             pelvis.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Renal Pelvis:</strong> The funnel-shaped cavity where urine is collected from the
                             nephrons before it flows into the ureter, the tube that transports urine to the bladder.
                         </li>
                     </SpeakParagraph>


                     <div className="my-4">
                         <div className="bg-white rounded-lg p-2 w-fit mx-auto">
                             <img
                                 src="/images/knowledge/organs/kidney_nephron_structure.png"
                                 alt="Kidney Anatomy"
                             />
                         </div>
                     </div>

                     <SpeakParagraph>
                         <li><strong>- Nephrons:</strong> Microscopic filtering units within the kidney that remove
                             waste products from the blood. Each kidney contains about a million nephrons, each composed
                             of a glomerulus and a tubule.
                         </li>
                     </SpeakParagraph>
                 </ul>
                 <SpeakParagraph>
                     <p>Together, these components ensure that the kidney functions properly, filtering the blood and
                         maintaining balance in the body’s fluids and electrolytes.</p>
                 </SpeakParagraph>
             </SpeakDiv>

             <SpeakDiv>
                 <SpeakDivHeading>
                 <h2>Functions of the Kidney</h2>
                 </SpeakDivHeading>
                 <SpeakParagraph>
                     <p>The kidneys are responsible for several vital functions that help maintain the body's overall
                         health:</p>
                 </SpeakParagraph>
                 <ul className="ms-2 my-1">
                     <SpeakParagraph>
                         <li><strong>- Waste Excretion:</strong> The kidneys filter out waste products and excess
                             substances, such as urea, toxins, and creatinine, from the blood. These waste products are
                             then excreted as urine.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Fluid and Electrolyte Balance:</strong> The kidneys regulate the amount of water
                             in the body and maintain a healthy balance of electrolytes, such as sodium, potassium, and
                             calcium. This balance is essential for proper cell function and overall bodily health.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Blood Pressure Regulation:</strong> The kidneys help control blood pressure by
                             adjusting the amount of fluid in the blood and releasing a hormone called renin, which
                             influences blood vessel constriction and fluid retention.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Red Blood Cell Production:</strong> The kidneys release a hormone called
                             erythropoietin, which stimulates the bone marrow to produce red blood cells, ensuring that
                             oxygen is adequately transported throughout the body.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Acid-Base Balance:</strong> The kidneys help maintain a stable pH level in the
                             body by regulating the amount of acid and bicarbonate in the blood, ensuring that the
                             body's environment remains optimal for cell function.
                         </li>
                     </SpeakParagraph>
                 </ul>
                 <SpeakParagraph>
                     <p>Through these critical processes, the kidneys play a crucial role in maintaining the body’s
                         homeostasis, or internal balance.</p>
                 </SpeakParagraph>
             </SpeakDiv>

             <SpeakDiv>
                 <SpeakDivHeading>
                     <h2>Common Complications and Disorders of the Kidney</h2>
                 </SpeakDivHeading>
                 <SpeakParagraph>
                     <p>Several conditions and diseases can affect kidney function, leading to various health
                         issues:</p>
                 </SpeakParagraph>

                 <ul className="ms-2 my-1">
                     <SpeakParagraph>
                         <li><strong>- Chronic Kidney Disease (CKD):</strong> A gradual loss of kidney function over
                             time. CKD can result from diabetes, high blood pressure, or other conditions. As the
                             disease progresses, waste products and fluids can build up in the body, leading to serious
                             health complications.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Kidney Stones:</strong> Hard deposits of minerals and salts that form in the
                             kidneys. Kidney stones can cause severe pain, nausea, and difficulty urinating. They can
                             sometimes block the flow of urine and may require medical intervention to remove.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Acute Kidney Injury (AKI):</strong> A sudden loss of kidney function that can
                             result from severe dehydration, infection, or exposure to toxins. AKI is usually reversible
                             with prompt treatment, but in severe cases, it can lead to permanent kidney damage.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Polycystic Kidney Disease (PKD):</strong> A genetic disorder that causes numerous
                             fluid-filled cysts to grow in the kidneys, impairing their function. PKD can lead to kidney
                             failure if untreated.
                         </li>
                     </SpeakParagraph>
                     <SpeakParagraph>
                         <li><strong>- Urinary Tract Infections (UTIs):</strong> Infections that can affect any part of
                             the urinary system, including the kidneys. If left untreated, UTIs can spread to the
                             kidneys and cause more serious complications, such as kidney infection or damage.
                         </li>
                     </SpeakParagraph>
                 </ul>
                 <SpeakParagraph>
                     <p>Maintaining healthy kidneys is essential for overall health. Early detection of kidney problems
                         and lifestyle choices like staying hydrated, maintaining a balanced diet, and controlling blood
                         pressure can help prevent serious complications.</p>
                 </SpeakParagraph>
             </SpeakDiv>
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