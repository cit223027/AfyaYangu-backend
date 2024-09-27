import Medicine from "@/models/Medicine.ts";
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog.tsx";
import {DialogDescription, DialogTitle} from "@radix-ui/react-dialog";
import {Button} from "@/components/ui/button.tsx";
import {ShoppingCartIcon} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import MedicineDarkIcon from "/images/page/medicine.dark.svg";
import {Textarea} from "@/components/ui/textarea.tsx";

type MedicineDialogProps = {
    medicine: Medicine;
    onAddToCart: (medicine: Medicine) => void;
    children: JSX.Element | JSX.Element[];
};

export default function MedicineDialog({
   medicine,
   onAddToCart,
   children,
}: MedicineDialogProps) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/5">
                <DialogHeader>
                    <DialogTitle>Medicine</DialogTitle>
                    <DialogDescription>View or purchase this medicine from our store</DialogDescription>
                </DialogHeader>

                <div className="w-full overflow-y-auto px-2">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-1">
                        <div className="w-full flex items-center justify-center">
                            {medicine.image_src ? (
                                <img
                                    src={medicine.image_src}
                                    alt={`${medicine.english_name} Image`}
                                    className="w-72 h-72"
                                />
                            ) : (
                                <img
                                    src={MedicineDarkIcon}
                                    alt="Default Medicine Icon"
                                    className="w-72 h-72"
                                />
                            )}
                        </div>
                        <div className="w-full">
                            <div className="w-full my-2 px-2">
                                <h6>English Name:</h6>
                                <Input
                                    readOnly
                                    value={medicine.english_name}
                                    className="w-full my-2"
                                />
                            </div>

                            <div className="w-full my-2 px-2">
                                <h6>Swahili Name:</h6>
                                <Input
                                    readOnly
                                    value={medicine.swahili_name || "N/A"}
                                    className="w-full my-2"
                                />
                            </div>

                            <div className="w-full my-2 px-2">
                                <h6>Kikuyu Name:</h6>
                                <Input
                                    readOnly
                                    value={medicine.kikuyu_name || "N/A"}
                                    className="w-full my-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full my-2 px-2">
                        <h6>Treats:</h6>
                        <Textarea
                            readOnly
                            value={medicine.treats.length > 0 ? medicine.treats.join(", ") : "N/A"}
                            className="w-full my-2 max-h-48"
                        />
                    </div>

                    <div className="w-full my-2 px-2">
                        <h6>Side Effects:</h6>
                        <Textarea
                            readOnly
                            value={medicine.side_effects.length > 0 ? medicine.side_effects.join(", ") : "N/A"}
                            className="w-full my-2 max-h-48"
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-end px-4 space-x-4">
                    <DialogClose asChild>
                        <Button variant="secondary">Close</Button>
                    </DialogClose>
                    <Button onClick={() => onAddToCart(medicine)}>
                        <ShoppingCartIcon className="h-5 w-5" />
                        <span className="ms-2">Add To Cart</span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}