import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";

export default function KnowledgeDiseasesDiabetesPage() {

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
                <p>Diabetes is a chronic medical condition that occurs when the body cannot properly regulate blood sugar levels. It is characterized by high blood sugar (hyperglycemia) and can lead to severe health complications if left untreated. Diabetes occurs in two main forms: Type 1 and Type 2, with other types like gestational diabetes also recognized.</p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Signs and Symptoms of Diabetes</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The symptoms of diabetes may vary depending on the type and severity of the condition, but common signs include:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Frequent urination:</strong> High blood sugar levels cause the kidneys to filter excess glucose, leading to frequent urination.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Increased thirst:</strong> As the body loses fluids through frequent urination, individuals with diabetes often experience excessive thirst (polydipsia).</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Unexplained weight loss:</strong> Despite eating more, people with Type 1 diabetes, in particular, may experience weight loss as the body cannot utilize glucose for energy.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Fatigue:</strong> High or fluctuating blood sugar levels can cause feelings of fatigue and sluggishness.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Blurred vision:</strong> Elevated blood sugar levels can affect the eyes, leading to periods of blurred vision.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Slow healing of wounds:</strong> Diabetes can impair blood circulation and immune response, resulting in slower wound healing.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of Diabetes</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Diabetes is caused by an inability of the body to produce or properly use insulin, a hormone responsible for regulating blood sugar. Key causes differ by type:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Type 1 diabetes:</strong> This form is an autoimmune condition where the immune system attacks insulin-producing cells in the pancreas. The exact cause is unknown but may involve genetic and environmental factors.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Type 2 diabetes:</strong> This type is typically linked to insulin resistance, where the body’s cells cannot effectively use insulin. It is often associated with obesity, lack of physical activity, and poor diet.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Gestational diabetes:</strong> This form occurs during pregnancy when hormonal changes impair the body’s ability to use insulin efficiently. It usually resolves after childbirth, but it increases the risk of developing Type 2 diabetes later in life.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Diagnosis of Diabetes</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Early diagnosis of diabetes is crucial to managing the disease and preventing complications. If you experience any of the symptoms, it is important to consult a healthcare professional for proper testing. Common diagnostic methods include:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Fasting blood sugar test:</strong> This test measures your blood sugar levels after fasting overnight. A blood sugar level of 126 mg/dL or higher on two separate tests indicates diabetes.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Oral glucose tolerance test (OGTT):</strong> This test evaluates how your body processes glucose by measuring blood sugar levels before and after consuming a sugary drink.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Hemoglobin A1c test:</strong> This test provides an average of your blood sugar levels over the past two to three months. An A1c level of 6.5% or higher indicates diabetes.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>If you suspect diabetes, visit a medical center immediately for proper testing and diagnosis. Timely detection can prevent or delay complications such as nerve damage, heart disease, and kidney failure.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Treatment of Diabetes</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Diabetes management involves controlling blood sugar levels to reduce the risk of complications. Treatment plans vary based on the type of diabetes, but commonly involve the following:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Insulin therapy:</strong> For people with Type 1 diabetes, daily insulin injections or an insulin pump are required to maintain blood sugar control.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Oral medications:</strong> People with Type 2 diabetes may be prescribed medications that help the body use insulin more effectively or produce more insulin.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Diet and exercise:</strong> A healthy, balanced diet combined with regular physical activity is essential for managing diabetes, especially for those with Type 2 diabetes. Monitoring carbohydrate intake helps control blood sugar.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Blood sugar monitoring:</strong> Regular monitoring of blood sugar levels is crucial for all individuals with diabetes to ensure that treatment is effective.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Always consult a healthcare provider for a personalized treatment plan and to adjust medications or insulin based on individual needs. Never self-diagnose or self-treat diabetes without medical guidance.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Prevention and Risk Factors</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>While Type 1 diabetes cannot be prevented, there are steps to lower the risk of developing Type 2 diabetes. Key factors include:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Maintaining a healthy weight:</strong> Obesity is a significant risk factor for Type 2 diabetes. Losing excess weight through a balanced diet and exercise can greatly reduce the risk.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Regular physical activity:</strong> Engaging in at least 30 minutes of moderate exercise most days of the week can improve insulin sensitivity and help manage weight.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Eating a healthy diet:</strong> A diet rich in whole grains, fruits, vegetables, and lean proteins while low in processed sugars and fats can help manage blood sugar and prevent diabetes.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Avoiding smoking and excessive alcohol consumption:</strong> Smoking and heavy drinking increase the risk of diabetes and its complications.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>By making healthy lifestyle choices and addressing risk factors early, you can significantly reduce your risk of developing Type 2 diabetes.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}