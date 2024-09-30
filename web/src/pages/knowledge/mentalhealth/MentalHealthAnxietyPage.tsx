import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";

export default function KnowledgeMentalHealthAnxietyPage() {

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
                    Anxiety is a natural response to stress, but when it becomes persistent and overwhelming, it can interfere with daily life. Anxiety disorders are among the most common mental health conditions, affecting millions of people worldwide. Understanding anxiety and how to manage it is crucial for mental well-being.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Identifying Anxiety</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Anxiety manifests in various forms, such as generalized anxiety disorder (GAD), panic disorder, social anxiety, and more. The signs can vary but typically include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Excessive worry:</strong> Constantly feeling on edge and overthinking situations, even when there's no immediate threat.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Restlessness:</strong> A feeling of being "on edge" or unable to relax.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Physical symptoms:</strong> Heart palpitations, sweating, headaches, or trembling.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Avoidance:</strong> Steering clear of situations or activities that trigger anxiety.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Sleep disturbances:</strong> Difficulty falling asleep or staying asleep due to racing thoughts.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of Anxiety</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        The causes of anxiety are multifaceted, involving a combination of genetic, environmental, and psychological factors. Some common causes include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Stressful life events:</strong> Major life changes like losing a job, moving, or losing a loved one can trigger anxiety.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Genetics:</strong> Anxiety can run in families, suggesting a genetic predisposition to developing an anxiety disorder.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Trauma:</strong> Experiencing or witnessing traumatic events can lead to long-term anxiety.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Personality factors:</strong> Some personality traits, such as being perfectionistic or shy, may increase the risk of developing anxiety.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Dealing with Anxiety</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Managing anxiety is essential for improving quality of life. There are various approaches that individuals can adopt to cope with anxiety, depending on the severity of their condition:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Cognitive Behavioral Therapy (CBT):</strong> This therapy helps individuals reframe negative thoughts and adopt healthier coping mechanisms.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Mindfulness and relaxation:</strong> Techniques like deep breathing, meditation, and yoga can calm the mind and reduce anxiety.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Exercise:</strong> Regular physical activity releases endorphins, which improve mood and relieve stress.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Limiting stimulants:</strong> Reducing caffeine, alcohol, and nicotine intake can prevent exacerbation of anxiety symptoms.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Helping Someone with Anxiety</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Supporting someone with anxiety requires understanding, patience, and compassion. Here are some ways to help:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Be a good listener:</strong> Encourage the person to share their feelings without judgment.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Avoid dismissing their feelings:</strong> Statements like "just relax" can invalidate their experience. Instead, acknowledge their emotions and offer support.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Encourage professional help:</strong> Suggest seeking therapy or speaking with a healthcare professional if anxiety is affecting their daily life.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Offer practical help:</strong> Sometimes, offering to assist with tasks that seem overwhelming can reduce their stress.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Preventing and Avoiding Anxiety Triggers</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        While anxiety cannot always be avoided, certain lifestyle changes can reduce the likelihood of experiencing severe anxiety. Some tips include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Establishing a routine:</strong> Regular schedules help to create a sense of control and reduce uncertainty.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Limiting exposure to stress:</strong> Avoid unnecessary stressors when possible and prioritize self-care.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Maintaining a healthy lifestyle:</strong> Adequate sleep, proper nutrition, and regular exercise support mental health.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Developing a support network:</strong> Surrounding yourself with supportive friends and family can buffer against anxiety.</li>
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
                    Wasiwasi ni jibu la asili kwa msongo wa mawazo, lakini linapokuwa la kudumu na lenye kuzidi, linaweza kuingilia maisha ya kila siku. Matatizo ya wasiwasi ni miongoni mwa hali za afya ya akili zinazoenea sana, zinazowathiri mamilioni ya watu duniani kote. Kuelewa wasiwasi na jinsi ya kuudhibiti ni muhimu kwa ustawi wa akili.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kutambua Wasiwasi</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Wasiwasi hujitokeza kwa njia mbalimbali, kama vile wasiwasi wa jumla (GAD), wasiwasi wa hofu, wasiwasi wa kijamii, na zaidi. Ishara zake zinaweza kutofautiana lakini kwa kawaida ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Kuwaza kupita kiasi:</strong> Kuhisi kuwa na wasiwasi muda wote na kufikiria sana hali, hata kama hakuna tishio la moja kwa moja.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kutotulia:</strong> Hisia za kuwa "katika hali ya tahadhari" au kushindwa kupumzika.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Dalili za kimwili:</strong> Mapigo ya moyo kwenda kasi, jasho, maumivu ya kichwa, au kutetemeka.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kuepuka:</strong> Kuepuka hali au shughuli zinazochochea wasiwasi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kuvurugika kwa usingizi:</strong> Ugumu wa kupata usingizi au kuendelea kulala kutokana na mawazo yanayozunguka.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Sababu za Wasiwasi</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Sababu za wasiwasi ni nyingi, zikijumuisha mchanganyiko wa vinasaba, mazingira, na mambo ya kisaikolojia. Baadhi ya sababu za kawaida ni:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Matukio yenye msongo wa mawazo:</strong> Mabadiliko makubwa ya maisha kama kupoteza kazi, kuhamia, au kupoteza mpendwa yanaweza kuchochea wasiwasi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Vinasaba:</strong> Wasiwasi unaweza kuwa wa kurithi, ikionyesha kuwa kuna uwezekano wa vinasaba kuchangia kuendeleza wasiwasi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Mshtuko:</strong> Kupitia au kushuhudia matukio ya kutisha kunaweza kusababisha wasiwasi wa muda mrefu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Sifa za utu:</strong> Baadhi ya tabia za utu, kama kuwa mkamilifu au mwenye aibu, zinaweza kuongeza hatari ya kuendeleza wasiwasi.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kukabiliana na Wasiwasi</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kudhibiti wasiwasi ni muhimu kwa kuboresha ubora wa maisha. Kuna njia mbalimbali ambazo mtu anaweza kutumia kukabiliana na wasiwasi, kulingana na ukali wa hali yao:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Matibabu ya Utambuzi wa Kisaikolojia (CBT):</strong> Matibabu haya husaidia watu kubadilisha mawazo hasi na kutumia mbinu za kukabiliana kwa afya bora.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Utulivu na kuzingatia:</strong> Mbinu kama kupumua kwa kina, kutafakari, na yoga zinaweza kutuliza akili na kupunguza wasiwasi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Mazoezi:</strong> Shughuli za kimwili za mara kwa mara huachilia endorphins, ambazo huboresha hali ya moyo na kupunguza msongo wa mawazo.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kupunguza vitu vinavyochochea:</strong> Kupunguza matumizi ya kafeini, pombe, na nikotini kunaweza kuzuia kuzidi kwa dalili za wasiwasi.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kumsaidia Mtu Mwenye Wasiwasi</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kumuunga mkono mtu mwenye wasiwasi kunahitaji kuelewa, uvumilivu, na huruma. Hapa kuna baadhi ya njia za kumsaidia:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Kuwa msikilizaji mzuri:</strong> Mhimize mtu huyo kushiriki hisia zake bila kuhukumu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Epuka kudharau hisia zao:</strong> Kauli kama "tulia tu" zinaweza kupuuza uzoefu wao. Badala yake, kubali hisia zao na toa msaada.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Himiza msaada wa kitaalamu:</strong> Pendekeza kutafuta tiba au kuzungumza na mtaalamu wa afya ikiwa wasiwasi unaathiri maisha yao ya kila siku.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Toa msaada wa kiutendaji:</strong> Wakati mwingine, kujitolea kusaidia na kazi zinazowakera kunaweza kupunguza msongo wa mawazo.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kuzuia na Kuepuka Vichochezi vya Wasiwasi</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Ingawa wasiwasi hauwezi kuepukika mara zote, mabadiliko fulani ya maisha yanaweza kupunguza uwezekano wa kupata wasiwasi mkali. Baadhi ya vidokezo ni:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Kujenga ratiba:</strong> Ratiba za mara kwa mara husaidia kuunda hali ya udhibiti na kupunguza hali ya kutojua.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kupunguza kukutana na msongo wa mawazo:</strong> Epuka vitu vya msongo vinavyoweza kuepukwa na upe kipaumbele kwa kujitunza mwenyewe.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kudumisha maisha yenye afya:</strong> Usingizi wa kutosha, lishe bora, na mazoezi ya mara kwa mara husaidia afya ya akili.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kujenga mtandao wa msaada:</strong> Kujizunguka na marafiki na familia wanaokuunga mkono kunaweza kupunguza wasiwasi.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>
        </SpeakPage>

    )
}
