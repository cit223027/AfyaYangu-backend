import ArticleComponent from "@/components/article/ArticleComponent.tsx";
import SpeakPage from "@/components/speech/SpeakPage.tsx";
import SpeakParagraph from "@/components/speech/SpeakParagraph.tsx";
import SpeakDiv from "@/components/speech/SpeakDiv.tsx";
import SpeakDivHeading from "@/components/speech/SpeakDivHeading.tsx";
import PoseEstimation from "@/components/pose/PoseEstimation.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";

export default function ExercisePushUpPage() {
    return (
        <ArticleComponent
            englishComponent={(<EnglishArticle />)}
        />
    )
}

function EnglishArticle() {
    return (
        <SpeakPage>
            <SpeakParagraph>
                <p>Push-ups are a classic bodyweight exercise that primarily targets the muscles in your chest, shoulders, and triceps. They are effective for building strength and endurance in the upper body, as well as improving core stability.</p>
            </SpeakParagraph>

            <div className="w-full my-4">
                <div className="mx-auto w-[800px]">
                    <Tabs defaultValue="animation" className="">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="animation">Animation</TabsTrigger>
                            <TabsTrigger value="vision">Pose Detection</TabsTrigger>
                        </TabsList>
                        <TabsContent value="animation">
                            <div className="w-full">
                                <img
                                    src="/images/knowledge/exercise/pushups.gif"
                                    alt={"Push up exercises"}
                                    className="mx-auto"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="vision">
                            <div className={"w-full"}>
                                <div className="mx-auto">
                                    <PoseEstimation />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Steps to Perform Push-Ups</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Follow these steps to perform push-ups correctly:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Start Position:</strong> Begin in a plank position with your hands shoulder-width apart and your feet together. Your body should form a straight line from head to heels.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Lowering Phase:</strong> Bend your elbows to lower your body towards the ground. Keep your elbows close to your body, and lower yourself until your chest nearly touches the floor.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Pushing Phase:</strong> Push through your palms to raise your body back to the starting position. Keep your core engaged throughout the movement.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Repeat:</strong> Perform the desired number of repetitions, typically between 8 to 15 for beginners, or aim for 20 or more as you progress.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>For optimal results, focus on maintaining proper form and control during each repetition.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Benefits of Push-Ups</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>Push-ups offer numerous benefits, including:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Strengthens Upper Body Muscles:</strong> Primarily targets the pectoralis major (chest), deltoids (shoulders), and triceps.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Enhances Core Stability:</strong> Engages the abdominal muscles, improving overall core strength and stability.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Improves Posture:</strong> Strengthening upper body muscles contributes to better posture by reinforcing the back and shoulder muscles.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Increases Functional Strength:</strong> Push-ups are a functional exercise that enhances strength for everyday activities.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Boosts Cardiovascular Health:</strong> When performed at a higher intensity or in a circuit, push-ups can provide cardiovascular benefits.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>Incorporating push-ups into your fitness routine can lead to significant strength gains and overall health improvements.</p>
                </SpeakParagraph>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Variations of Push-Ups</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>To target different muscle groups or increase difficulty, consider these push-up variations:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Wide Grip Push-Ups:</strong> Place your hands wider than shoulder-width to emphasize the chest muscles more.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Diamond Push-Ups:</strong> Position your hands close together to form a diamond shape, targeting the triceps and inner chest.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Decline Push-Ups:</strong> Elevate your feet on a surface to increase difficulty and target the upper chest and shoulders.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Incline Push-Ups:</strong> Place your hands on an elevated surface to reduce difficulty, making it ideal for beginners.</li>
                    </SpeakParagraph>
                </ul>
            </SpeakDiv>

            <SpeakDiv>
                <SpeakDivHeading>
                    <h3>Common Mistakes to Avoid</h3>
                </SpeakDivHeading>
                <SpeakParagraph>
                    <p>To ensure proper technique and prevent injury, avoid these common push-up mistakes:</p>
                </SpeakParagraph>
                <ul className="ms-4 my-2">
                    <SpeakParagraph>
                        <li><strong>- Sagging Hips:</strong> Maintain a straight line from head to heels to prevent excessive strain on your lower back.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Flared Elbows:</strong> Keep your elbows close to your body rather than allowing them to flare out to prevent shoulder strain.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Incomplete Range of Motion:</strong> Lower your body fully to engage the muscles effectively.</li>
                    </SpeakParagraph>
                    <SpeakParagraph>
                        <li><strong>- Holding Your Breath:</strong> Breathe steadily throughout the movement; inhale while lowering and exhale while pushing up.</li>
                    </SpeakParagraph>
                </ul>
                <SpeakParagraph>
                    <p>By avoiding these mistakes, you can maximize the benefits of push-ups while minimizing the risk of injury.</p>
                </SpeakParagraph>
            </SpeakDiv>
        </SpeakPage>
    )
}
