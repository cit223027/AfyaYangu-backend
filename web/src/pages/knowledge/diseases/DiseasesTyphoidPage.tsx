import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";


export default function KnowledgeDiseasesTyphoidPage() {

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
                    Typhoid fever is a bacterial infection caused by *Salmonella Typhi*. It spreads through contaminated food and water and is prevalent in regions with poor sanitation. If left untreated, it can lead to severe complications and even death. Early diagnosis and treatment are essential.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Signs and Symptoms of Typhoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Symptoms of typhoid fever usually develop one to three weeks after exposure and can vary from mild to severe. The common symptoms include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>High fever:</strong> A persistent fever that gradually increases to as high as 104°F (40°C).</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Headache:</strong> A consistent and often severe headache is a common symptom.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Fatigue and weakness:</strong> Extreme tiredness and muscle weakness are typical.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Abdominal pain:</strong> Stomach discomfort, bloating, and pain are frequent.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Constipation or diarrhea:</strong> Some individuals may experience constipation, while others may have diarrhea.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Loss of appetite:</strong> A reduced desire to eat is common.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of Typhoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Typhoid fever is caused by the bacterium *Salmonella Typhi*. The infection spreads when a person consumes food or water contaminated with feces from an infected person. It is more common in areas with poor sanitation and hygiene practices.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Diagnosis of Typhoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Typhoid fever requires prompt diagnosis to prevent complications. It is essential to visit a medical center if you experience symptoms, especially after traveling to areas where typhoid is common. Diagnosis typically involves:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Blood tests:</strong> A blood culture can detect the presence of *Salmonella Typhi*.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Stool or urine tests:</strong> These may also be used to identify the bacteria.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Treatment of Typhoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Typhoid fever is treatable with antibiotics, but early intervention is critical to avoid severe complications. It is important to visit a medical center for proper diagnosis and treatment. The treatment options include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Antibiotics:</strong> Medications such as ciprofloxacin, azithromycin, or ceftriaxone are commonly prescribed to kill the bacteria.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Hydration:</strong> Replenishing lost fluids is important, especially in cases of diarrhea.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Hospitalization:</strong> Severe cases may require hospitalization for intravenous antibiotics and fluids.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        Early treatment can significantly reduce the risk of complications, such as intestinal perforation or bleeding.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Prevention and Risk Factors</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Preventing typhoid fever involves good hygiene practices and avoiding potentially contaminated food and water, especially when traveling to high-risk areas. Preventive measures include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Vaccination:</strong> Vaccines for typhoid are available and recommended for those traveling to high-risk areas.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Safe drinking water:</strong> Drink only boiled or bottled water, especially in areas where typhoid is prevalent.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Proper sanitation:</strong> Practice good hygiene, such as regular handwashing with soap and safe disposal of waste.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Food safety:</strong> Avoid eating food from street vendors and only eat food that is thoroughly cooked.</li>
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
                    Typhoid ni maambukizi ya bakteria yanayosababishwa na *Salmonella Typhi*. Inaenea kupitia chakula na maji yaliyochafuliwa na ni maarufu katika maeneo yenye usafi duni. Ikiwa haitatibiwa, inaweza kusababisha matatizo makubwa na hata kifo. Utambuzi wa mapema na matibabu ni muhimu.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Dalili na Ishara za Typhoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Dalili za Typhoid kawaida huonekana wiki moja hadi tatu baada ya kuambukizwa, na zinaweza kuanzia kali hadi nyepesi. Dalili za kawaida ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Homa Kali:</strong> Homa inayoongezeka polepole hadi kufikia 104°F (40°C).</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kichwa kuuma:</strong> Kichwa chenye maumivu makali na yasiyopungua ni dalili ya kawaida.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kuchoka na Udhaifu:</strong> Uchovu uliokithiri na udhaifu wa misuli ni wa kawaida.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Maumivu ya Tumbo:</strong> Maumivu ya tumbo, kuvimba na maumivu ya mara kwa mara ya tumbo.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kupata Kikohozi au Kuharisha:</strong> Watu wengine hupata kikohozi, wengine huharisha.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kukosa hamu ya chakula:</strong> Kupungua kwa hamu ya kula ni kawaida.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Sababu za Typhoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Typhoid inasababishwa na bakteria *Salmonella Typhi*. Maambukizi huenea wakati mtu anakula au kunywa chakula au maji yaliyochafuliwa na kinyesi cha mtu aliyeambukizwa. Ni maarufu zaidi katika maeneo yenye usafi na tabia duni za kiafya.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Utambuzi wa Typhoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Typhoid inahitaji utambuzi wa haraka ili kuzuia matatizo makubwa. Ni muhimu kutembelea kituo cha afya ikiwa unapata dalili, hasa baada ya kusafiri kwenye maeneo ambapo Typhoid ni maarufu. Utambuzi kwa kawaida hujumuisha:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Vipimo vya damu:</strong> Kipimo cha damu kinaweza kugundua uwepo wa *Salmonella Typhi*.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Vipimo vya kinyesi au mkojo:</strong> Vipimo hivi pia vinaweza kutumika kutambua bakteria.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Matibabu ya Typhoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Typhoid inaweza kutibiwa kwa kutumia dawa za antibiotiki, lakini ni muhimu kupata matibabu mapema ili kuepuka matatizo makubwa. Ni muhimu kutembelea kituo cha afya kwa ajili ya utambuzi sahihi na matibabu. Chaguo za matibabu ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Antibiotiki:</strong> Dawa kama ciprofloxacin, azithromycin, au ceftriaxone huandikwa mara nyingi kuua bakteria.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kunywa maji mengi:</strong> Kurudisha maji mwilini ni muhimu, hasa wakati wa kuharisha.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kulazwa Hospitalini:</strong> Matukio makubwa yanaweza kuhitaji kulazwa hospitalini kwa antibiotiki na maji kupitishwa kwa njia ya mishipa.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>
                        Matibabu ya mapema yanaweza kupunguza kwa kiasi kikubwa hatari ya matatizo, kama kutoboka kwa matumbo au kutokwa na damu.
                    </p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kinga na Vihatarishi</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kuwa na tabia nzuri za kiafya na kuepuka chakula na maji yaliyochafuliwa ni muhimu katika kuzuia Typhoid, hasa wakati wa kusafiri kwenye maeneo yenye hatari kubwa. Hatua za kujikinga ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Kinga:</strong> Chanjo dhidi ya Typhoid inapatikana na inashauriwa kwa wale wanaosafiri kwenda maeneo yenye hatari kubwa.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Maji safi ya kunywa:</strong> Kunywa maji yaliyochemshwa au yaliyofungwa kwenye chupa, hasa kwenye maeneo ambako Typhoid ni maarufu.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Usafi:</strong> Osha mikono mara kwa mara kwa sabuni na hakikisha taka zinatupwa salama.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Chakula salama:</strong> Epuka kula chakula kutoka kwa wauza mitaani na hakikisha chakula kimepikwa vizuri.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>
        </SpeakPage>
    )
}
