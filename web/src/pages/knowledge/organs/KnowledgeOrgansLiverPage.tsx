import ArticlePreview from "@/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";


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
            <SpeakParagraph>
                <p>The liver is one of the largest and most vital organs in the human body. It plays a central role in
                    various essential functions, including detoxification, metabolism, digestion, and storage of
                    nutrients. Located in the upper right side of the abdomen, beneath the diaphragm, the liver weighs
                    about 1.5 kilograms in adults and is crucial for maintaining overall health.</p>
            </SpeakParagraph>

            <div className="my-4">
                <div className="bg-white rounded-lg p-2 w-fit mx-auto">
                    <img
                        src="/images/knowledge/organs/liver_position.gif"
                        alt="Liver Position"
                    />
                </div>
            </div>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Anatomy of the Liver</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The liver is divided into two main lobes: the right lobe and the smaller left lobe. These lobes
                        are further divided into functional units known as lobules, which contain specialized liver
                        cells (hepatocytes) responsible for performing the liver’s various tasks. The liver also has an
                        intricate network of blood vessels and bile ducts:</p>
                </SpeakParagraph>

                <ul className="ms-4 my-1">
                    <SpeakParagraph>
                        <li><strong>- Hepatic artery:</strong> Supplies oxygenated blood from the heart to the liver.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Portal vein:</strong> Carries nutrient-rich blood from the digestive organs to the
                            liver for processing.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Bile ducts:</strong> Transport bile, a digestive fluid produced by the liver, to
                            the gallbladder and small intestine.
                        </li>
                    </SpeakParagraph>
                </ul>

                <SpeakParagraph>
                    <p>The liver is enclosed by a fibrous capsule and protected by the rib cage. Its location and
                        structure enable it to process blood efficiently while performing numerous vital functions.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Functions of the Liver</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The liver is one of the most versatile organs, performing over 500 critical functions necessary
                        for the body’s survival. Below are some of the most important roles played by the liver:</p>
                </SpeakParagraph>

                <ul className="ms-4 my-1">
                    <SpeakParagraph>
                        <li><strong>- Detoxification:</strong> One of the liver's primary roles is to filter and
                            detoxify
                            harmful substances from the blood. It neutralizes toxins, drugs, alcohol, and byproducts of
                            metabolism, transforming them into less harmful compounds that can be safely eliminated from
                            the body through urine or bile.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Metabolism of Carbohydrates, Fats, and Proteins:</strong> The liver regulates the
                            metabolism of nutrients that are essential for energy production and storage. It converts
                            excess glucose (sugar) into glycogen for storage and breaks it down when the body needs
                            energy. The liver also metabolizes fats by producing bile, which helps break down fats in
                            the digestive system. Furthermore, it converts amino acids from proteins into useful
                            substances while removing harmful byproducts like ammonia.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Production of Bile:</strong> Bile is a yellow-green fluid produced by the liver
                            that
                            plays a key role in digesting fats. Bile is stored in the gallbladder and released into the
                            small intestine to help break down fats into smaller molecules, facilitating their
                            absorption by the digestive system.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Storage of Vitamins and Minerals:</strong> The liver stores essential nutrients
                            such
                            as vitamins A, D, E, K, and B12, as well as minerals like iron and copper. It releases these
                            nutrients into the bloodstream when needed, ensuring the body has an adequate supply for
                            various metabolic processes.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Regulation of Blood Sugar Levels:</strong> The liver helps maintain stable blood
                            sugar levels by storing excess glucose as glycogen. When blood sugar levels drop, the liver
                            converts glycogen back into glucose and releases it into the bloodstream to provide energy.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Production of Blood Proteins:</strong> The liver synthesizes important proteins
                            such
                            as albumin (which maintains blood volume and pressure) and clotting factors (which are
                            essential for blood coagulation and wound healing).
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Immune Function:</strong> The liver contains immune cells called Kupffer cells,
                            which help detect and destroy bacteria, viruses, and other pathogens that enter the body
                            through the digestive system.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Hormone Regulation:</strong> The liver helps regulate hormone levels, particularly
                            those related to thyroid and steroid hormones. It metabolizes and breaks down excess
                            hormones, maintaining a hormonal balance in the body.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>These vital functions illustrate the liver's essential role in maintaining overall health.
                        Without a properly functioning liver, the body cannot effectively filter toxins, store energy,
                        or regulate vital processes.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Common Complications and Disorders of the Liver</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The liver is prone to several diseases and conditions that can impair its function. Many of these
                        conditions are caused by factors such as excessive alcohol consumption, viral infections, and
                        unhealthy diets. Below are some of the most common complications associated with liver
                        dysfunction:</p>
                </SpeakParagraph>

                <ul className="ms-4 my-1">
                    <SpeakParagraph>
                        <li><strong>Hepatitis:</strong> Hepatitis is an inflammation of the liver caused by viral
                            infections (hepatitis A, B, C), autoimmune conditions, or exposure to toxic substances like
                            alcohol and certain medications. Symptoms include jaundice (yellowing of the skin and eyes),
                            fatigue, and abdominal pain.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>Cirrhosis:</strong> Cirrhosis is the result of long-term liver damage, typically
                            from alcohol abuse, chronic hepatitis, or fatty liver disease. The liver tissue becomes
                            scarred and dysfunctional, leading to symptoms like weakness, jaundice, and fluid buildup in
                            the abdomen. Cirrhosis is irreversible, though early treatment can slow its progression.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>Non-Alcoholic Fatty Liver Disease (NAFLD):</strong> NAFLD occurs when fat builds up
                            in the liver in individuals who drink little to no alcohol. It is commonly linked to
                            obesity, diabetes, and high cholesterol. NAFLD can lead to inflammation, liver scarring, and
                            eventually cirrhosis.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>Liver Cancer:</strong> Liver cancer can develop due to chronic liver diseases, such
                            as cirrhosis or hepatitis B and C. Symptoms include unexplained weight loss, abdominal pain,
                            and jaundice. Early detection and treatment are crucial for managing the condition.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>Alcoholic Liver Disease:</strong> Excessive alcohol consumption over time can cause
                            fatty liver, hepatitis, and cirrhosis. Symptoms may include fatigue, nausea, jaundice, and
                            liver enlargement. Reducing alcohol intake is critical to preventing further liver damage.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>Liver Failure:</strong> Liver failure occurs when the liver loses its ability to
                            function properly. It can be acute (sudden onset) or chronic (gradual decline) and may
                            result from various liver conditions. Symptoms include confusion, severe jaundice, and
                            swelling in the abdomen. Liver transplantation is often necessary in advanced cases.
                        </li>
                    </SpeakParagraph>
                </ul>

                <SpeakParagraph>
                    <p>To maintain liver health, it is essential to follow a balanced diet, avoid excessive alcohol
                        intake, maintain a healthy weight, and get vaccinated for hepatitis where necessary. Early
                        diagnosis and treatment are key to managing liver diseases and preventing severe
                        complications.</p>
                </SpeakParagraph>
            </SpeakDiv>
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