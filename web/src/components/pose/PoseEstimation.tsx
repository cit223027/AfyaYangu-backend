import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {PoseLandmarker, FilesetResolver, DrawingUtils, NormalizedLandmark} from "@mediapipe/tasks-vision"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

type PoseWorldLandmark = {
    x: number;
    y: number;
    z: number;
    visibility: number;
};

type PoseAnalyzer = {
    initialize: () => void;
    isReadyForAnalysis: boolean;
    analyzePose: (poseWorldLandmarks: PoseWorldLandmark[]) => void;
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
                                           minPoseDetectionConfidence = 0.5,
                                           minPosePresenceConfidence = 0.5,
                                           minTrackingConfidence = 0.5,
                                           outputSegmentationMasks = false,
                                           poseAnalyzers = [],
                                       }: PoseEstimationProps) {
    const [hasAvailableCamera, setHasAvailableCamera] = useState(false);
    const [isCameraPermissionRequested, setIsCameraPermissionRequested] = useState(false);
    const [isCameraPermissionGranted, setIsCameraPermissionGranted] = useState(false);
    const [canStartPoseEstimation, setCanStartPoseEstimation] = useState(false);
    const [isLoadingPoseEstimation, setIsLoadingPoseEstimation] = useState(false);
    const [errorLoadingPoseEstimation, setErrorLoadingPoseEstimation] = useState<string | null>(null);

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

    const analyzeEstimatedPose = (poses: NormalizedLandmark[]) => {
        poseAnalyzers.forEach((analyzer) => {
            if (analyzer.isReadyForAnalysis) {
                const newPoses: PoseWorldLandmark[] = poses.map((pose) => {
                    return {
                        x: pose.x,
                        y: pose.y,
                        z: pose.z,
                        visibility: pose.visibility,
                    };
                });
                analyzer.analyzePose(newPoses);
            }
        });
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
        <div id={id} className={`relative rounded-lg border bg-black w-[800px] h-[600px] ${className}`}>
            {/* Grayed background overlay */}
            <div className="absolute inset-0 bg-gray-800 opacity-75 z-10"></div>

            {/* Video and Canvas elements always present in the DOM */}
            <video ref={videoRef} className="absolute top-0 left-0 z-0" autoPlay playsInline width="800" height="600" />
            <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" width="800" height="600" />

            {/* Conditional rendering for prompts, always overlaying */}
            {!isCameraPermissionGranted && !isCameraPermissionRequested ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <AskCameraPermission requestCameraPermission={requestCameraPermission} />
                </div>
            ) : !hasAvailableCamera ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <WebcamNotAvailable />
                </div>
            ) : !isCameraPermissionGranted ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <CameraPermissionDenied />
                </div>
            ) : isLoadingPoseEstimation ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <LoadingPoseEstimation />
                </div>
            ) : errorLoadingPoseEstimation ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <ErrorLoadingPoseEstimation error={errorLoadingPoseEstimation} />
                </div>
            ) : !canStartPoseEstimation ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <AskStartPoseEstimation setCanStartPoseEstimation={handleStartEstimation} />
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
                <CardDescription>You have denied camera access. Please enable it to use pose estimation.</CardDescription>
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

function AskCameraPermission({ requestCameraPermission }: { requestCameraPermission: () => void }) {
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