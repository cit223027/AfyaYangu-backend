import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";


export default function KnowledgeOrgansSkinPage() {

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
            <SpeakParagraph>
                <p>The Skin is the largest organ of the human body. It protects internal organs from germs, regulates
                    body temperature and enables touch sensation.</p>
            </SpeakParagraph>

            <div className="my-4">
                <div className="bg-white p-2 w-fit mx-auto">
                    <img
                        src="/images/knowledge/organs/skin_layers.svg"
                        alt="Muundo wa mapafu"
                        className=""
                    />
                </div>
            </div>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Functions of the Skin</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <p><strong>Protection:</strong> The skin acts as a barrier that protects internal tissues and organs
                        from bacteria, viruses, and environmental damage.</p>
                </SpeakParagraph>
                <SpeakParagraph>
                    <p><strong>Temperature Regulation:</strong> Through sweating and adjusting blood flow, the skin
                        helps regulate body temperature, keeping it within a healthy range.</p>
                </SpeakParagraph>
                <SpeakParagraph>
                    <p><strong>Sensation:</strong> Nerve endings in the skin allow the body to feel sensations like
                        touch, pressure, heat, and cold, which is vital for interaction with the environment.</p>
                </SpeakParagraph>
                <SpeakParagraph>
                    <p><strong>Vitamin D Synthesis:</strong> When exposed to sunlight, the skin helps produce vitamin D,
                        which is crucial for bone health and other bodily functions.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Anatomy of the Skin</h3>
                </SpeakDivHeading>

                <ul>
                    <SpeakParagraph>
                        <li><strong>- Epidermis:</strong> The outermost layer of the skin, providing a waterproof
                            barrier and creating skin tone. This is where new skin cells are generated and where
                            melanin, the pigment responsible for skin color, is found.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Dermis:</strong> Located beneath the epidermis, the dermis contains tough
                            connective tissue, hair follicles, and sweat glands. It supports the skin structure and
                            supplies nutrients to the epidermis.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Hypodermis (Subcutaneous Tissue):</strong> The deepest layer of skin made up of
                            fat and connective tissues. It helps insulate the body and absorbs shock, protecting
                            underlying muscles and bones.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Together, these layers ensure the skin performs its multiple roles effectively, protecting the
                        body and contributing to overall health and well-being.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Common conditions affecting the skin</h3>
                </SpeakDivHeading>

                <ul>
                    <SpeakParagraph>
                        <li><strong>- Allergies: </strong>Some allergies include poison ivy rashes.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Vitiligo: </strong>A skin condition that causes the skin to lose its color or
                            pigment.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Eczema: </strong>A skin condition that causes dry and itchy patches of skin.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Skin Cancer</strong></li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>
        </SpeakPage>
    )
}

function SwahiliArticle() {
    return (
        <SpeakPage>
            <SpeakParagraph>
                <p>Ngozi ni kiungo kikubwa zaidi cha mwili wa binadamu. Inalinda viungo vya ndani kutokana na vijidudu,
                    inadhibiti joto la mwili, na inawezesha hisia ya mguso.</p>
            </SpeakParagraph>

            <div className="my-4">
                <div className="bg-white p-2 w-fit mx-auto">
                    <img
                        src="/images/knowledge/organs/skin_layers.svg"
                        alt="Muundo wa mapafu"
                        className=""
                    />
                </div>
            </div>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kazi za Ngozi</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <p><strong>Ulinzi:</strong> Ngozi hufanya kazi kama kizuizi kinacholinda tishu na viungo vya ndani
                        dhidi ya bakteria, virusi, na uharibifu wa mazingira.</p>
                </SpeakParagraph>
                <SpeakParagraph>
                    <p><strong>Udhibiti wa Joto:</strong> Kupitia utoaji wa jasho na kudhibiti mtiririko wa damu, ngozi
                        husaidia kudhibiti joto la mwili, kuhakikisha linabaki ndani ya kiwango cha afya.</p>
                </SpeakParagraph>
                <SpeakParagraph>
                    <p><strong>Hisia:</strong> Ncha za neva kwenye ngozi huruhusu mwili kuhisi hisia kama mguso,
                        shinikizo, joto, na baridi, ambavyo ni muhimu kwa kuingiliana na mazingira.</p>
                </SpeakParagraph>
                <SpeakParagraph>
                    <p><strong>Utengenezaji wa Vitamini D:</strong> Ngozi inapopata mwanga wa jua, husaidia kutengeneza
                        vitamini D, ambayo ni muhimu kwa afya ya mifupa na kazi zingine za mwili.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Anatomia ya Ngozi</h3>
                </SpeakDivHeading>

                <ul>
                    <SpeakParagraph>
                        <li><strong>- Epidermis:</strong> Safu ya nje kabisa ya ngozi, inayotoa kizuizi kisichopenya
                            maji na kuunda rangi ya ngozi. Hapa ndipo seli mpya za ngozi zinazalishwa na mahali ambapo
                            melanini, rangi inayohusika na rangi ya ngozi, inapatikana.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Dermis:</strong> Iko chini ya epidermis, dermis ina tishu ngumu za kuunganisha,
                            vijinywele, na tezi za jasho. Inasaidia muundo wa ngozi na kusambaza virutubisho kwa
                            epidermis.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Hypodermis (Tishu za Subcutaneous):</strong> Safu ya ndani kabisa ya ngozi
                            inayoundwa na mafuta na tishu za kuunganisha. Inasaidia kuhifadhi joto mwilini na kunyonya
                            mshtuko, ikilinda misuli na mifupa iliyo chini yake.
                        </li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Kwa pamoja, safu hizi huhakikisha ngozi inafanya kazi zake nyingi kwa ufanisi, kulinda mwili na
                        kuchangia afya kwa ujumla.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Magonjwa ya Kawaida Yanayoathiri Ngozi</h3>
                </SpeakDivHeading>

                <ul>
                    <SpeakParagraph>
                        <li><strong>- Mzio: </strong>Baadhi ya mizio ni pamoja na upele wa sumu ya ivy.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Vitiligo: </strong>Hali ya ngozi inayosababisha ngozi kupoteza rangi au
                            mchanganyiko wa rangi.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Eczema: </strong>Hali ya ngozi inayosababisha maeneo ya ngozi kuwa makavu na yenye
                            kuwasha.
                        </li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Saratani ya Ngozi</strong></li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>
        </SpeakPage>
    )
}