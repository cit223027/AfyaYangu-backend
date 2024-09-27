import Medicine from "@/models/Medicine.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {Button} from "@/components/ui/button.tsx";
import {ShoppingCartIcon} from "lucide-react";
import MedicineDarkIcon from "/images/page/medicine.dark.svg";
import MedicineDialog from "@/components/medicine/dialog/MedicineDialog.tsx";


type MedicineCardProps = {
    id?: string;
    className?: string;
    medicine: Medicine;
    onAddToCart: () => void;
    isWide?: boolean
}

export default function MedicineCard({
    id,
    className,
    medicine,
    onAddToCart,
    isWide = false
}: MedicineCardProps) {

    const { appLanguage } = useContext(AppLanguageContext);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{medicine.getTranslatedName(appLanguage)}</CardTitle>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter className="flex flex-row items-center space-x-2 mx-2">
                <Button className="rounded-lg" variant="outline" onClick={() => onAddToCart()}>
                    <ShoppingCartIcon />
                </Button>

                <MedicineDialog
                    medicine={medicine}
                    onAddToCart={onAddToCart}
                >
                    <Button className="rounded-lg grow">

                    </Button>
                </MedicineDialog>

            </CardFooter>
        </Card>
    )
}
