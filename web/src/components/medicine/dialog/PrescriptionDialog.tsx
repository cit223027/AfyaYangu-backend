import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogClose
} from "@/components/ui/dialog.tsx";
import Prescription from "@/models/Prescription.ts";
import UserMedication from "@/models/UserMedication.ts";
import {DosageCard} from "@/components/medicine/DosageCard.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

type PrescriptionDialogProps = {
    prescription: Prescription;
    onDeletePrescription: () => void;
    children: React.ReactNode;
};

export default function PrescriptionDialog({
    prescription,
    onDeletePrescription,
    children,
}: PrescriptionDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
                <DialogHeader>
                    <DialogTitle>Prescription Details</DialogTitle>
                    <DialogDescription>View or delete this prescription.</DialogDescription>
                </DialogHeader>

                <div className="w-full overflow-y-auto px-2">
                    {/* Prescription Date */}
                    <div className="mb-4">
                        <h6>Date Scanned:</h6>
                        <p className="text-sm">{prescription.date_scanned ? new Date(prescription.date_scanned * 1000).toLocaleString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        }) : "N/A"}</p>
                    </div>

                    {/* Medications List */}
                    <div className="mb-4">
                        <h6>Medications:</h6>
                        <ScrollArea className="max-h-48">
                            {prescription.medications.length > 0 ? (
                                prescription.medications.map((medication: UserMedication) => (
                                    <DosageCard
                                        key={medication.user_medication_id}
                                        id={medication.user_medication_id}
                                        userMedication={medication}
                                        className="my-2"
                                    />
                                ))
                            ) : (
                                <p>No medications available for this prescription.</p>
                            )}
                        </ScrollArea>
                    </div>
                </div>

                <div className="flex flex-row justify-end px-4 space-x-4">
                    <DialogClose asChild>
                        <Button variant="secondary">Close</Button>
                    </DialogClose>
                    <Button onClick={onDeletePrescription} variant="destructive">
                        <span>Delete Prescription</span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
