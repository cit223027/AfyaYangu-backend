import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {PoseLandmarker, FilesetResolver, DrawingUtils, NormalizedLandmark} from "@mediapipe/tasks-vision"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export type Pose = {
    landmarks: PoseWorldLandmark[]
}

type PoseWorldLandmark = {
    x: number;
    y: number;
    z: number;
    visibility: number;
};

export type PoseAnalyzer = {
    initialize: () => void;
    isReadyForAnalysis: boolean;
    analyzePose: (poses: Pose[]) => void;
};

type PoseEstimationProps = {
    id?: string;
    className?: string;
    numPoses?: number;
    minPoseDetectionConfidence?: number;
    minPosePresenceConfidence?: number;
    minTrackingConfidence?: number;
    outputSegmentationMasks?: boolean;
    poseAnalyzers?: PoseAnalyzer[];
};

export default function PoseEstimation({
    id,
    className,
    numPoses = 1,
    minPoseDetectionConfidence = 0.65,
    minPosePresenceConfidence = 0.65,
    minTrackingConfidence = 0.65,
    outputSegmentationMasks = false,
    poseAnalyzers = [],
}: PoseEstimationProps) {
    const [hasAvailableCamera, setHasAvailableCamera] = useState(false);
    const [isCameraPermissionRequested, setIsCameraPermissionRequested] = useState(false);
    const [isCameraPermissionGranted, setIsCameraPermissionGranted] = useState(false);
    const [canStartPoseEstimation, setCanStartPoseEstimation] = useState(false);
    const [isLoadingPoseEstimation, setIsLoadingPoseEstimation] = useState(false);
    const [errorLoadingPoseEstimation, setErrorLoadingPoseEstimation] = useState<string | null>(null);

    // TODO: Remove
    const [currentPoseLandmarks, setCurrentPoseLandmarks] = useState<Pose[]>([])
    const [truePoseLandmarks, setTruePoseLandmarks] = useState<Pose[]>([])
    const [falsePoseLandmarks, setFalsePoseLandmarks] = useState<Pose[]>([])

    const addTruePoseLandmarks = () => {
        if (currentPoseLandmarks.length === 0) return;

        if (currentPoseLandmarks.length === 1) {
            truePoseLandmarks.push(currentPoseLandmarks[0]);
        }else {
            console.log("More than one landmark!!!")
        }

        setTruePoseLandmarks(truePoseLandmarks);
    }

    const addFalsePoseLandmarks = () => {
        if (currentPoseLandmarks.length === 0) return;

        if (currentPoseLandmarks.length === 1) {
            console.log("Adding false landmark")
            console.log(falsePoseLandmarks)
            falsePoseLandmarks.push(currentPoseLandmarks[0]);
        } else {
            console.log("More than one landmark!!!")
        }

        setFalsePoseLandmarks(falsePoseLandmarks);
    }

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let poseLandmarkerInstance: any = null;

    const initializePoseEstimator = async () => {
        try {
            setIsLoadingPoseEstimation(true);

            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
            );

            poseLandmarkerInstance = await PoseLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
                    delegate: "GPU",
                },
                runningMode: "VIDEO",
                numPoses,
                minPoseDetectionConfidence,
                minPosePresenceConfidence,
                minTrackingConfidence,
                outputSegmentationMasks,
            });

            // initialize analyzers
            poseAnalyzers.forEach((poseAnalyzer) => {
                poseAnalyzer.initialize()
            })

            setIsLoadingPoseEstimation(false);
            startPoseEstimation(); // Start estimation once the model is loaded
        } catch (e) {
            setIsLoadingPoseEstimation(false);
            setErrorLoadingPoseEstimation("Error while loading Pose Estimation Model");
            console.error("PoseEstimation: error while loading pose estimation", e);
        }
    };

    const startVideoStream = async () => {
        if (videoRef.current) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                videoRef.current.play(); // Ensures the video stream plays
            } catch (error) {
                console.error("Error accessing webcam", error);
            }
        }
    };

    const startPoseEstimation = () => {
        const analyzePose = () => {
            if (videoRef.current && videoRef.current.readyState >= 2) {
                const result = poseLandmarkerInstance.detectForVideo(videoRef.current, performance.now());
                if (result.landmarks) {
                    drawEstimatedPose(result.landmarks);
                    analyzeEstimatedPose(result.landmarks);
                }
            }
            requestAnimationFrame(analyzePose);
        };

        analyzePose();
    };

    const analyzeEstimatedPose = (poses: NormalizedLandmark[][]) => {
        poseAnalyzers.forEach((analyzer) => {
            if (analyzer.isReadyForAnalysis) {
                const newPose: Pose[] = poses.map((pose) => {
                    return {
                        landmarks: pose.map((landmark) => {
                            return {
                                x: landmark.x,
                                y: landmark.y,
                                z: landmark.z,
                                visibility: landmark.visibility,
                            }
                        })
                    };
                });
                analyzer.analyzePose(newPose);
            }
        });

        setCurrentPoseLandmarks(poses.map((pose) => {
            return {
                landmarks: pose.map((landmark) => {
                    return {
                        x: landmark.x,
                        y: landmark.y,
                        z: landmark.z,
                        visibility: landmark.visibility,
                    }
                })
        };
        }))
    };

    const printCSVFile = () => {
        // Get current date and time for the file name
        const now = new Date();
        const month = now.getMonth() + 1; // Months are zero-indexed
        const date = now.getDate();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const fileName = `pushups-${month}-${date}-${hour}-${minute}.csv`;

        // Combine true and false landmarks with a boolean indicating if it's a true landmark
        const allLandmarks = [
            ...truePoseLandmarks.map(pose => ({ ...pose, isTrueLandmark: true })),
            ...falsePoseLandmarks.map(pose => ({ ...pose, isTrueLandmark: false })),
        ];

        // Create CSV header for 33 landmarks
        let csvHeader = "";
        for (let i = 1; i <= 33; i++) {
            csvHeader += `x${i},y${i},z${i},visibility${i},`;
        }
        csvHeader += "isTrueLandmark\n"; // Add the final header column for the boolean

        // Create CSV content
        let csvContent = csvHeader;
        allLandmarks.forEach(pose => {
            // Collect all the values for the 33 landmarks
            const { landmarks } = pose;
            const landmarkValues = landmarks.map(l => `${l.x},${l.y},${l.z},${l.visibility}`).join(",");

            // Add the true/false for whether it's a true pose
            csvContent += `${landmarkValues},${pose.isTrueLandmark}\n`;
        });

        // Create a Blob and trigger download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const drawEstimatedPose = (landmarks: NormalizedLandmark[][]) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.save(); // Save the current state of the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawing

                // Assuming you have PoseLandmarker.POSE_CONNECTIONS and DrawingUtils available
                const drawingUtils = new DrawingUtils(ctx);

                // Iterate through each pose's landmarks and draw them
                for(const landmark of landmarks) {
                    drawingUtils.drawLandmarks(landmark, {
                        radius: (data) => DrawingUtils.lerp(data.from!.z, -0.15, 0.1, 5, 1),
                    });
                    drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
                }

                ctx.restore(); // Restore the canvas to its original state
            }
        }
    };

    const checkDeviceHasAvailableCamera = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            setHasAvailableCamera(devices.some((device) => device.kind === "videoinput"));
        } catch (e) {
            setHasAvailableCamera(false);
        }
    };

    const requestCameraPermission = async () => {
        setIsCameraPermissionRequested(true);
        try {
            await startVideoStream();
            setIsCameraPermissionGranted(true);
        } catch (e) {
            setIsCameraPermissionGranted(false);
        }
    };

    const handleStartEstimation = () => {
        setCanStartPoseEstimation(true);
        initializePoseEstimator(); // Only initialize the model after the user accepts
    };

    useEffect(() => {
        checkDeviceHasAvailableCamera();

        return () => {
            if (poseLandmarkerInstance) {
                poseLandmarkerInstance.close();
            }
        };
    }, []);

    return (
        <div id={id} className={`relative rounded-lg border bg-black w-[400px] h-[350px] lg:w-[800px] lg:h-[700px] ${className}`}>
            {/* Grayed background overlay */}
            <div className="absolute inset-0 bg-gray-800 opacity-75 w-[400px] h-[300px] lg:w-[800px] lg:h-[600px] z-10"></div>

            <div className="absolute bottom-0 w-full z-12">
                <div className="w-full flex flex-row justify-evenly">
                    <Button className="" variant="default" onClick={() => addTruePoseLandmarks()}>
                        Save as True
                    </Button>

                    <Button className="" variant="secondary" onClick={() => addFalsePoseLandmarks()}>
                        Save as False
                    </Button>
                </div>
                <div className="w-full flex flex-row justify-center">
                    <Button className="" variant="default" onClick={() => printCSVFile()}>
                        Print File
                    </Button>
                </div>
            </div>

            {/* Video and Canvas elements always present in the DOM */}
            <video ref={videoRef} className="absolute top-0 left-0 z-0 w-[400px] h-[300px] lg:w-[800px] lg:h-[600px]" autoPlay playsInline width="800px" height="600px" />
            <canvas ref={canvasRef} className="absolute top-0 left-0 z-0 w-[400px] h-[300px] lg:w-[800px] lg:h-[600px]" width="800px" height="600px"/>


            {/* Conditional rendering for prompts, always overlaying */}
            {!isCameraPermissionGranted && !isCameraPermissionRequested ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <AskCameraPermission requestCameraPermission={requestCameraPermission}/>
                </div>
            ) : !hasAvailableCamera ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <WebcamNotAvailable/>
                </div>
            ) : !isCameraPermissionGranted ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <CameraPermissionDenied/>
                </div>
            ) : isLoadingPoseEstimation ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <LoadingPoseEstimation/>
                </div>
            ) : errorLoadingPoseEstimation ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <ErrorLoadingPoseEstimation error={errorLoadingPoseEstimation}/>
                </div>
            ) : !canStartPoseEstimation ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <AskStartPoseEstimation setCanStartPoseEstimation={handleStartEstimation}/>
                </div>
            ) : null}
        </div>
    );
}

