import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";

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
            <SpeakParagraph>
                <p>Cholera is an infectious disease caused by the bacterium <em>Vibrio cholerae</em>, which primarily spreads through contaminated water and food. It leads to severe diarrhea and dehydration, which, if untreated, can be life-threatening. Cholera is most prevalent in regions with poor sanitation and limited access to clean water.</p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Signs and Symptoms of Cholera</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The symptoms of cholera can range from mild to severe, and in some cases, they may be life-threatening if not treated promptly. Common signs and symptoms include:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Severe, watery diarrhea:</strong> Often described as “rice water” stools due to their pale appearance, diarrhea is the hallmark symptom of cholera. It can lead to rapid dehydration.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Vomiting:</strong> Vomiting often accompanies diarrhea, which contributes further to dehydration.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Dehydration:</strong> Symptoms of dehydration include dry mouth, extreme thirst, muscle cramps, reduced urination, and in severe cases, sunken eyes and low blood pressure.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Rapid heart rate:</strong> Severe dehydration can cause an increased heart rate as the body struggles to maintain blood circulation.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Shock:</strong> If fluid loss is severe and untreated, cholera can lead to shock, which is life-threatening and requires immediate medical intervention.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Cholera symptoms can progress quickly, so it is essential to seek medical attention at the earliest signs of severe diarrhea or dehydration. Immediate treatment with rehydration is critical.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of Cholera</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Cholera is caused by the bacterium <em>Vibrio cholerae</em>, which is typically transmitted through contaminated water or food. Key factors that contribute to the spread of cholera include:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Contaminated water:</strong> Drinking or using water that contains <em>Vibrio cholerae</em> is the primary route of infection. Contaminated water sources are common in areas with poor sanitation and inadequate sewage treatment.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Contaminated food:</strong> Eating food prepared with contaminated water or food that has been in contact with an infected person’s feces can also lead to cholera infection.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Unhygienic conditions:</strong> Poor hygiene practices, lack of clean water, and inadequate sanitation facilities contribute to the spread of cholera in densely populated areas, refugee camps, or disaster-stricken regions.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Person-to-person transmission:</strong> While less common, direct contact with the feces of an infected person can also spread the disease, particularly in areas with poor hygiene.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Diagnosis of Cholera</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>If cholera is suspected based on symptoms like severe diarrhea and dehydration, a medical professional should be consulted immediately. Diagnosis typically involves:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Stool sample:</strong> A stool sample is taken to detect the presence of <em>Vibrio cholerae</em> bacteria. Rapid diagnostic tests (RDTs) can sometimes be used for faster results.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Assessment of dehydration:</strong> Doctors will assess the severity of dehydration by checking for symptoms like sunken eyes, dry mouth, and low blood pressure.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Accurate diagnosis is critical to ensure prompt treatment and prevent the spread of the disease. If you or someone you know experiences symptoms of cholera, visit a medical center immediately.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Treatment of Cholera</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The treatment for cholera focuses primarily on rapid rehydration, as the disease causes extreme fluid loss. Medical treatment typically involves:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Oral Rehydration Salts (ORS):</strong> The first line of treatment for mild to moderate cases is oral rehydration salts, a simple solution that replenishes lost fluids and electrolytes.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Intravenous fluids:</strong> In severe cases of dehydration, intravenous fluids may be necessary to restore lost fluids quickly.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Antibiotics:</strong> Antibiotics can shorten the duration of diarrhea and reduce the severity of the illness, though they are typically reserved for severe cases.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Zinc supplements:</strong> Zinc has been shown to reduce the duration of diarrhea in children with cholera and is often recommended in pediatric cases.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>It is crucial to seek treatment from a medical center as soon as cholera symptoms arise. Delaying treatment increases the risk of severe dehydration, which can be life-threatening. In areas where cholera is endemic, emergency rehydration treatments are usually available at local health clinics.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Prevention and Risk Factors</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Preventing cholera largely depends on improving access to clean water and practicing good hygiene. Here are key steps to reduce the risk of cholera infection:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Access to clean water:</strong> Ensure that the water you drink and use for cooking is clean. Boiling water or using water purification tablets can help eliminate cholera bacteria in contaminated water.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Good hygiene practices:</strong> Wash hands with soap and clean water, especially after using the bathroom and before handling food.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Proper sanitation:</strong> Use proper toilet facilities, and dispose of feces in a sanitary manner to prevent contamination of water sources.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Cook food thoroughly:</strong> Ensure food is cooked properly and avoid eating raw or undercooked seafood, especially from contaminated waters.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Cholera vaccination:</strong> In some areas, oral cholera vaccines are available for individuals living in or traveling to regions where cholera is common.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>By following these preventive measures and seeking immediate medical attention in case of symptoms, the spread and severity of cholera can be significantly reduced.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}