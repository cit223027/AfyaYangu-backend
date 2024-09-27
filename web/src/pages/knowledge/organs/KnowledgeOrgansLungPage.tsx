
import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";

export default function KnowledgeOrgansLungPage() {

    return (
        <ArticleComponent
            englishComponent={<EnglishArticle />}
            swahiliComponent={<SwahiliArticle />}
        />
    )
}

function EnglishArticle() {
    return (
        <SpeakPage>
            <SpeakDiv>
                <SpeakParagraph>
                    <p>The lungs are the primary organs in your respiratory system, a network of tissues and organs that allow one to breathe. A human being has two lungs, one on each side of the chest.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <div className="my-4">
                <div className="bg-white p-2 w-fit mx-auto">
                    <img
                        src="/images/knowledge/organs/lung_structure.svg"
                        alt="Structure of the lungs"
                        className=""
                    />
                </div>
            </div>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Functions of the lung</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <p>The primary function of the lungs is to facilitate gas exchange. Oxygen enters the bloodstream while carbon dioxide is exhaled from the body.</p>
                </SpeakParagraph>

                <SpeakDiv>
                    <SpeakDivHeading>
                        <h4>The process of breathing</h4>
                    </SpeakDivHeading>

                    <SpeakParagraph>
                        <p>When you inhale through your nose or mouth, air travels down to your trachea (windpipe) and into two passages called bronchial tubes. Each bronchial tube leads to a lung. The bronchial tubes lead to smaller air passages called bronchi and eventually to bronchioles. The bronchioles end in tiny air sacs called alveoli, where the gaseous exchange occurs.</p>
                    </SpeakParagraph>
                </SpeakDiv>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Common Complications and disorders</h3>
                </SpeakDivHeading>

                <ol className="ps-3">
                    <SpeakParagraph>
                        <li><strong>- Asthma: </strong>Airway tightening that makes breathing difficult</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Lung Cancer: </strong>A type of cancer that affects the lung. Cigarette smoking is a major risk factor</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Pneumonia: </strong>A lung infection that causes fluids in lungs</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Tuberculosis: </strong>A common and infectious bacterial disease that causes infection in one's lungs</li>
                    </SpeakParagraph>
                </ol>
            </SpeakDiv>
        </SpeakPage>
    )
}

function SwahiliArticle() {
    return (
        <SpeakPage>
            <SpeakDiv>
                <SpeakParagraph>
                    <p>Pafu ni kiungo kikuu katika mfumo wako wa upumuaji, mtandao wa tishu na viungo vinavyokuwezesha kupumua. Mwanadamu ana mapafu mawili, moja kila upande wa kifua.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <div className="my-4">
                <div className="bg-white p-2 w-fit mx-auto">
                    <img
                        src="/images/knowledge/organs/lung_structure.svg"
                        alt="Muundo wa mapafu"
                        className=""
                    />
                </div>
            </div>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kazi za pafu</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <p>Kazi kuu ya mapafu ni kuwezesha ubadilishanaji wa gesi. Oksijeni huingia kwenye damu huku dioksidi ya kaboni ikitolewa nje ya mwili.</p>
                </SpeakParagraph>

                <SpeakDiv>
                    <SpeakDivHeading>
                        <h4>Mchakato wa kupumua</h4>
                    </SpeakDivHeading>

                    <SpeakParagraph>
                        <p>Unapovuta pumzi kupitia pua au mdomo wako, hewa husafiri chini hadi kwenye koromeo (trachea) yako na kuingia kwenye njia mbili zinazoitwa mirija ya bronchia. Kila mrija wa bronchia unaelekea kwenye pafu moja. Mirija ya bronchia husababisha njia ndogo za hewa zinazoitwa bronchi na hatimaye bronchioles. Bronchioles huishia kwenye vifuko vidogo vya hewa vinavyoitwa alveoli, ambapo ubadilishanaji wa gesi hutokea.</p>
                    </SpeakParagraph>
                </SpeakDiv>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Magonjwa na matatizo ya kawaida</h3>
                </SpeakDivHeading>

                <ol className="ps-3">
                    <SpeakParagraph>
                        <li><strong>- Pumu: </strong>Kufinywa kwa njia ya hewa kunakofanya kupumua kuwa kugumu</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Saratani ya mapafu: </strong>Aina ya saratani inayoshambulia pafu. Kuvuta sigara ni sababu kuu ya hatari</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Nimonia: </strong>Magonjwa ya mapafu yanayosababisha maji ndani ya mapafu</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Kifua kikuu: </strong>Ugonjwa wa bakteria wa kawaida na unaoambukiza unaosababisha maambukizi kwenye mapafu ya mtu</li>
                    </SpeakParagraph>
                </ol>
            </SpeakDiv>
        </SpeakPage>
    )
}