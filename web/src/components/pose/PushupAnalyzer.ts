// Import TensorFlow.js library
import * as tf from '@tensorflow/tfjs';
import {Pose, PoseAnalyzer} from "@/components/pose/PoseEstimation.tsx";

export default class PushupAnalyzer {

    static createPushUpAnalyzer(
        onAnalysis: (isTrueLandmark: boolean) => void
    ): PoseAnalyzer {
        let model: tf.LayersModel | null = null;
        let isReadyForAnalysis = false;
        let wasPreviouslyTrue = false;
        let canProcessTrue = true; // New flag to control delay

        const initialize = async (): Promise<void> => {
            try {
                // Load the model (ensure the correct path to your model)
                model = await tf.loadLayersModel('/models/pushup_model/pose_model.json');
                isReadyForAnalysis = true;
                console.log('Model loaded successfully');
            } catch (error) {
                console.error('Error loading model:', error);
                isReadyForAnalysis = false;
            }
        };

        const analyzePose = (poses: Pose[]): void => {
            if (!model || poses.length !== 1) {
                return;
            }

            // Assuming poses contain a list of Pose objects, extract landmarks
            const inputArray: number[] = poses[0].landmarks.flatMap((landmark) => [
                landmark.x,
                landmark.y,
                landmark.z,
                landmark.visibility,
            ]);

            // Convert to tensor
            const inputTensor = tf.tensor([inputArray]);

            // Run prediction
            const prediction = model.predict(inputTensor) as tf.Tensor;
            const predictionResult = prediction.dataSync(); // Get the result

            // Assuming the model returns a binary classification (0 or 1)
            const isLandmarkTrue = predictionResult[0] > 0.5; // Threshold at 0.5 for binary classification

            if (isLandmarkTrue) {
                if (wasPreviouslyTrue || !canProcessTrue) {
                    onAnalysis(false); // Ignore subsequent 'true' within 2 seconds
                } else {
                    onAnalysis(true);
                    canProcessTrue = false; // Block further 'true' values for 500ms
                    setTimeout(() => {
                        canProcessTrue = true; // Allow another 'true' after 500ms
                    }, 500);
                }
            } else {
                onAnalysis(false);
            }

            wasPreviouslyTrue = isLandmarkTrue;
        };

        return {
            initialize: initialize,
            checkIfReadyForAnalysis: () => isReadyForAnalysis,
            analyzePose: analyzePose
        };
    }

}

