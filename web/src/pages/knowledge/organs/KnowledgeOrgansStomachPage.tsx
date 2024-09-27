import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";


export default function KnowledgeOrgansStomachPage() {

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
                <p>The stomach is a vital organ in the human digestive system, located in the upper abdomen just below
                    the ribcage. It plays a crucial role in breaking down food and preparing it for absorption in the
                    intestines. Shaped like a J, the stomach is muscular and flexible, allowing it to hold and process
                    food before passing it on to the small intestine for further digestion.</p>
            </SpeakParagraph>

            <div className="my-4">
                <div className="bg-white p-2 w-fit mx-auto">
                    <img
                        src="/images/knowledge/organs/stomach_body_location.svg"
                        alt="Stomach body location"
                        className=""
                    />
                </div>
            </div>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Anatomy of the Stomach</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The stomach is composed of several key parts, each of which contributes to its digestive
                        functions:</p>
                </SpeakParagraph>

                <ul className="ms-2 my-1">
                    <SpeakParagraph>
                        <li><strong>- Cardia:</strong> The entry point of the stomach, where food passes from the
                            esophagus. The lower esophageal sphincter located here prevents the backflow of food and
                            stomach acids into the esophagus.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Fundus:</strong> The rounded upper section of the stomach, which stores gases
                            released during digestion and allows the stomach to expand after eating.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Body (Corpus):</strong> The central and largest part of the stomach, responsible for
                            mixing and breaking down food with stomach acid and digestive enzymes.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Pylorus:</strong> The lower section of the stomach that connects to the small
                            intestine. It regulates the passage of digested food from the stomach to the small intestine
                            through the pyloric sphincter.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>The stomach is also lined with layers of muscles and a protective mucous membrane that aids in
                        food digestion and shields the stomach lining from its own acidic environment.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Functions of the Stomach</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The stomach is essential in breaking down food, starting the digestion of proteins, and
                        regulating the flow of partially digested food into the small intestine. Its primary functions
                        include:</p>
                </SpeakParagraph>

                <ul className="ms-2 my-1">
                    <SpeakParagraph>
                        <li><strong>- Mechanical Digestion:</strong> The muscular walls of the stomach contract to mix and
                            churn food, breaking it down into smaller particles and combining it with digestive juices,
                            forming a semi-liquid mixture called chyme.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Chemical Digestion:</strong> The stomach secretes gastric acid (hydrochloric acid)
                            and digestive enzymes like pepsin, which begin the breakdown of proteins into smaller
                            peptides, preparing them for absorption in the intestines.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Storage:</strong> The stomach acts as a temporary reservoir for food, storing it and
                            slowly releasing it into the small intestine in controlled amounts to allow for proper
                            digestion and nutrient absorption.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Absorption:</strong> While most nutrient absorption occurs in the intestines, the
                            stomach absorbs certain substances, such as alcohol, water, and some medications, directly
                            into the bloodstream.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Defense:</strong> The acidic environment of the stomach helps kill harmful bacteria
                            and pathogens that may be present in food, preventing infection and illness.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Through these functions, the stomach plays a critical role in the early stages of digestion,
                        ensuring that food is properly processed and delivered to the intestines for further nutrient
                        absorption.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h2>Common Complications and Disorders of the Stomach</h2>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>The stomach is susceptible to various conditions and disorders that can affect its ability to
                        function properly. Some common complications include:</p>
                </SpeakParagraph>

                <ul className="ms-2 my-1">
                    <SpeakParagraph>
                        <li><strong>- Gastritis:</strong> Inflammation of the stomach lining, often caused by infection
                            (such as H. pylori), excessive alcohol consumption, or prolonged use of nonsteroidal
                            anti-inflammatory drugs (NSAIDs). Symptoms may include abdominal pain, nausea, and vomiting.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Gastroesophageal Reflux Disease (GERD):</strong> A chronic condition where stomach
                            acid flows back into the esophagus, causing symptoms like heartburn, chest pain, and
                            difficulty swallowing. GERD is often caused by a weak lower esophageal sphincter.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Peptic Ulcers:</strong> Open sores that develop on the inner lining of the stomach
                            or the upper part of the small intestine, often due to excessive stomach acid or infection
                            with H. pylori bacteria. Ulcers can cause burning stomach pain, bloating, and nausea.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Stomach Cancer:</strong> A malignant growth that can occur in the stomach lining.
                            Early-stage stomach cancer may not show symptoms, but as it progresses, symptoms can include
                            stomach pain, weight loss, and vomiting. Risk factors include smoking, diet, and a family
                            history of cancer.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Hiatal Hernia:</strong> A condition in which part of the stomach pushes up into the
                            chest through the diaphragm, causing symptoms like heartburn and acid reflux. It may be
                            caused by weakness in the diaphragm or increased pressure in the abdomen.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Maintaining stomach health through proper diet, managing stress, and avoiding excessive alcohol
                        and NSAID use can help reduce the risk of these complications. If stomach problems persist, it's
                        essential to seek medical advice for diagnosis and treatment.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}