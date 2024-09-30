import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";

export default function FirstAidFaintingPage() {

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
                <p>Fainting, or syncope, is a temporary loss of consciousness caused by a lack of blood flow to the brain. It can occur suddenly, and immediate first aid can help prevent injury or complications.</p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Requirements</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Access to a phone to call emergency services if needed.</li>
                        <li>- A flat surface where the person can lie down safely.</li>
                        <li>- A calm and composed demeanor to reassure the fainted individual once they regain consciousness.</li>
                        <li>- Knowledge of how to keep the person's airway clear (e.g., tilting the head back if needed).</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Actions</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Step 1: Check Responsiveness</h4>
                    <p>- Tap the person gently and call their name. Check if they are breathing and if their heart is beating.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 2: Position the Person</h4>
                    <p>- Lay the person flat on their back. If possible, raise their legs above the level of their heart to help restore blood flow to the brain.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 3: Loosen Tight Clothing</h4>
                    <p>- Loosen any tight clothing, like collars or belts, to help with circulation and make breathing easier.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 4: Check Airway</h4>
                    <p>- Ensure that the person's airway is clear. If they are not breathing, begin CPR and call emergency services immediately.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 5: Call for Help if Needed</h4>
                    <p>- If the person does not regain consciousness within a few minutes or has other symptoms (like chest pain or difficulty breathing), call emergency services for further assistance.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Watch Out For</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>When Performing First Aid:</h4>
                    <ul>
                        <li>- Ensure the person is in a safe location, away from potential hazards (e.g., moving vehicles, water).</li>
                        <li>- Watch for signs of vomiting, which may require turning the person onto their side to prevent choking.</li>
                        <li>- Be cautious if the person has a head injury from falling; do not move them unnecessarily to avoid worsening any injury.</li>
                        <li>- Avoid giving the person anything to eat or drink until they are fully conscious and alert.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Possible Causes of Fainting</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Dehydration: Lack of fluids can lower blood pressure, leading to fainting.</li>
                        <li>- Overheating: High temperatures and lack of ventilation can cause fainting, especially in crowded spaces.</li>
                        <li>- Sudden Drop in Blood Pressure: Rapid changes in posture or standing up too quickly may cause a decrease in blood flow to the brain.</li>
                        <li>- Emotional Stress: Intense fear, anxiety, or shock can trigger fainting in some people.</li>
                        <li>- Medical Conditions: Conditions like heart disease, low blood sugar, or anemia can increase the risk of fainting.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Post-First Aid Care</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Step 1: Monitor the Person</h4>
                    <p>- Stay with the person until they are fully conscious and able to sit or stand without assistance.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 2: Encourage Rest</h4>
                    <p>- Once the person is awake, encourage them to rest and avoid sudden movements. Sitting or lying down for a while can help prevent a repeat episode of fainting.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Step 3: Seek Medical Advice</h4>
                    <p>- If the fainting episode was sudden or unexplained, it’s a good idea to seek medical advice to rule out any underlying health conditions.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}

