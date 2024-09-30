import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";

export default function KnowledgeMentalHealthDepressionPage() {

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
                <p>
                    Depression is a mental health condition that affects how a person feels, thinks, and handles daily activities like eating, sleeping, or working. It goes beyond just feeling sad for a short period, and it can last for weeks or months, often requiring professional help. Depression is one of the most common mental health issues, affecting millions of people worldwide.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Identifying Depression</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Symptoms of depression can vary from person to person, but there are some common signs to look out for. Many people may experience persistent depression without recognizing it. Some common symptoms include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Persistent sadness:</strong> Ongoing feelings of sadness, emptiness, or hopelessness.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Loss of interest in activities:</strong> Reduced interest or pleasure in activities that were once enjoyable, such as hobbies or social interactions.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Changes in weight:</strong> Unexplained weight loss or gain due to changes in appetite.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Fatigue:</strong> Feelings of tiredness or lack of energy, even after getting enough sleep.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Sleep disturbances:</strong> Difficulty falling asleep, staying asleep, or sleeping too much.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Thoughts of death or suicide:</strong> In severe cases, individuals may have thoughts of ending their life or attempts at suicide.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of Depression</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Depression results from a combination of biological, psychological, and social factors. Each individual has a different level of risk depending on their life circumstances and environment. Some common causes include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Biological changes:</strong> Changes in brain chemistry or a family history of depression can increase the likelihood of developing the condition.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Life events:</strong> Major life events such as losing a job, a relationship breakdown, or the death of a loved one can trigger depression.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Psychological trauma:</strong> Facing difficult or traumatic events, such as abuse, stress, or past trauma, can lead to depression.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Physical health conditions:</strong> Chronic illnesses, pain, or other health issues can contribute to or worsen depression.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Managing Depression</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Managing depression often requires a combination of professional help and personal strategies to alleviate its effects. Several approaches can help in coping with and improving the quality of life for someone with depression:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Psychotherapy:</strong> Therapy, such as Cognitive Behavioral Therapy (CBT), can help individuals reframe negative thoughts and behaviors that contribute to depression.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Antidepressant medications:</strong> Medications prescribed by a doctor can help balance brain chemicals and improve mood.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Relaxation techniques:</strong> Breathing exercises, meditation, or yoga can help reduce stress and promote calmness.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Social support:</strong> Having a strong support network of friends and family is crucial for someone trying to overcome depression.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Helping Someone with Depression</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Helping someone with depression requires understanding and patience. Here are some ways to support a person struggling with depression:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Communicate openly:</strong> Talk to the person in a compassionate and supportive manner. Listen without judgment to their feelings.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Encourage professional help:</strong> Suggest seeking professional counseling if their depression seems severe or is impacting their daily life.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Offer practical support:</strong> Sometimes, helping with small tasks like preparing meals or accompanying them to activities can reduce their burden.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Provide emotional support:</strong> Create a safe space where they feel comfortable sharing their thoughts without feeling judged or ashamed.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Preventing and Managing Depression</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        While depression cannot always be prevented, there are several steps you can take to reduce your risk and manage symptoms. Key strategies include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Self-care:</strong> Ensure you maintain your physical and mental well-being by getting enough sleep, eating well, and exercising regularly.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Stress management:</strong> Find ways to reduce stress, such as practicing mindfulness or spending time with loved ones.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Build a support network:</strong> Staying connected with family, friends, or support groups can be a great help during emotional challenges.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Seek early help:</strong> If you notice early signs of depression, seek support quickly to prevent the condition from worsening.</li>
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
                <p>
                    Unyogovu (Depression) ni hali ya kihisia ambayo huathiri jinsi mtu anavyohisi, kufikiri, na jinsi anavyoshughulikia shughuli za kila siku kama kula, kulala, au kufanya kazi. Ni zaidi ya kuhisi huzuni kwa muda, na inaweza kudumu kwa wiki au miezi, ikihitaji msaada wa kitaalamu. Unyogovu ni moja ya magonjwa ya afya ya akili yanayoathiri mamilioni ya watu ulimwenguni kote.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kutambua Unyogovu</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Dalili za unyogovu zinaweza kutofautiana kati ya watu, lakini baadhi ya ishara za kawaida zinaweza kujumuisha mabadiliko ya tabia, mawazo, na hisia. Watu wengi wanaweza kuwa na unyogovu wa kudumu bila kujua. Ishara za unyogovu ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Huzuni ya muda mrefu:</strong> Hisia za huzuni, utupu, au kukosa thamani kwa kipindi kirefu cha muda.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kupoteza hamu ya shughuli:</strong> Kupungua kwa hamu ya kufanya mambo ambayo mtu hapo awali alikuwa akifurahia, kama burudani au kijamii.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Mabadiliko ya uzito:</strong> Kupungua au kuongezeka kwa uzito bila sababu dhahiri kutokana na kubadilika kwa hamu ya chakula.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kupungua kwa nishati:</strong> Hisia za uchovu au upungufu wa nishati hata baada ya kulala vya kutosha.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kutatizika na usingizi:</strong> Mtu anaweza kuwa na shida ya kulala, au anaweza kulala sana kuliko kawaida.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Mawazo ya kifo au kujiua:</strong> Katika hali mbaya zaidi, mtu anaweza kuwa na mawazo ya kujiua au jaribio la kujiua.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Sababu za Unyogovu</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Unyogovu hutokana na mchanganyiko wa sababu za kibaolojia, za kisaikolojia, na za kijamii. Kila mtu yuko kwenye hatari tofauti ya kupata unyogovu kulingana na maisha yake na mazingira. Sababu zinazoweza kuchangia ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Mabadiliko ya kibaolojia:</strong> Mabadiliko katika mfumo wa kemikali wa ubongo au historia ya familia ya unyogovu inaweza kuongeza hatari ya kupata hali hii.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Matukio ya maisha:</strong> Matukio makubwa ya maisha, kama kupoteza kazi, kuvunjika kwa mahusiano, au kupoteza mtu wa karibu, yanaweza kusababisha unyogovu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Trauma ya kisaikolojia:</strong> Kukumbana na matukio mabaya au magumu kama vile udhalilishaji, msongo wa mawazo, au unyanyasaji wa zamani kunaweza kusababisha unyogovu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Hali ya kimwili:</strong> Magonjwa sugu, maumivu, au hali nyingine za kiafya zinaweza kusababisha au kuzidisha unyogovu.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kushughulika na Unyogovu</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kushughulika na unyogovu kunahitaji msaada wa kitaalamu pamoja na mikakati binafsi ya kupunguza athari zake. Hatua tofauti zinaweza kusaidia kudhibiti na kuboresha maisha ya mtu mwenye unyogovu:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Tiba ya Kisaikolojia:</strong> Tiba kama Cognitive Behavioral Therapy (CBT) inaweza kusaidia watu kubadili mawazo hasi na tabia zinazochangia unyogovu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Dawa za unyogovu:</strong> Madawa yaliyopendekezwa na daktari yanaweza kusaidia kurekebisha usawa wa kemikali kwenye ubongo.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Mbinu za kujituliza:</strong> Zoezi la kuvuta pumzi, kutafakari, au yoga kunaweza kusaidia kupunguza msongo wa mawazo na kukuza utulivu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Msaada wa kijamii:</strong> Kuwa na mtandao wa msaada, kama marafiki na familia, ni muhimu kwa mtu anayejaribu kushinda unyogovu.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kumsaidia Mtu Mwenye Unyogovu</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kumsaidia mtu mwenye unyogovu inahitaji uelewa na uvumilivu. Hapa kuna njia za kusaidia mtu anayekabiliana na unyogovu:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Wasiliana kwa uwazi:</strong> Zungumza na mtu mwenye unyogovu kwa njia yenye kuelewa na inayotoa msaada. Sikiliza bila kuhukumu hisia zao.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Shawishi msaada wa kitaalamu:</strong> Himiza mtu kutafuta ushauri wa kitaalamu ikiwa unyogovu wao unaonekana kuwa mbaya au unaathiri maisha yao ya kila siku.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Toa msaada wa vitendo:</strong> Mara nyingi, kusaidia na kazi ndogo ndogo kama kuandaa chakula au kuwasindikiza kwenye shughuli kunaweza kupunguza mzigo wao.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Toa msaada wa kihisia:</strong> Weka mazingira salama ambapo wanaweza kushiriki mawazo yao bila kuhisi aibu au hatia.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kuzuia na Kusimamia Unyogovu</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Ingawa sio kila mara unaweza kuzuia unyogovu, kuna njia kadhaa za kupunguza hatari na kudhibiti dalili zake. Baadhi ya hatua muhimu ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Matunzo binafsi:</strong> Hakikisha unalinda afya yako ya mwili na akili kwa kupata usingizi wa kutosha, kula vizuri, na kufanya mazoezi mara kwa mara.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kuzuia msongo wa mawazo:</strong> Tafuta njia za kudhibiti msongo wa mawazo, kama vile mazoezi ya kutafakari au kutumia muda na watu unaowapenda.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kujenga msaada wa kijamii:</strong> Kuwasiliana na familia, marafiki, au kujiunga na vikundi vya msaada kunaweza kusaidia sana wakati wa changamoto za kihisia.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kutafuta msaada mapema:</strong> Ikiwa unahisi dalili za unyogovu zinaanza kujitokeza, tafuta msaada haraka ili kuzuia kuzorota kwa hali hiyo.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>
        </SpeakPage>
    )
}