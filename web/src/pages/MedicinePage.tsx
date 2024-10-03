import {useState} from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import Markdown from "react-markdown";

export default function MedicinePage() {
    const [cameraImage, setCameraImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<string | null>(null);

    // Handle file selection from file system
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    // Handle image capture from camera
    const handleCapture = () => {
        const video = document.createElement('video');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        navigator.mediaDevices.getUserMedia({video: true})
            .then((stream) => {
                video.srcObject = stream;
                video.play();
                video.addEventListener('canplay', () => {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL('image/jpeg');
                    setCameraImage(dataUrl);
                    stream.getTracks().forEach(track => track.stop()); // Stop the video stream
                });
            })
            .catch((err) => {
                console.error('Error accessing camera:', err);
            });
    };

    // Function to send image to the API
    const handleSubmit = async () => {
        setIsLoading(true);
        const formData = new FormData();

        // Check if it's a camera image or a file from the file system
        if (cameraImage) {
            const blob = await fetch(cameraImage).then(res => res.blob());
            formData.append('image', blob, 'captured_image.jpg');
        } else if (selectedFile) {
            formData.append('image', selectedFile);
        }

        try {
            const response = await fetch('https://afyayangu.onrender.com/ai/base_prescription', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.text()
                setResponse(data);
            } else {
                console.error('Failed to submit image');
            }
        } catch (error) {
            console.error('Error submitting image:', error);
        }

        setIsLoading(false);
    };

    return (
        <div className="h-full w-full flex flex-col">
            <div className="grow w-full flex flex-col justify-center">
                <div className="w-full flex flex-row">
                    <Card className="mx-auto w-4/5 lg:w-3/5 xl:w-1/3">
                        <CardHeader>
                            <h4>Prescription</h4>
                            <p>Upload a prescription image or capture one using your camera.</p>
                        </CardHeader>
                        <CardContent>
                            <Tabs className="">
                                <TabsList className="w-full grid grid-cols-2">
                                    <TabsTrigger value="camera">Camera</TabsTrigger>
                                    <TabsTrigger value="file">File</TabsTrigger>
                                </TabsList>

                                {/* Camera tab content */}
                                <TabsContent value="camera">
                                    {cameraImage ? (
                                        <img src={cameraImage} alt="Captured" className="mb-4 w-[400px] h-[300px] mx-auto rounded-xl"/>
                                    ) : (
                                        <Button onClick={handleCapture} disabled={isLoading}>
                                            {isLoading ? 'Capturing...' : 'Capture Image'}
                                        </Button>
                                    )}
                                </TabsContent>

                                {/* File upload tab content */}
                                <TabsContent value="file">
                                    <Input type="file" accept="image/*" onChange={handleFileChange}
                                           disabled={isLoading}/>
                                    {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                                </TabsContent>
                            </Tabs>

                            <Button
                                onClick={handleSubmit}
                                disabled={isLoading || (!selectedFile && !cameraImage)} className="mt-4"
                            >
                                {isLoading ? 'Processing...' : 'Submit'}
                            </Button>

                            {/* Show response */}
                            {response && (
                                <div className="mt-4 mx-2 p-2 border rounded-xl">
                                    <h3 className="andika-bold text-lg">Response:</h3>
                                    <Markdown>{response.slice(1, -1).replace("\n", " \n ")}</Markdown>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}