function CameraPermissionDenied() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Camera Permission Denied</CardTitle>
                <CardDescription>You have denied camera access. Please enable it to use pose
                    estimation.</CardDescription>
            </CardHeader>
        </Card>
    );
}

function WebcamNotAvailable() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>No Available Webcam</CardTitle>
                <CardDescription>Your device does not have an available webcam</CardDescription>
            </CardHeader>
        </Card>
    );
}

function AskCameraPermission({requestCameraPermission}: { requestCameraPermission: () => void }) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Permission Needed</CardTitle>
                <CardDescription>You need to grant permission for pose estimation to work</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button onClick={requestCameraPermission}>Grant Permission</Button>
            </CardFooter>
        </Card>
    );
}

function AskStartPoseEstimation({ setCanStartPoseEstimation }: { setCanStartPoseEstimation: (bool: boolean) => void }) {
    return (
        <Card className="w-fit px-6 my-auto mx-auto">
            <CardHeader>
                <CardTitle>Ready to Start Pose Estimation?</CardTitle>
                <CardDescription>Click the button below to begin pose estimation.</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button onClick={() => setCanStartPoseEstimation(true)}>Start Pose Estimation</Button>
            </CardFooter>
        </Card>
    );
}

function LoadingPoseEstimation() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Loading</CardTitle>
                <CardDescription>Loading Pose Estimation...</CardDescription>
            </CardHeader>
        </Card>
    );
}

function ErrorLoadingPoseEstimation({ error }: { error: string }) {
    return (
        <Card className="w-full h-full flex items-center justify-center">
            <CardHeader>
                <CardTitle>Error</CardTitle>
                <CardDescription>{error}</CardDescription>
            </CardHeader>
        </Card>
    );
}