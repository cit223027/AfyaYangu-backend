import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";


export default function KnowledgeDiseasesBreastCancerPage() {

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
                <p>Breast cancer is a type of cancer that begins in the cells of the breast. It is one of the most
                    common cancers worldwide, affecting millions of people, particularly women, although men can also
                    develop it. Early detection and treatment are essential for improving the outcomes of breast
                    cancer.</p>
            </SpeakParagraph>

            <div className="my-4">
                <div className="bg-white rounded-lg p-2 w-fit mx-auto">
                    <img
                        src="/images/knowledge/diseases/breast_cancer.png"
                        alt="Breast Cancer"
                    />
                </div>
            </div>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Signs and Symptoms of Breast Cancer</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Breast cancer may not cause noticeable symptoms in the early stages. However, as the cancer
                        progresses, some common signs and symptoms include:</p>
                </SpeakParagraph>

                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Lump or thickening:</strong> A new lump or mass in the breast or underarm is often
                            the most common sign of breast cancer. It can be painless, hard, or have irregular edges.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Changes in breast size or shape:</strong> A sudden change in the size, shape, or
                            appearance of the breast may indicate a problem.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Skin changes:</strong> The skin of the breast may become red, dimpled (resembling
                            an orange peel), or thickened.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Nipple discharge:</strong> Discharge from the nipple, particularly if it is bloody
                            or occurs without squeezing, can be a sign of breast cancer.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Nipple changes:</strong> Inversion (nipple turning inward), scaling, or changes in
                            the appearance of the nipple.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Pain:</strong> While breast cancer is not usually painful, any new or persistent
                            breast pain should be evaluated by a healthcare provider.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>If you experience any of these symptoms, it is crucial to visit a medical center for a thorough
                        evaluation and diagnosis.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of Breast Cancer</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The exact causes of breast cancer are not fully understood, but a combination of genetic,
                        environmental, and lifestyle factors may contribute to its development. Some known causes and
                        risk factors include:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Genetic mutations:</strong> Certain inherited genetic mutations, such as BRCA1 and
                            BRCA2, increase the risk of developing breast cancer.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Family history:</strong> Having close relatives (mother, sister, or daughter) with
                            breast cancer increases the risk of the disease.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Hormonal factors:</strong> Long-term exposure to estrogen, such as from early
                            menstruation or late menopause, can elevate breast cancer risk.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Age:</strong> The risk of breast cancer increases as a person ages, with most
                            cases diagnosed in women over 50.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Lifestyle factors:</strong> Obesity, alcohol consumption, smoking, and lack of
                            physical activity can contribute to a higher risk of breast cancer.
                        </li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Diagnosis of Breast Cancer</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Diagnosing breast cancer involves a variety of tests, and it is crucial to visit a medical center
                        if any symptoms are present or during routine check-ups. Common diagnostic methods include:</p>
                </SpeakParagraph>

                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Mammogram:</strong> A low-dose X-ray of the breast used to detect abnormalities or
                            lumps. It is one of the most effective early screening tools for breast cancer.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Ultrasound:</strong> An imaging technique that uses sound waves to create images
                            of the breast tissue, often used to examine lumps found during a physical exam or mammogram.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Biopsy:</strong> A biopsy involves removing a small sample of breast tissue to
                            determine if it contains cancerous cells. This is the definitive test for diagnosing breast
                            cancer.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Breast MRI:</strong> An MRI (Magnetic Resonance Imaging) may be recommended in
                            certain cases to provide detailed images of the breast tissue.
                        </li>
                    </SpeakParagraph>
                </ul>

                <SpeakParagraph>
                    <p>If you notice any symptoms, always seek a healthcare provider for evaluation and possible
                        diagnostic tests. Early detection significantly increases the chance of successful
                        treatment.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Treatment of Breast Cancer</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Treatment for breast cancer depends on several factors, including the type and stage of the
                        cancer, as well as the patient’s overall health. Treatment options can include:</p>
                </SpeakParagraph>

                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Surgery:</strong> Surgical options may involve a lumpectomy (removing the tumor)
                            or mastectomy (removing one or both breasts). Lymph nodes may also be removed to check for
                            cancer spread.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Radiation Therapy:</strong> This treatment uses high-energy rays to target and
                            destroy cancer cells in the breast tissue or lymph nodes.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Chemotherapy:</strong> Chemotherapy involves using drugs to kill or slow the
                            growth of cancer cells. It may be administered before surgery (neoadjuvant therapy) or after
                            surgery (adjuvant therapy).
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Hormonal Therapy:</strong> If the breast cancer is hormone receptor-positive,
                            hormonal therapy may be used to block the effects of estrogen or progesterone, which can
                            promote cancer growth.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Targeted Therapy:</strong> Targeted therapies focus on specific characteristics of
                            cancer cells, such as proteins that fuel cancer growth, and aim to block these processes.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Treatment decisions should always be made in consultation with a medical professional. Visiting a
                        medical center is essential to receive personalized treatment and care for breast cancer.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Prevention and Risk Factors</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Although breast cancer cannot always be prevented, there are steps individuals can take to reduce
                        their risk:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Maintain a healthy weight:</strong> Obesity increases the risk of developing
                            breast cancer, especially after menopause.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Exercise regularly:</strong> Physical activity helps to regulate hormones and
                            boost immune function, reducing breast cancer risk.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Limit alcohol consumption:</strong> Drinking alcohol is linked to an increased
                            risk of breast cancer. Limiting alcohol intake can lower this risk.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Avoid smoking:</strong> Smoking is linked to various cancers, including breast
                            cancer.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Regular screenings:</strong> Routine mammograms and self-examinations are key to
                            detecting breast cancer early when it is most treatable. Individuals at higher risk may need
                            additional screening tests.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Genetic testing:</strong> If you have a family history of breast cancer, genetic
                            testing for BRCA mutations may help identify if you are at increased risk and need
                            preventive measures.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>By adopting healthy lifestyle habits and attending regular screenings, you can reduce your risk
                        of developing breast cancer. Always consult a healthcare provider to discuss your risk and
                        appropriate prevention strategies.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}