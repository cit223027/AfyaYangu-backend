import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph";

export default function FirstAidNoseBleedPage() {

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
                <p>Nosebleeding, or epistaxis, is a common condition where blood flows from one or both nostrils. It can be alarming, but most nosebleeds are not serious and can be treated with simple first aid steps.</p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Requirements</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Clean tissue or gauze to absorb blood.</li>
                        <li>- A place to sit down with your head slightly forward.</li>
                        <li>- A cold compress or ice pack to help constrict blood vessels.</li>
                        <li>- Access to a phone in case emergency services are required.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Actions</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Step 1: Sit and Lean Forward</h4>
                    <p>- Sit down and lean slightly forward to prevent blood from flowing down the throat, which can cause irritation or nausea. Do not lie down during a nosebleed.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 2: Pinch the Nostrils</h4>
                    <p>- Using your thumb and index finger, gently pinch the soft part of your nose just below the bony bridge. Keep steady pressure for about 10-15 minutes without releasing.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 3: Use a Cold Compress</h4>
                    <p>- Apply a cold compress or ice pack to the bridge of the nose. This helps constrict the blood vessels and slow the bleeding.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 4: Avoid Irritation</h4>
                    <p>- After the bleeding has stopped, avoid blowing your nose, sneezing forcefully, or picking at it for several hours, as this may cause the bleeding to restart.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 5: Seek Medical Help if Necessary</h4>
                    <p>- If the bleeding does not stop after 20 minutes, or if it is accompanied by dizziness, light-headedness, or heavy blood flow, seek medical attention.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Watch Out For</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Ensure that the blood is not flowing into the throat, as this can cause choking or nausea.</li>
                        <li>- Be cautious about blood clots forming in the nasal passage, as this can block breathing or cause discomfort.</li>
                        <li>- Monitor for signs of shock, such as pale skin, weakness, or rapid breathing, especially if the nosebleed is heavy.</li>
                        <li>- Avoid inserting anything into the nose, like tissues or cotton, as this can irritate the lining and cause further bleeding.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Possible Causes of Nosebleeds</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Dry Air: Exposure to dry air, especially during winter, can dry out the nasal passages and cause bleeding.</li>
                        <li>- Nose Picking: Frequent nose picking or aggressive rubbing can injure the delicate blood vessels in the nostrils.</li>
                        <li>- Allergies: Inflammation from allergies can irritate and weaken the nasal lining, leading to nosebleeds.</li>
                        <li>- Trauma: Any direct impact to the nose, whether from a fall, injury, or accident, can cause a nosebleed.</li>
                        <li>- Blood Thinners: Medications like aspirin or anticoagulants may make someone more prone to nosebleeds.</li>
                        <li>- High Blood Pressure: Persistent high blood pressure can make the blood vessels in the nose more likely to rupture.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Post-First Aid Care</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Step 1: Rest and Recover</h4>
                    <p>- After the bleeding has stopped, rest and avoid any activities that might strain the nose or increase blood pressure, such as heavy lifting or bending over.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 2: Hydrate and Humidify</h4>
                    <p>- Drink plenty of water and use a humidifier to keep the air moist, especially in dry environments, to prevent future nosebleeds.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 3: Monitor for Recurrence</h4>
                    <p>- Watch for any recurring nosebleeds over the next few days, particularly if they are frequent or prolonged, as this may indicate an underlying issue that requires medical evaluation.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}

