import Prescription from "@/models/Prescription.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";

type PrescriptionsCardProps = {
    id?: string;
    className?: string;
    prescription: Prescription;
    onViewPrescription: () => void;
    isWide?: boolean;
}

export default function PrescriptionsCard({
    id,
    className,
    prescription,
    onViewPrescription,
    isWide = false
}: PrescriptionsCardProps) {


    if (isWide) {
        return (
            <PrescriptionWideCard
                id={id}
                className={className}
                prescription={prescription}
                onViewPrescription={onViewPrescription}
            />
        )
    } else {
        return (
            <PrescriptionNormalCard
                id={id}
                className={className}
                prescription={prescription}
                onViewPrescription={onViewPrescription}
            />
        )
    }
}

function PrescriptionNormalCard({
    id,
    className,
    prescription,
    onViewPrescription
}: PrescriptionsCardProps) {

    const formatDate = (epochSeconds?: number): string => {
        if (!epochSeconds) return ""; // Return blank if undefined
        return new Date(epochSeconds * 1000).toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true
        });
    };

    return (
        <Card id={id} className={`${className} w-96`}>
            <CardHeader>
                <CardTitle>Prescription</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row px-2 py-2 items-center justify-between">
                    <p>Date Added:</p>
                    <p className="andika-bold text-xl">{formatDate(prescription.date_scanned)}</p>
                </div>

                <Separator className="px-2 my-2"/>

                <div className="flex flex-row px-2 py-2 items-center justify-between">
                    <p className="">User Medications:</p>
                    <p className="andika-bold text-xl">{prescription.medications.length}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={() => onViewPrescription()}>
                    View Prescription
                </Button>
            </CardFooter>
        </Card>
    )
}

function PrescriptionWideCard({
    id,
    className,
    prescription,
    onViewPrescription
}: PrescriptionsCardProps) {

    const formatDate = (epochSeconds?: number): string => {
        if (!epochSeconds) return ""; // Return blank if undefined
        return new Date(epochSeconds * 1000).toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
        });
    };


    return (
        <Card id={id} className={`${className} flex flex-row px-3 py-2`}>
            <div className="flex flex-col grow min-w-0 flex-shrink">
                <CardTitle>Prescription</CardTitle>
                <div className="w-full flex flex-row px-3 py-2 items-center justify-evenly">
                    <div className="flex items-center space-y-2 px-2">
                        <p>Date Added:</p>
                        <p className="andika-bold text-xl">{formatDate(prescription.date_scanned)}</p>
                    </div>

                    <Separator orientation="vertical"/>

                    <div className="flex items-center space-y-2">
                        <p className="">User Medications:</p>
                        <p className="andika-bold text-xl">{prescription.medications.length}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center px-2">
                <Button className="w-full rounded-lg" onClick={() => onViewPrescription()}>View Prescription</Button>
            </div>
        </Card>
    );
}


