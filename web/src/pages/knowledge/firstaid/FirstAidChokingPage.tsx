import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";

export default function FirstAidChokingPage() {

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
                <p>Choking occurs when an object, usually food, blocks the airway and prevents a person from breathing properly. Immediate first aid is crucial in these situations to prevent severe injury or even death.</p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Requirements</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Awareness of the signs of choking (inability to speak, difficulty breathing, silent coughing, bluish skin).</li>
                        <li>- Knowledge of basic first aid techniques (e.g., back blows and abdominal thrusts).</li>
                        <li>- Access to a phone to call emergency services if needed.</li>
                        <li>- A calm and reassuring demeanor to help the choking person stay as relaxed as possible.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Actions</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Step 1: Assess the Situation</h4>
                    <p>- Encourage the person to cough if they are able to. This is the body's natural response to clear the airway.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 2: Perform Back Blows</h4>
                    <p>- Stand behind the person, support their chest with one hand, and bend them forward at the waist. Use the heel of your other hand to deliver five firm back blows between their shoulder blades.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 3: Perform Abdominal Thrusts (Heimlich Maneuver)</h4>
                    <p>- Stand behind the person and wrap your arms around their waist. Make a fist with one hand and place it just above their navel. Grasp your fist with your other hand and perform quick, inward and upward thrusts until the object is expelled or the person starts breathing normally.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 4: Call Emergency Services</h4>
                    <p>- If the person is still choking or becomes unconscious, immediately call emergency services and continue providing first aid until help arrives.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Post-First Aid Care</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Step 1: Monitor the Person</h4>
                    <p>- After successful removal of the object, keep an eye on the person to ensure they are breathing normally and recovering well.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 2: Seek Medical Attention</h4>
                    <p>- Encourage the person to get checked by a healthcare professional, especially if abdominal thrusts were performed, as there could be internal injuries.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 3: Provide Reassurance</h4>
                    <p>- Help the person stay calm and offer them water or rest as they recover from the incident.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}

function SwahiliArticle() {

    return (
        <SpeakPage>
            <SpeakParagraph>
                <p>Kukosa hewa (choking) hutokea wakati kitu, mara nyingi chakula, kinaziba njia ya hewa na kumzuia mtu kupumua vizuri. Huduma ya kwanza ya haraka ni muhimu katika hali hizi ili kuzuia jeraha kali au hata kifo.</p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Vifaa Vinavyohitajika</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Uwezo wa kutambua dalili za kukosa hewa (kutoweza kuongea, ugumu wa kupumua, kikohozi kisicho na sauti, ngozi kuwa ya buluu).</li>
                        <li>- Ujuzi wa mbinu za huduma ya kwanza (mfano, kupiga mgongo na msukumo wa tumbo).</li>
                        <li>- Upatikanaji wa simu ya kupiga huduma za dharura ikiwa ni lazima.</li>
                        <li>- Moyo wa utulivu na wa kutia moyo kumsaidia anayekosa hewa kuwa mtulivu kadri inavyowezekana.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Hatua za Kuchukua</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Hatua 1: Kagua Hali</h4>
                    <p>- Mhimize mtu huyo kujaribu kukohoa kama anaweza. Hii ni njia ya mwili kujaribu kuondoa kitu kilicho kwenye njia ya hewa.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 2: Piga Mgongo</h4>
                    <p>- Simama nyuma ya mtu huyo, shikilia kifua chake na mkono mmoja na mwinamishe mbele kwenye kiuno. Tumia kisigino cha mkono wako mwingine kumpiga mgongoni mara tano kati ya mabega yake.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 3: Fanya Msukumo wa Tumbo (Heimlich Maneuver)</h4>
                    <p>- Simama nyuma ya mtu huyo na ufungue mikono yako kiunoni kwake. Fanya ngumi na mkono mmoja na uweke juu kidogo ya kitovu chake. Shika ngumi hiyo na mkono wako mwingine kisha fanya msukumo wa haraka, wa ndani na juu hadi kitu kitoke au mtu aanze kupumua kawaida.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 4: Piga Huduma za Dharura</h4>
                    <p>- Ikiwa mtu bado anakosa hewa au amepoteza fahamu, piga huduma za dharura mara moja na endelea kutoa huduma ya kwanza hadi msaada ufike.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Huduma Baada ya Huduma ya Kwanza</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Hatua 1: Mwangalie Mtu Huyo</h4>
                    <p>- Baada ya kufanikiwa kuondoa kitu, endelea kumwangalia mtu huyo kuhakikisha anapumua kawaida na kupona vizuri.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 2: Tafuta Huduma ya Matibabu</h4>
                    <p>- Mhimize mtu huyo kuonana na mtaalamu wa afya, hasa kama msukumo wa tumbo ulifanyika, kwani kunaweza kuwa na majeraha ya ndani.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 3: Mpe Faraja</h4>
                    <p>- Msaidia mtu huyo awe mtulivu na mpe maji au mapumziko anapojirekebisha kutoka kwenye tukio hilo.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}
