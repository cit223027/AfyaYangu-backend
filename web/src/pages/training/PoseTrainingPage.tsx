import { PoseWorldLandmark } from "@/components/pose/PoseEstimation.tsx";
import {useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import * as tf from '@tensorflow/tfjs';
import Papa from 'papaparse';

type SavedPose = {
    landmarks: PoseWorldLandmark[];
    isTrueLandmark: boolean;
};

enum TrainingProgress {
    Ready = "Ready",
    LoadingData = "Loading Data",
    PreparingData = "Preparing Data",
    Training = "Training",
    Completed = "Completed",
    Failed = "Failed",
}

export default function PoseTrainingPage() {
    const [csvData, setCSVData] = useState<SavedPose[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<TrainingProgress>(TrainingProgress.Ready);

    // Load CSV data from the uploaded file
    const loadCSVData = (file: File) => {
        return new Promise<SavedPose[]>((resolve, reject) => {
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    const data: SavedPose[] = results.data.map((row: any) => {
                        const landmarks: PoseWorldLandmark[] = [];
                        for (let i = 1; i <= 33; i++) {
                            landmarks.push({
                                x: parseFloat(row[`x${i}`]),
                                y: parseFloat(row[`y${i}`]),
                                z: parseFloat(row[`z${i}`]),
                                visibility: parseFloat(row[`visibility${i}`]),
                            });
                        }
                        return {
                            landmarks,
                            isTrueLandmark: row['isTrueLandmark'] === 'true',
                        };
                    });
                    resolve(data);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    };

    // Build the model architecture
    const buildModel = () => {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 128, inputShape: [132], activation: 'relu' }));
        model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

        model.compile({
            optimizer: 'adam',
            loss: 'binaryCrossentropy',
            metrics: ['accuracy'],
        });

        return model;
    };

    // Prepare the data for training
    const prepareData = (data: SavedPose[]) => {
        const xs = data.map(pose => pose.landmarks.flatMap(l => [l.x, l.y, l.z, l.visibility]));
        const ys = data.map(pose => (pose.isTrueLandmark ? 1 : 0));

        const xsTensor = tf.tensor2d(xs);
        const ysTensor = tf.tensor2d(ys, [ys.length, 1]);

        return { xsTensor, ysTensor };
    };

    // Train and download the model
    const trainAndDownloadModel = async () => {
        try {
            setLoading(true);
            setProgress(TrainingProgress.LoadingData);

            const data = csvData; // Use loaded CSV data
            if (data.length === 0) {
                alert("No data available for training!");
                setLoading(false);
                setProgress(TrainingProgress.Failed);
                return;
            }

            setProgress(TrainingProgress.PreparingData);
            const { xsTensor, ysTensor } = prepareData(data);

            setProgress(TrainingProgress.Training);
            const model = buildModel();
            await model.fit(xsTensor, ysTensor, {
                epochs: 50,
                batchSize: 32,
                validationSplit: 0.2,
                callbacks: {
                    onEpochEnd: (epoch, logs) => {
                        console.log(`Epoch ${epoch + 1}: loss = ${logs?.loss}, accuracy = ${logs?.acc}`);
                    },
                },
            });

            setProgress(TrainingProgress.Completed);
            await model.save('downloads://pose_model');

            xsTensor.dispose();
            ysTensor.dispose();
        } catch (error) {
            console.error(error);
            setProgress(TrainingProgress.Failed);
        } finally {
            setLoading(false);
        }
    };

    // Handle file input change
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            loadCSVData(file).then(data => {
                setCSVData(data);
                setProgress(TrainingProgress.Ready);
            });
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Card className="w-[600px]">
                <CardHeader>
                    <CardTitle>Train Pose Data</CardTitle>
                    <CardDescription>Train a pose analyzer using data in a CSV file</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="w-full px-3 py-2 my-2">
                        <p>CSV File:</p>
                        <Input
                            type="file"
                            accept=".csv"
                            onChange={handleFileChange}
                            disabled={loading}
                            className=""
                        />
                    </div>
                    <div className="w-full px-3 py-2 my-2">
                        <p>Progress: {progress}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full"
                        onClick={trainAndDownloadModel}
                        disabled={loading || csvData.length === 0}
                    >
                        {loading ? 'Training...' : 'Train Model'}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}