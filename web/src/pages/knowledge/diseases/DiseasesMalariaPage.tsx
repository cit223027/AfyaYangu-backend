import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";

export default function KnowledgeDiseasesMalariaPage() {

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
                    Malaria is a life-threatening disease caused by parasites transmitted to humans through the bites of infected female Anopheles mosquitoes. It is a major public health issue in tropical and subtropical regions. Early diagnosis and treatment are essential to prevent complications and death.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Signs and Symptoms of Malaria</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Malaria symptoms can range from mild to severe, and they typically appear between 10 days and 4 weeks after infection, though they can occur as early as 7 days or as late as a year. Common symptoms include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Fever:</strong> Recurrent high fever is a key symptom of malaria.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Chills:</strong> Often accompanied by shaking chills that can last from a few hours to a day.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Headache:</strong> A persistent and sometimes severe headache can occur.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Muscle pain and fatigue:</strong> Malaria can cause extreme tiredness and muscle pain.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Nausea and vomiting:</strong> Digestive issues such as nausea, vomiting, and diarrhea can be present.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Other symptoms:</strong> In severe cases, symptoms can include confusion, seizures, respiratory distress, and even organ failure.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of Malaria</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Malaria is caused by Plasmodium parasites, which are transmitted to humans through the bites of infected Anopheles mosquitoes. There are five parasite species known to cause malaria in humans, with the most dangerous being *Plasmodium falciparum* and *Plasmodium vivax*.
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Plasmodium falciparum:</strong> The most lethal and widespread malaria parasite, especially in Africa.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Plasmodium vivax:</strong> A parasite common in Asia and South America, capable of staying dormant in the liver and causing relapses months or even years after the initial infection.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Diagnosis of Malaria</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Malaria diagnosis requires a medical professional and specific tests. It is critical to visit a medical center if malaria is suspected, especially after traveling to a region where malaria is endemic. Diagnosis can be done through:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Blood tests:</strong> Microscopic examination or rapid diagnostic tests (RDTs) detect the presence of malaria parasites in the blood.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Laboratory tests:</strong> Molecular tests like PCR can also identify malaria infections, especially in low-parasite cases.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        Early diagnosis is essential to prevent serious complications. Always seek medical advice if you experience symptoms after visiting a malaria-prone area.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Treatment of Malaria</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Malaria is a treatable disease, but early treatment is crucial. Treatment typically depends on the type of malaria, the patient’s age, and the severity of the infection. It is important to visit a medical center to receive the correct treatment plan. Common treatment options include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Antimalarial medications:</strong> These drugs, such as artemisinin-based combination therapies (ACTs), chloroquine, and others, are used to kill the parasite and treat the infection.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Severe cases:</strong> In severe malaria cases, hospitalization is often required. Treatment may include intravenous (IV) medication, fluids, and supportive care.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        Following treatment, regular follow-up visits to a healthcare provider are necessary to ensure the infection is fully cleared and to monitor for possible relapses in the case of *Plasmodium vivax*.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Prevention and Risk Factors</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Malaria prevention is key, particularly for people traveling to malaria-endemic regions. Preventive measures can greatly reduce the risk of contracting malaria. Common preventive steps include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Insecticide-treated bed nets:</strong> Sleeping under mosquito nets treated with insecticide is one of the most effective ways to prevent mosquito bites.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Insect repellents:</strong> Use insect repellents containing DEET on exposed skin to deter mosquitoes.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Antimalarial medication (prophylaxis):</strong> For people traveling to high-risk areas, taking preventive antimalarial medication can lower the risk of infection.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Controlling breeding sites:</strong> Draining stagnant water, which serves as breeding grounds for mosquitoes, can reduce mosquito populations.</li>
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
                    Malaria ni ugonjwa hatari unaosababishwa na vimelea vinavyoambukizwa kwa binadamu kupitia kuumwa na mbu jike aliyeambukizwa wa *Anopheles*. Ni tatizo kubwa la afya ya umma katika maeneo ya kitropiki na nusutropiki. Utambuzi wa mapema na matibabu ni muhimu ili kuzuia matatizo na kifo.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Dalili na Ishara za Malaria</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Dalili za malaria zinaweza kuanzia nyepesi hadi kali, na kwa kawaida huonekana kati ya siku 10 na wiki 4 baada ya maambukizi, ingawa zinaweza kuanza mapema kama siku 7 au kuchelewa hadi mwaka mmoja. Dalili za kawaida ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Homa:</strong> Homa ya mara kwa mara ni dalili kuu ya malaria.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Baridi ya kutetemeka:</strong> Mara nyingi huambatana na kutetemeka kwa baridi kunakoweza kudumu kutoka saa chache hadi siku moja.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kichwa kuuma:</strong> Kichwa chenye maumivu ya mara kwa mara na wakati mwingine makali kinaweza kutokea.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Maumivu ya misuli na uchovu:</strong> Malaria inaweza kusababisha uchovu mkubwa na maumivu ya misuli.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kichefuchefu na kutapika:</strong> Shida za tumbo kama vile kichefuchefu, kutapika, na kuhara zinaweza kutokea.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Dalili nyingine:</strong> Katika visa vya kali, dalili zinaweza kujumuisha kuchanganyikiwa, degedege, matatizo ya kupumua, na hata kushindwa kufanya kazi kwa viungo.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Sababu za Malaria</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Malaria inasababishwa na vimelea vya *Plasmodium*, ambavyo vinaambukizwa kwa binadamu kupitia kuumwa na mbu wa *Anopheles* aliyeambukizwa. Kuna aina tano za vimelea vinavyojulikana kusababisha malaria kwa binadamu, ambapo hatari zaidi ni *Plasmodium falciparum* na *Plasmodium vivax*.
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Plasmodium falciparum:</strong> Vimelea vya malaria vyenye hatari zaidi na vinavyoenea sana, hasa Afrika.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Plasmodium vivax:</strong> Vimelea vinavyopatikana zaidi Asia na Amerika ya Kusini, vinaweza kukaa kwenye ini bila dalili na kusababisha marudio ya maambukizi miezi au hata miaka baada ya maambukizi ya awali.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Utambuzi wa Malaria</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Utambuzi wa malaria unahitaji daktari na vipimo maalum. Ni muhimu kutembelea kituo cha afya ikiwa unashuku malaria, hasa baada ya kusafiri kwenye eneo ambalo malaria imeenea. Utambuzi unaweza kufanyika kupitia:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Vipimo vya damu:</strong> Uchunguzi wa damu kwa kutumia darubini au vipimo vya haraka (RDTs) hutambua uwepo wa vimelea vya malaria kwenye damu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Vipimo vya maabara:</strong> Vipimo vya Masi kama PCR vinaweza pia kutambua maambukizi ya malaria, hasa katika visa vya kiwango kidogo cha vimelea.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        Utambuzi wa mapema ni muhimu ili kuzuia matatizo makubwa. Daima tafuta ushauri wa daktari ikiwa unapata dalili baada ya kutembelea eneo lenye malaria.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Matibabu ya Malaria</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Malaria ni ugonjwa unaoweza kutibika, lakini matibabu ya mapema ni muhimu. Matibabu kwa kawaida hutegemea aina ya malaria, umri wa mgonjwa, na ukali wa maambukizi. Ni muhimu kutembelea kituo cha afya ili kupata mpango sahihi wa matibabu. Chaguo za matibabu ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Dawa za kutibu malaria:</strong> Dawa kama vile tiba za mchanganyiko za artemisinin (ACTs), chloroquine, na nyinginezo hutumika kuua vimelea na kutibu maambukizi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Visa vya kali:</strong> Katika visa vya malaria kali, kulazwa hospitalini mara nyingi kunahitajika. Matibabu yanaweza kujumuisha dawa za mishipa (IV), maji, na huduma za kuimarisha hali ya mgonjwa.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        Baada ya matibabu, ziara za kawaida kwa mtoa huduma za afya ni muhimu ili kuhakikisha kuwa maambukizi yameondolewa kabisa na kufuatilia uwezekano wa kurudiwa kwa maambukizi kwa visa vya *Plasmodium vivax*.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kinga na Vihatarishi</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kinga ya malaria ni muhimu, hasa kwa watu wanaosafiri kwenye maeneo ambako malaria imeenea. Hatua za kujikinga zinaweza kupunguza hatari ya kuambukizwa malaria. Hatua za kawaida za kinga ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Neti zilizowekwa dawa ya kuua mbu:</strong> Kulala chini ya neti zilizowekwa dawa ya kuua mbu ni njia mojawapo bora ya kuzuia kuumwa na mbu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Dawa za kujipaka za kuzuia mbu:</strong> Tumia dawa za kujipaka zenye DEET kwenye ngozi iliyoko wazi ili kuwazuia mbu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Dawa za kuzuia malaria:</strong> Kwa watu wanaosafiri kwenda maeneo ya hatari kubwa, kutumia dawa za kuzuia malaria kunaweza kupunguza hatari ya maambukizi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kudhibiti mazalia ya mbu:</strong> Kutoa maji yaliyotuama, ambayo ni mazalia ya mbu, kunaweza kupunguza idadi ya mbu.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>
        </SpeakPage>
    )
}