function SwahiliArticle() {
    return (
        <SpeakPage>
            <SpeakParagraph>
                <p>Kuzimia, au syncope, ni kupoteza fahamu kwa muda mfupi kunakosababishwa na ukosefu wa mtiririko wa damu kwenye ubongo. Hali hii inaweza kutokea ghafla, na huduma ya kwanza ya haraka inaweza kusaidia kuzuia majeraha au matatizo zaidi.</p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Vifaa Vinavyohitajika</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Simu ya kupiga huduma za dharura ikiwa ni lazima.</li>
                        <li>- Sehemu tambarare ambapo mtu anaweza kulala salama.</li>
                        <li>- Utulivu na hali ya kuaminika kumfariji mtu aliyepoteza fahamu baada ya kurudiwa na fahamu.</li>
                        <li>- Ujuzi wa jinsi ya kuweka njia ya hewa wazi (mfano, kuinamisha kichwa nyuma ikiwa inahitajika).</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Hatua za Kuchukua</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Hatua 1: Angalia Uangalifu</h4>
                    <p>- Mguse mtu kwa upole na mwite jina lake. Angalia kama anapumua na kama moyo wake unadunda.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 2: Muweke Mtu Katika Nafasi Sahihi</h4>
                    <p>- Mlalisha mtu chini kwa mgongo. Ikiwezekana, inua miguu yake juu kidogo kuliko kiwango cha moyo ili kusaidia kurudisha mtiririko wa damu kwenye ubongo.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 3: Fungua Nguo Zenye Kubana</h4>
                    <p>- Fungua nguo zozote zinazobana, kama kola au mikanda, ili kusaidia mtiririko wa damu na kurahisisha upumuaji.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 4: Angalia Njia ya Hewa</h4>
                    <p>- Hakikisha kuwa njia ya hewa ya mtu huyo iko wazi. Ikiwa hapumui, anza CPR na piga huduma za dharura mara moja.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 5: Piga Msaada Ikiwa Inahitajika</h4>
                    <p>- Ikiwa mtu hajazinduka ndani ya dakika chache au ana dalili nyingine (kama maumivu ya kifua au ugumu wa kupumua), piga huduma za dharura kwa msaada zaidi.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Jihadhari na Haya</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Wakati wa Kutoa Huduma ya Kwanza:</h4>
                    <ul>
                        <li>- Hakikisha mtu yuko mahali salama, mbali na hatari zinazoweza kutokea (mfano, magari yanayosogea, maji).</li>
                        <li>- Angalia dalili za kutapika, ambazo zinaweza kuhitaji kumgeuza mtu kwa upande ili kuzuia kuziba kwa njia ya hewa.</li>
                        <li>- Kuwa mwangalifu ikiwa mtu ana jeraha la kichwa kutokana na kuanguka; usimhamishe bila sababu ili kuepusha kuharibu jeraha zaidi.</li>
                        <li>- Usimpe mtu chakula au kinywaji chochote hadi awe na fahamu kamili na macho yake yakiwa macho.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Sababu Zinaweza Kusababisha Kuzimia</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <ul>
                        <li>- Upungufu wa maji mwilini: Kukosa maji kunaweza kushusha shinikizo la damu, na kusababisha kuzimia.</li>
                        <li>- Joto kupita kiasi: Hali ya joto kali na ukosefu wa uingizaji hewa unaweza kusababisha kuzimia, hasa katika maeneo yenye watu wengi.</li>
                        <li>- Kushuka ghafla kwa shinikizo la damu: Mabadiliko ya haraka ya mkao au kusimama ghafla kunaweza kupunguza mtiririko wa damu kwenye ubongo.</li>
                        <li>- Msongo wa mawazo: Hofu kali, wasiwasi, au mshtuko unaweza kusababisha kuzimia kwa baadhi ya watu.</li>
                        <li>- Magonjwa ya kiafya: Magonjwa kama ugonjwa wa moyo, sukari ya chini au anemia yanaweza kuongeza hatari ya kuzimia.</li>
                    </ul>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Huduma Baada ya Huduma ya Kwanza</h3>
                </SpeakDivHeading>

                <SpeakParagraph>
                    <h4>Hatua 1: Mwangalie Mtu Huyo</h4>
                    <p>- Kaana na mtu huyo hadi awe na fahamu kamili na aweze kukaa au kusimama bila msaada.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 2: Mhimize Apumzike</h4>
                    <p>- Baada ya mtu kuzinduka, mhimize kupumzika na kuepuka kufanya mabadiliko ya haraka ya mwendo. Kukaa au kulala kwa muda kunaweza kusaidia kuzuia kuzimia tena.</p>
                </SpeakParagraph>

                <SpeakParagraph>
                    <h4>Hatua 3: Tafuta Ushauri wa Daktari</h4>
                    <p>- Ikiwa tukio la kuzimia lilikuwa ghafla au halieleweki, ni vizuri kutafuta ushauri wa daktari ili kubaini ikiwa kuna matatizo yoyote ya kiafya.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}