function SwahiliArticle() {
    return (
        <SpeakPage>
            <SpeakParagraph>
                <p>Kutokwa na damu puani, au epistaxis, ni hali ya kawaida ambapo damu hutoka kwenye tundu moja au zote za pua. Inaweza kuwa ya kutisha, lakini kutokwa na damu puani mara nyingi si hali mbaya na inaweza kutibiwa kwa hatua rahisi za huduma ya kwanza.</p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Vifaa Vinavyohitajika</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Tishu safi au gauni ya kufyonza damu.</li>
                        <li>- Sehemu ya kukaa chini na kichwa kikiwa mbele kidogo.</li>
                        <li>- Barafu au kifurushi baridi kusaidia kubana mishipa ya damu.</li>
                        <li>- Simu ya kupiga huduma za dharura ikiwa inahitajika.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Hatua za Kuchukua</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Hatua 1: Kaa na Inamisha Kichwa Mbele</h4>
                    <p>- Kaa chini na inamisha kichwa mbele kidogo ili kuzuia damu isitiririke kwenye koo, ambayo inaweza kusababisha kichefuchefu au muwasho. Usilale wakati wa kutokwa na damu puani.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 2: Banwa Pua</h4>
                    <p>- Kwa kutumia kidole gumba na kidole cha shahada, banwa sehemu laini ya pua yako chini ya mfupa wa pua. Shikilia kwa dakika 10-15 bila kuachia.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 3: Tumia Kifurushi Baridi</h4>
                    <p>- Weka kifurushi baridi au barafu kwenye sehemu ya juu ya pua. Hii inasaidia kubana mishipa ya damu na kupunguza kasi ya kutokwa na damu.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 4: Epuka Kuwasha Pua</h4>
                    <p>- Baada ya damu kukoma, epuka kupiga chafya kwa nguvu, kupuliza pua, au kuingiza vitu ndani kwa muda wa masaa kadhaa ili kuepuka kuanzisha tena kutokwa na damu.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 5: Pata Msaada wa Matibabu Ikiwa Inahitajika</h4>
                    <p>- Ikiwa damu haijakoma baada ya dakika 20, au ikiwa inasababisha kizunguzungu, udhaifu, au mtiririko mzito wa damu, tafuta msaada wa matibabu mara moja.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Jihadhari na Haya</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Hakikisha damu haitiririki kwenye koo, kwani hii inaweza kusababisha kichefuchefu au kuziba njia ya hewa.</li>
                        <li>- Angalia damu inayoganda ndani ya pua, ambayo inaweza kusababisha kuzuia upumuaji au usumbufu.</li>
                        <li>- Fuata dalili za mshtuko, kama vile ngozi kuwa na rangi nyeupe, udhaifu, au kupumua haraka, hasa ikiwa damu ni nyingi.</li>
                        <li>- Epuka kuingiza kitu chochote kwenye pua, kama vile tishu au pamba, kwani hii inaweza kusababisha muwasho na kuanzisha tena damu kutoka.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Sababu Zinaweza Kusababisha Kutokwa na Damu Pwani</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Hewa Kavu: Kukaa kwenye hewa kavu, hasa wakati wa baridi, kunaweza kukausha njia za pua na kusababisha damu kutoka.</li>
                        <li>- Kuchokonoa Pua: Kuchokonoa pua mara kwa mara au kwa nguvu kunaweza kuumiza mishipa ya damu midogo ndani ya pua.</li>
                        <li>- Mzio: Kuvimba kutokana na mzio kunaweza kuleta muwasho na kudhoofisha utando wa pua, na hivyo kusababisha kutokwa na damu.</li>
                        <li>- Majeraha: Kupigwa au kugongwa pua moja kwa moja, kwa mfano kutokana na kuanguka au ajali, kunaweza kusababisha kutokwa na damu puani.</li>
                        <li>- Dawa za Kupunguza Damu: Dawa kama aspirini au dawa za kupunguza damu zinaweza kumfanya mtu awe na uwezekano mkubwa wa kutokwa na damu puani.</li>
                        <li>- Shinikizo la Juu la Damu: Shinikizo la juu la damu linaweza kufanya mishipa ya damu puani kuwa na uwezekano mkubwa wa kupasuka.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Huduma Baada ya Huduma ya Kwanza</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Hatua 1: Pumzika na Kupona</h4>
                    <p>- Baada ya damu kukoma, pumzika na epuka shughuli zinazoweza kuleta shinikizo kwenye pua au kuongeza shinikizo la damu, kama vile kuinua vitu vizito au kuinama kwa nguvu.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 2: Kunywa Maji na Tumia Unyevunyevu</h4>
                    <p>- Kunywa maji mengi na tumia kifaa cha unyevu kwenye hewa ili kuweka hewa yenye unyevunyevu, hasa katika mazingira kavu, kuzuia kutokwa na damu tena.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 3: Angalia Dalili za Kuendelea</h4>
                    <p>- Fuata kama kutokwa na damu puani kunatokea mara kwa mara kwa siku chache zijazo, hasa kama ni mara kwa mara au kwa muda mrefu, kwani hii inaweza kuonyesha tatizo la kiafya linalohitaji uchunguzi wa daktari.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}
