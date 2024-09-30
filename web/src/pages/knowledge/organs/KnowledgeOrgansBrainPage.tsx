import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";
import ArticlePreview from "@/components/article/ArticlePreview.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";

export default function KnowledgeOrgansBrainPage() {

    return (
        <ArticleComponent
            englishComponent={EnglishArticle()}
        />
    )
}

function EnglishArticle() {

    return (
        <SpeakPage>
            <div className="w-full h-px">
                <SpeakDiv>
                    <SpeakParagraph>
                        <p>The brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger, and every process that regulates our body.</p>
                    </SpeakParagraph>
                </SpeakDiv>

                {/* Structure/Anatomy Section */}
                <SpeakDiv>
                    <SpeakDivHeading>
                        <h3>Structure/Anatomy</h3>
                    </SpeakDivHeading>
                    <SpeakParagraph>
                        <p>The brain can be divided into three parts: cerebrum, brainstem, and cerebellum.</p>
                    </SpeakParagraph>

                    <img src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/brain/brain-main-parts.png" alt="Structure of brain" />

                    <SpeakDiv>
                        <SpeakDivHeading>
                            <h4>Cerebrum</h4>
                        </SpeakDivHeading>

                        <SpeakParagraph>
                            <p>The largest part of the brain, the cerebrum, can be divided into different lobes, each with its own functions:</p>
                        </SpeakParagraph>

                        <img src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/brain/brain-lobes-anatomy.jpg" alt="Cerebrum Lobes" />

                        <SpeakParagraph>
                            <ul>
                                <li>• <strong>Frontal lobe:</strong> The largest lobe, responsible for personality, decision-making, and movement. Also contains Broca's area for speech.</li>
                                <li>• <strong>Parietal lobe:</strong> Helps in identifying objects and understanding spatial relationships. It also processes touch and pain and includes Wernicke's area for language comprehension.</li>
                                <li>• <strong>Occipital lobe:</strong> Located at the back, it primarily handles vision.</li>
                                <li>• <strong>Temporal lobe:</strong> Involved in memory, speech, and smell recognition.</li>
                            </ul>
                        </SpeakParagraph>
                    </SpeakDiv>

                    <SpeakDiv>
                        <SpeakDivHeading>
                            <h4>Brainstem</h4>
                        </SpeakDivHeading>
                        <SpeakParagraph>
                            <p>The brainstem connects the cerebrum with the spinal cord. It consists of the midbrain, pons, and medulla, each performing specific functions:</p>
                        </SpeakParagraph>

                        <SpeakDiv>
                            <SpeakDivHeading>
                                <h5>Midbrain</h5>
                            </SpeakDivHeading>
                            <SpeakParagraph>
                                <ul>
                                    <li>• Facilitates hearing</li>
                                    <li>• Facilitates movement</li>
                                    <li>• Calculates responses and processes environmental changes</li>
                                    <li>• Coordinates movement</li>
                                </ul>
                            </SpeakParagraph>
                        </SpeakDiv>

                        <SpeakDiv>
                            <SpeakDivHeading>
                                <h5>Pons</h5>
                            </SpeakDivHeading>
                            <SpeakParagraph>
                                <p>The pons is responsible for a variety of activities including tear production, chewing, blinking, focusing vision, balance, hearing, and facial expression. It is the origin of four cranial nerves.</p>
                            </SpeakParagraph>
                        </SpeakDiv>

                        <div>
                            <SpeakDivHeading>
                                <h5>Medulla</h5>
                            </SpeakDivHeading>
                            <SpeakParagraph>
                                <p>The medulla, located at the base of the brainstem, regulates essential survival functions like heart rhythm, breathing, and blood flow. It also controls reflex actions such as sneezing, vomiting, and coughing.</p>
                            </SpeakParagraph>
                        </div>
                    </SpeakDiv>

                    <SpeakDiv>
                        <SpeakDivHeading>
                            <h4>Cerebellum</h4>
                        </SpeakDivHeading>
                        <SpeakParagraph>
                            <p>The cerebellum coordinates voluntary muscle movements and helps maintain posture, balance, and equilibrium.</p>
                        </SpeakParagraph>
                    </SpeakDiv>
                </SpeakDiv>

                {/* Functions Section */}
                <SpeakDiv>
                    <SpeakDivHeading>
                        <h3>Functions</h3>
                    </SpeakDivHeading>
                    <SpeakParagraph>
                        <p>The brain's primary functions include controlling thought, memory, emotion, motor skills, vision, breathing, and many more bodily processes. Each region of the brain contributes to specific functions:</p>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <ul>
                            <li>• <strong>Cerebrum:</strong> Handles complex processes like decision-making, emotions, and memory.</li>
                            <li>• <strong>Brainstem:</strong> Manages basic life functions like breathing, heart rate, and reflexes.</li>
                            <li>• <strong>Cerebellum:</strong> Coordinates movement and helps maintain balance.</li>
                        </ul>
                    </SpeakParagraph>
                </SpeakDiv>

                {/* Common Complications Section */}
                <SpeakDiv>
                    <SpeakDivHeading>
                        <h3>Common Complications</h3>
                    </SpeakDivHeading>
                    <SpeakParagraph>
                        <p>There are several potential complications and issues related to brain health, including:</p>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <ul>
                            <li>• <strong>Traumatic Brain Injury (TBI):</strong> Resulting from impacts to the head, TBIs can affect cognitive and motor functions.</li>
                            <li>• <strong>Stroke:</strong> A lack of blood flow to the brain can cause damage to brain tissue, leading to paralysis, speech problems, or cognitive impairments.</li>
                            <li>• <strong>Dementia and Alzheimer’s Disease:</strong> Neurodegenerative disorders that affect memory, thinking, and behavior.</li>
                            <li>• <strong>Brain Tumors:</strong> Abnormal cell growth in the brain can affect various functions depending on the tumor's location.</li>
                            <li>• <strong>Epilepsy:</strong> A neurological disorder characterized by recurrent seizures caused by abnormal brain activity.</li>
                        </ul>
                    </SpeakParagraph>
                </SpeakDiv>
            </div>
        </SpeakPage>
    )
}


type KnowledgeOrgansBrainPreviewProps = {
    link: string
    isWide?: boolean
}

export function KnowledgeOrgansBrainPreview({link, isWide}: KnowledgeOrgansBrainPreviewProps) {
    return (
        <ArticlePreview
            link={link}
            description={LanguageTranslations.knowledgeOrgansBrainDescription}
            title={LanguageTranslations.knowledgeOrgansBrainTitle}
            isWide={isWide}
        />
    )
}
