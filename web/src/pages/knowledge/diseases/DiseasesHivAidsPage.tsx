import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";

export default function KnowledgeDiseasesHivAidsPage() {

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
                <p>
                    HIV (Human Immunodeficiency Virus) is a virus that attacks the body’s immune system, specifically the CD4 cells (T cells), which help the body fight infections. If left untreated, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome), the final stage of HIV infection, where the immune system is severely compromised. However, with early diagnosis and proper treatment, individuals with HIV can live long and healthy lives, preventing the progression to AIDS.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Signs and Symptoms of HIV/AIDS</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        The symptoms of HIV can vary, and some people may not show any signs for years. Early HIV infection (acute phase) can present with the following symptoms, which are often mistaken for the flu:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Fever:</strong> A common early symptom, often accompanied by other flu-like symptoms.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Chills and night sweats:</strong> Many people experience excessive sweating at night during the early stages.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Fatigue:</strong> HIV can cause a general sense of fatigue and lethargy.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Swollen lymph nodes:</strong> Swelling in the lymph nodes, particularly in the neck, armpits, and groin.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Sore throat and mouth ulcers:</strong> Painful sores can develop in the mouth and throat.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Rash:</strong> A rash may occur on the skin, typically appearing as red, flat areas that do not itch.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        As HIV progresses, it weakens the immune system, making the person more susceptible to opportunistic infections, which can lead to AIDS. Symptoms of AIDS include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• Rapid weight loss (wasting syndrome)</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• Persistent and unexplained fever or diarrhea</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• Prolonged swelling of the lymph glands</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• Pneumonia and other severe infections</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• Neurological disorders such as memory loss, depression, or confusion</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of HIV</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        HIV is primarily transmitted through the exchange of certain bodily fluids from an infected person. The most common transmission routes include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Unprotected sexual contact:</strong> HIV can be transmitted during vaginal, anal, or oral sex without the use of condoms.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Blood transmission:</strong> Sharing needles or syringes, blood transfusions with contaminated blood, or accidental exposure in healthcare settings.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Mother-to-child transmission:</strong> HIV can be passed from mother to child during pregnancy, childbirth, or breastfeeding.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Contaminated needle use:</strong> Using unsterilized needles for drug use, tattoos, or body piercings increases the risk of transmission.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Diagnosis of HIV</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Early detection of HIV is critical for managing the condition and preventing progression to AIDS. HIV is diagnosed through specific tests, and if you suspect any symptoms or have been exposed to risk factors, you should visit a medical center for proper testing. Common HIV diagnostic methods include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>HIV antibody tests:</strong> These tests check for antibodies in the blood or saliva that your body produces in response to the virus.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Combination or 4th-generation tests:</strong> These tests detect both HIV antibodies and antigens, allowing for earlier detection after exposure.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Nucleic acid tests (NATs):</strong> These tests look for the actual virus in the blood and can detect HIV sooner than antibody tests, though they are more expensive and usually not the first option.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        Visit a healthcare provider for accurate testing and diagnosis. Early detection can significantly improve quality of life and reduce the risk of transmitting the virus to others.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Treatment of HIV/AIDS</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        While there is no cure for HIV, treatment can effectively manage the virus and prevent progression to AIDS. The standard treatment for HIV is called antiretroviral therapy (ART). ART reduces the viral load (amount of virus in the blood) to undetectable levels, which helps prevent damage to the immune system. Treatment options include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Antiretroviral therapy (ART):</strong> A combination of daily medications that help control the virus, improve immune function, and prevent transmission to others.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Regular blood tests:</strong> Frequent monitoring of viral load and CD4 cell count to ensure that the treatment is working effectively.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Preventive measures:</strong> Preventing opportunistic infections through vaccines, regular screenings, and maintaining a healthy lifestyle.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        It is important to follow the prescribed treatment plan and attend regular checkups with a healthcare provider to manage HIV effectively. Timely intervention can prevent complications and extend life expectancy.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Prevention and Risk Factors</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Reducing the risk of HIV transmission involves taking preventative measures and understanding key risk factors. Steps to lower the risk of HIV infection include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Practicing safe sex:</strong> Using condoms during sexual activity reduces the risk of HIV transmission. Limiting the number of sexual partners and getting regularly tested for HIV also help.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Pre-exposure prophylaxis (PrEP):</strong> PrEP is a daily medication that people at high risk of HIV can take to prevent infection.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Post-exposure prophylaxis (PEP):</strong> PEP is an emergency treatment for people who have been exposed to HIV, ideally started within 72 hours of exposure.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Avoiding needle sharing:</strong> Do not share needles for drug use, tattoos, or piercings.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        By practicing safe behaviors and getting tested regularly, the risk of HIV infection can be significantly reduced.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}