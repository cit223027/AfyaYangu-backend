import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";

export default function KnowledgeMentalHealthAutismPage() {

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
                    Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interactions. It presents differently in each individual, and the severity of symptoms can vary widely. Understanding autism and recognizing its early signs can lead to better support and improved outcomes for individuals on the spectrum.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Identifying Autism in Children</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Early identification of autism is crucial for ensuring that children receive the right support. Symptoms often appear in early childhood, typically by the age of two or three. While autism manifests differently in every child, some common signs include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Delayed language skills:</strong> A child may struggle to develop speech or may not speak at all by a certain age.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Lack of eye contact:</strong> Children with autism may avoid direct eye contact or have difficulty engaging with others in a social setting.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Repetitive behaviors:</strong> These can include hand-flapping, rocking, or repeating the same actions over and over again.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Difficulty with social interactions:</strong> Some children may have trouble understanding social cues or relating to peers, leading to challenges in forming relationships.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Sensitivity to sensory input:</strong> Overreaction or underreaction to sounds, lights, textures, or other sensory stimuli is common in children with autism.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Causes of Autism</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        The exact causes of autism are not yet fully understood, but research indicates a combination of genetic and environmental factors. Some possible contributing factors include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Genetics:</strong> Certain gene mutations or family history of autism may increase the risk of developing the condition.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Environmental factors:</strong> Prenatal and early postnatal exposures, such as certain infections or toxins, may influence brain development and contribute to autism.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Complications during pregnancy or birth:</strong> Premature birth, low birth weight, or difficulties during delivery may also be linked to a higher risk of autism.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Dealing with Autism</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Managing autism involves creating individualized strategies that help individuals navigate daily life. The approach can vary depending on the person's strengths, challenges, and specific needs. Some effective strategies include:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Behavioral therapy:</strong> Applied Behavioral Analysis (ABA) and other interventions can help improve communication, social skills, and behavior management.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Speech therapy:</strong> For children who struggle with language development, speech therapy can enhance their ability to communicate effectively.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Occupational therapy:</strong> This helps individuals develop skills for daily activities, such as dressing, eating, and interacting with their environment.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Sensory integration therapy:</strong> This approach focuses on helping individuals with autism manage sensory overload or under-responsiveness to their surroundings.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Helping Someone with Autism</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Supporting someone with autism requires understanding and patience. Here are some ways to offer help and make their life easier:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Provide structure and routine:</strong> Consistent routines help individuals with autism feel secure and reduce anxiety.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Communicate clearly:</strong> Use simple language and visual supports to aid understanding, especially for non-verbal individuals.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Encourage their interests:</strong> Many people with autism have specific interests or hobbies. Encouraging these can be a great way to build confidence and joy.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Seek professional help:</strong> Encourage the individual or their caregivers to connect with specialists for additional support or therapy as needed.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Preventing and Managing Challenges</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        While autism cannot be prevented, some strategies can help manage its challenges. Implementing certain practices can create a more supportive environment:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Focus on early intervention:</strong> Early diagnosis and therapy can significantly improve outcomes for children with autism.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Promote a supportive community:</strong> Building a network of supportive family members, friends, and professionals can help create a stable and nurturing environment.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Advocate for accessibility:</strong> Ensure that the individual's home, school, and social environments are inclusive and designed to meet their needs.</li>
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
                    Ugonjwa wa Usonji (Autism Spectrum Disorder (ASD)) ni hali ya ukuaji inayohusisha mawasiliano, tabia, na mwingiliano wa kijamii. Huwa inajitokeza kwa kila mtu kwa njia tofauti, na ukali wa dalili unaweza kutofautiana sana. Kuelewa autism na kutambua dalili zake za mapema kunaweza kusaidia kuboresha msaada na matokeo bora kwa watu walio kwenye mfumo wa autism.
                </p>
            </SpeakParagraph>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kutambua Usonji kwa Watoto</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kutambua usonji mapema ni muhimu ili kuhakikisha watoto wanapata msaada unaofaa. Dalili mara nyingi huonekana katika utoto wa mapema, kawaida kufikia umri wa miaka miwili au mitatu. Ingawa autism hujitokeza tofauti kwa kila mtoto, baadhi ya ishara za kawaida ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Kuchelewa kwa ujuzi wa lugha:</strong> Mtoto anaweza kukosa kuongea au kuchelewa kuanza kuzungumza.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kukosa kuangalia moja kwa moja machoni:</strong> Watoto wenye autism mara nyingi huepuka kuangalia moja kwa moja machoni au kuwa na ugumu wa kujihusisha na wengine kijamii.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Tabia za kurudia:</strong> Hii inaweza kujumuisha kupunga mikono, kuzunguka, au kurudia vitendo sawa mara kwa mara.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Ugumu wa mwingiliano wa kijamii:</strong> Watoto wengine wanaweza kuwa na ugumu wa kuelewa dalili za kijamii au kujihusisha na wenzao, jambo linalosababisha changamoto katika kujenga mahusiano.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kuzidi au kushindwa kujibu msisimko wa hisia:</strong> Majibu ya kupita kiasi au yasiyotosheleza kwa sauti, mwanga, miundo au vichocheo vingine vya hisia ni jambo la kawaida kwa watoto wenye autism.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Sababu za Usonji</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Sababu halisi za usonji bado hazijaeleweka kikamilifu, lakini utafiti unaonyesha mchanganyiko wa sababu za kijeni na mazingira. Baadhi ya sababu zinazoweza kuchangia ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Jeni:</strong> Mabadiliko ya jeni fulani au historia ya kifamilia ya autism inaweza kuongeza hatari ya kuendeleza hali hii.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Sababu za mazingira:</strong> Athari za wakati wa ujauzito na baada ya kuzaliwa, kama maambukizo au sumu fulani, zinaweza kuathiri maendeleo ya ubongo na kuchangia kwenye autism.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Matatizo wakati wa ujauzito au kuzaliwa:</strong> Kuzaliwa kabla ya wakati, uzito wa chini wakati wa kuzaliwa, au matatizo wakati wa kujifungua pia yanaweza kuhusishwa na hatari kubwa ya autism.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kushughulika na Usonji</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kushughulika na usonji kunahusisha kuunda mikakati ya kibinafsi ambayo inawasaidia watu kuhimili maisha ya kila siku. Mbinu zinaweza kutofautiana kulingana na nguvu, changamoto, na mahitaji maalum ya mtu. Baadhi ya mikakati ya ufanisi ni pamoja na:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Tiba ya tabia:</strong> Uchambuzi wa Tabia Unaotumika (ABA) na njia zingine za matibabu zinaweza kusaidia kuboresha mawasiliano, ujuzi wa kijamii, na usimamizi wa tabia.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Tiba ya hotuba:</strong> Kwa watoto ambao wanakabiliwa na shida za lugha, tiba ya hotuba inaweza kusaidia kuboresha uwezo wao wa kuwasiliana kwa ufanisi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Tiba ya kazi:</strong> Hii inasaidia watu kukuza ujuzi wa shughuli za kila siku, kama vile kujivika, kula, na kuingiliana na mazingira yao.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Tiba ya ushirikiano wa hisia:</strong> Mbinu hii inalenga kusaidia watu wenye autism kushughulikia mzigo wa hisia au kutopokea msisimko wa mazingira yao.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kumsaidia Mtu Mwenye Autism</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Kumsaidia mtu mwenye autism kunahitaji uelewa na uvumilivu. Hapa kuna njia za kutoa msaada na kurahisisha maisha yao:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Toa muundo na ratiba:</strong> Ratiba thabiti husaidia watu wenye autism kujisikia salama na kupunguza wasiwasi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Wasiliana kwa uwazi:</strong> Tumia lugha rahisi na msaada wa kuona ili kusaidia uelewa, hasa kwa watu wasio na maneno mengi.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Himiza maslahi yao:</strong> Watu wengi wenye autism wana maslahi maalum au burudani. Kuhimiza haya kunaweza kuwa njia nzuri ya kujenga ujasiri na furaha.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Tafuta msaada wa kitaalamu:</strong> Himiza mtu au walezi wake kuungana na wataalamu kwa msaada zaidi au tiba inapohitajika.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Kuzuia na Kusimamia Changamoto</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>
                        Ingawa autism haiwezi kuzuiliwa, mikakati fulani inaweza kusaidia kudhibiti changamoto zake. Kutekeleza mazoea fulani kunaweza kuunda mazingira ya kusaidia zaidi:
                    </p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li>• <strong>Lenga uingiliaji mapema:</strong> Utambuzi wa mapema na tiba vinaweza kuboresha matokeo kwa watoto wenye autism.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kukuza jamii inayounga mkono:</strong> Kujenga mtandao wa familia, marafiki, na wataalamu wanaosaidia kunaweza kusaidia kuunda mazingira thabiti na yenye kuhimili.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li>• <strong>Kuhimiza upatikanaji wa rasilimali:</strong> Hakikisha kuwa mazingira ya nyumbani, shule, na kijamii ya mtu yanajumuisha na yameundwa kukidhi mahitaji yao.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>
        </SpeakPage>
    )
}
