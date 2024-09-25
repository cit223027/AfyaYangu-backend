import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {CameraIcon, PersonStandingIcon} from "lucide-react";
import {PoseLandmarker, FilesetResolver, DrawingUtils} from "@mediapipe/tasks-vision"

type PoseWorldLandmark = {
    x: number
    y: number
    z: number
    visibility: number
}

type PoseAnalyzer = {
    initialize: () => void
    isReadyForAnalysis: boolean
    analyzePose: (poseWorldLandmarks: PoseWorldLandmark[]) => void
}

type PoseEstimationProps = {
    id?: string
    className?: string
    numPoses?: number
    minPoseDetectionConfidence?: number
    minPosePresenceConfidence?: number
    minTrackingConfidence?: number
    outputSegmentationMasks?: boolean
    poseAnalyzers?: PoseAnalyzer[];
}

export default function PoseEstimation({
    id,
    className,
    numPoses = 1,
    minPoseDetectionConfidence = 0.5,
    minPosePresenceConfidence = 0.5,
    minTrackingConfidence = 0.5,
    outputSegmentationMasks = false,
    poseAnalyzers = []
}: PoseEstimationProps) {

    const [isPermissionGranted, setIsPermissionGranted] = useState(false)
    const [isWebcamAvailable, setIsWebcamAvailable] = useState(false)
    const [canStartPoseEstimation, setCanStartPoseEstimation] = useState(false)
    const [isPoseLandmarkerReady, setIsPoseLandmarkerReady] = useState(false);
    const [poseLandmarker, setPoseLandmarker] = useState<PoseLandmarker | null>(null);

    const videoRef = useRef<HTMLVideoElement | undefined>(undefined)
    const canvasRef = useRef<HTMLCanvasElement | undefined>(undefined)

    useEffect(() => {

        const setUpPoseLandmarker = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
            );

            const poseLandmarkerInstance = await PoseLandmarker.createFromOptions(
                vision,
                {
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
                }
            );

            setPoseLandmarker(poseLandmarkerInstance);
            setIsPoseLandmarkerReady(true);
        }

        // Check for webcam availability and permissions
        const checkWebcamAvailability = async () => {
            const hasWebcam = !!navigator.mediaDevices?.getUserMedia;
            setIsWebcamAvailable(hasWebcam);
            if (hasWebcam) {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                if (stream) {
                    setIsPermissionGranted(true);
                }
            }
        };

        setUpPoseLandmarker();
        checkWebcamAvailability();
    }, []);

    useEffect(() => {
        if (canStartPoseEstimation && poseLandmarker && videoRef.current) {
            const video = videoRef.current;

            const startWebcamStream = async () => {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { width: 640, height: 480 },
                });
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                    requestAnimationFrame(predictPose);
                };
            };

            const predictPose = async () => {
                if (!poseLandmarker || !videoRef.current || !canvasRef.current) return;
                const video = videoRef.current;
                const canvas = canvasRef.current;
                const canvasCtx = canvas.getContext("2d");
                const drawingUtils = new DrawingUtils(canvasCtx!!);

                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                poseLandmarker.detectForVideo(video, performance.now(), async (result) => {
                    canvasCtx?.clearRect(0, 0, canvas.width, canvas.height);

                    if (result.landmarks.length > 0) {
                        const landmarks = result.landmarks[0];
                        drawingUtils.drawLandmarks(landmarks);
                        drawingUtils.drawConnectors(
                            landmarks,
                            PoseLandmarker.POSE_CONNECTIONS
                        );

                        // Run analyzers only when they are ready
                        for (const analyzer of poseAnalyzers) {
                            if (analyzer.isReadyForAnalysis) {
                                await analyzer.analyzePose(landmarks);
                            }
                        }
                    }
                });

                requestAnimationFrame(predictPose);
            };

            startWebcamStream();
        }
    }, [canStartPoseEstimation, isPoseLandmarkerReady, poseLandmarker, poseAnalyzers]);

    const startPoseEstimation = () => {
        poseAnalyzers.forEach((analyzer) => analyzer.initialize());
        setCanStartPoseEstimation(true);
    };

    if (!isPermissionGranted) return <AskCameraPermission />;
    if (!isWebcamAvailable) return <WebcamNotAvailable />;
    if (!isPoseLandmarkerReady) return <LoadingPoseEstimation />;
    if (!canStartPoseEstimation) return <AskStartPoseEstimation setCanStartPoseEstimation={setCanStartPoseEstimation} />;

    return (
        <div id={id} className={`relative ${className}`}>
            <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );

}

function AskCameraPermission() {
    return (
        <div className="flex justify-center items-center h-full">
            <p>Please grant access to the webcam to start pose estimation.</p>
        </div>
    );
}

function WebcamNotAvailable() {
    return (
        <div className="flex justify-center items-center h-full">
            <p>Webcam is not available on your device.</p>
        </div>
    );
}

function AskStartPoseEstimation(
    {
        setCanStartPoseEstimation
    }:{
        setCanStartPoseEstimation: (bool: boolean) => void
    }
) {
    return (
        <div className="flex justify-center items-center h-full">
            <button
                className="bg-blue-500 text-white p-4 rounded"
                onClick={() => setCanStartPoseEstimation(true)}
            >
                Start Pose Estimation
            </button>
        </div>
    );
}

function LoadingPoseEstimation() {
    return (
        <div className="flex justify-center items-center h-full">
            <p>Loading pose estimation...</p>
        </div>
    );
}

function ErrorPoseEstimation() {
    return (
        <div className="flex justify-center items-center h-full">
            <p>Error: Unable to perform pose estimation.</p>
        </div>
    );
}
