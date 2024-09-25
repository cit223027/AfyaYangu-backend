import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";
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

                    <Breadcrumb className="mb-2 flex flex-row items-center">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/public">{LanguageTranslations.pageHome.english}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator className="" />

                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/knowledge">{LanguageTranslations.pageKnowledge.english}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator className="" />

                            <BreadcrumbSeparator className="" />

                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/knowledge/organs">{LanguageTranslations.knowledgeOrgans.english}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator className="" />

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <h4 className="andika-bold text-xl pb-1">{LanguageTranslations.knowledgeOrgansBrainTitle.english}</h4>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <SpeakParagraph>
                        <p>The brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger and every process that regulates our body.</p>
                    </SpeakParagraph>
                </SpeakDiv>

                <SpeakDiv>
                    <SpeakDivHeading>
                        <h3>Structure</h3>
                    </SpeakDivHeading>
                    <SpeakParagraph>
                        <p>The brain can be divided into three parts: cerebrum, brainstem and cerebellum.</p>
                    </SpeakParagraph>

                    <img src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/brain/brain-main-parts.png" alt="Structure of brain" />

                    <SpeakDiv>
                        <SpeakDivHeading>
                            <h4>Cerebrum</h4>
                        </SpeakDivHeading>

                        <SpeakParagraph>
                            <p>It is the largest part of the brain and each hemishphere and can be divided into:</p>
                        </SpeakParagraph>

                        <img src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/brain/brain-lobes-anatomy.jpg" alt="" />

                        <SpeakParagraph>
                            <ul>
                                <li><strong>Frontal lobe: </strong><span>The largest lobe of the brain, located in the front of the head, the frontal lobe is involved in personality characteristics, decision-making and movement. Recognition of smell usually involves parts of the frontal lobe. The frontal lobe contains Broca’s area, which is associated with speech ability.</span></li>
                                <li><strong>Parietal lobe: </strong><span>The middle part of the brain, the parietal lobe helps a person identify objects and understand spatial relationships (where one’s body is compared with objects around the person). The parietal lobe is also involved in interpreting pain and touch in the body. The parietal lobe houses Wernicke’s area, which helps the brain understand spoken language.</span></li>
                                <li><strong>Occipital lobe: </strong><span>The occipital lobe is the back part of the brain that is involved with vision.</span></li>
                                <li><strong>Temporal lobe: </strong><span>The sides of the brain, temporal lobes are involved in short-term memory, speech, musical rhythm and some degree of smell recognition.</span></li>
                            </ul>
                        </SpeakParagraph>
                    </SpeakDiv>

                    <SpeakDiv>
                        <SpeakDivHeading>
                            <h4>Brian Stem</h4>
                        </SpeakDivHeading>
                        <SpeakParagraph>
                            <p>The brain stem connects the cerebrum with the spinal cord. It includes the midbrain, the pons and
                                the medulla</p>
                        </SpeakParagraph>


                        <SpeakDiv>
                            <SpeakDivHeading>
                                <h5>Midbrain</h5>
                            </SpeakDivHeading>
                            <SpeakParagraph>
                                <p>The midbrain is a very complex structure with a range of different neuron clusters (nuclei and colliculi), neural pathways and other structures. Its functions include:</p>
                            </SpeakParagraph>

                            <SpeakParagraph>
                                <ul>
                                    <li>Facilitates hearing</li>
                                    <li>Facilitates movement</li>
                                    <li>Calculating responses</li>
                                    <li>Processing environmental changes</li>
                                    <li>Enables movement and coordination</li>
                                </ul>
                            </SpeakParagraph>
                        </SpeakDiv>

                        <SpeakDiv>
                            <SpeakDivHeading>
                                <h5>Pons</h5>
                            </SpeakDivHeading>

                            <SpeakParagraph>
                                <p>The pons is the origin for four of the 12 cranial nerves, which enable a range of activities such as tear production, chewing, blinking, focusing vision, balance, hearing and facial expression.</p>
                            </SpeakParagraph>
                        </SpeakDiv>

                        <div>
                            <SpeakDivHeading>
                                <h5>Medulla</h5>
                            </SpeakDivHeading>

                            <SpeakParagraph>
                                <p>At the bottom of the brainstem, the medulla is where the brain meets the spinal cord. The medulla is essential to survival. Functions of the medulla regulate many bodily activities, including heart rhythm, breathing, blood flow, and oxygen and carbon dioxide levels. The medulla produces reflexive activities such as sneezing, vomiting, coughing and swallowing.</p>
                            </SpeakParagraph>
                        </div>
                    </SpeakDiv>

                    <SpeakDiv>
                        <h4>Cerebellum</h4>
                        <SpeakParagraph>
                            <p>Its function is to coordinate voluntary muscle movements and to maintain posture, balance and equilibrium.</p>
                        </SpeakParagraph>
                    </SpeakDiv>
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
