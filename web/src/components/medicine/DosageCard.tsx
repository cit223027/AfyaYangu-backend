import UserMedication, {DosagePeriod, DosageType, IntakeMealInstruction} from "@/models/UserMedication.ts";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import Medicine from "@/models/Medicine.ts";
import {useContext, useEffect, useState} from "react";
import {AppLanguage, AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {Button} from "@/components/ui/button.tsx";
import {BackendContext} from "@/components/backend/BackendContext.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";

type DosageCardProps = {
    id?: string;
    className?: string;
    userMedication: UserMedication;
    isFullWidth?: boolean;
}

type DosageCardSubFunctionProps = {
    id?: string;
    className?: string;
    userMedication: UserMedication;
    summary: string;
    isFullWidth?: boolean;
}

export function DosageCard({ id, className, userMedication, isFullWidth }: DosageCardProps) {

    const [summary, setSummary] = useState("")
    const { appLanguage } = useContext(AppLanguageContext)

    useEffect(() => {
        switch (appLanguage) {
            case AppLanguage.English:
                setSummary(generateDosageSummaryInEnglish(userMedication))
                break;
            case AppLanguage.Swahili:
                setSummary("")
                break;
            case AppLanguage.Kikuyu:
                setSummary("")
                break;
        }
    }, [appLanguage])

    return isFullWidth ? (
        <DosageWideCard
            id={id}
            className={className}
            userMedication={userMedication}
            summary={summary}
        />
    ) : (
        <DosageNormalCard
            id={id}
            className={className}
            userMedication={userMedication}
            summary={summary}
        />
    );
}

function generateDosageSummaryInEnglish(userMedication: UserMedication) {
    const intakeAmount = userMedication.intake_per_dosage;
    const dosageUnit = userMedication.dosage_type === DosageType.Syrup ? 'ml' : 'tablet';

    // Helper function to calculate the base date based on dosage period
    const calculateBaseDate = (dosagePeriod: DosagePeriod): Date => {
        const now = new Date();
        let baseDate = new Date();

        switch (dosagePeriod) {
            case DosagePeriod.Day:
                // No change needed, base date is 12:00am today
                baseDate.setHours(0, 0, 0, 0);
                break;
            case DosagePeriod.Week:
                // Set base date to the previous Sunday at 12:00am
                baseDate.setDate(now.getDate() - now.getDay());
                baseDate.setHours(0, 0, 0, 0);
                break;
            case DosagePeriod.Month:
                // Set base date to the first day of the current month at 12:00am
                baseDate.setDate(1);
                baseDate.setHours(0, 0, 0, 0);
                break;
        }

        return baseDate;
    };

    // Get the base date based on the dosage period
    const baseDate = calculateBaseDate(userMedication.dosage_period);

    // Helper function to get day name and date
    const getDayNameAndDate = (date: Date): string => {
        // const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dayName = date.toLocaleDateString(undefined, { weekday: 'long' });
        const dayDate = date.getDate();
        const suffix = (dayDate: number) => {
            if (dayDate > 3 && dayDate < 21) return 'th'; // Catch 11th-13th
            switch (dayDate % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };
        return userMedication.dosage_period === DosagePeriod.Month ?
            `${dayName}, ${dayDate}${suffix(dayDate)} ` :
            `${dayName}: `;
    };

    // Calculate the times to take the medication based on the base date
    const times = userMedication.time_to_take.map(timeInSeconds => {
        const date = new Date(baseDate.getTime() + timeInSeconds * 1000); // Convert seconds to milliseconds
        const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Prepare output based on dosage period
        if (userMedication.dosage_period === DosagePeriod.Week || userMedication.dosage_period === DosagePeriod.Month) {
            return `${getDayNameAndDate(date)}${timeString}`;
        }
        return timeString;
    }).join(', ');

    const period = userMedication.dosage_period === DosagePeriod.Day
        ? 'day'
        : userMedication.dosage_period === DosagePeriod.Week
            ? 'week'
            : 'month';

    const frequency = userMedication.dosages_per_period > 1 ? 'times' : 'time';
    const mealInstruction = userMedication.intake_meal_instruction === IntakeMealInstruction.AfterMeal
        ? 'after meals'
        : userMedication.intake_meal_instruction === IntakeMealInstruction.BeforeMeal
            ? 'before meals'
            : '';

    return `${intakeAmount} ${dosageUnit}${userMedication.dosages_per_period > 1 && userMedication.dosage_type === DosageType.Tablets ? 's' : ''} ${mealInstruction}, ${userMedication.dosages_per_period} ${frequency} per ${period}. At ${times}.`;
}


function DosageNormalCard({ id, className, userMedication, summary }: DosageCardSubFunctionProps) {
    const { appLanguage } = useContext(AppLanguageContext);

    const { backendCache } = useContext(BackendContext);

    const [medicine, setMedicine] = useState<Medicine | null>(null)

    useEffect(() => {
        backendCache.getMedicine(userMedication.medication_id).then((result) => {
            if (result !== undefined) {
                setMedicine(result)
            }
        })
    }, []);

    return (
        <Card id={id} className={`${className}`}>
            <CardHeader>
                <CardTitle>{medicine !== null ? medicine.getTranslatedName(appLanguage) : (<Skeleton className="h-4 w-[200px]"/>) }</CardTitle>
                <CardDescription>{summary}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="border p-2 rounded">
                        <span>Dosage Type: </span><strong>{userMedication.dosage_type}</strong>
                    </div>
                    <div className="border p-2 rounded">
                        <span>Intake Amount: </span><strong>{userMedication.intake_per_dosage} {userMedication.dosage_type === DosageType.Syrup ? 'ml' : 'tablet'}</strong>
                    </div>
                    <div className="border p-2 rounded">
                        <span>Dosage Period: </span><strong>{userMedication.dosage_period}</strong>
                    </div>
                    <div className="border p-2 rounded">
                        <span>Dosages Per Period: </span><strong>{userMedication.dosages_per_period}</strong>
                    </div>
                    <div className="border p-2 rounded">
                        <span>Intake Meal Instruction: </span><strong>{userMedication.intake_meal_instruction}</strong>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button>View Medication</Button>
            </CardFooter>
        </Card>
    );
}

function DosageWideCard({id, className, userMedication, summary}: DosageCardSubFunctionProps) {
    const { appLanguage } = useContext(AppLanguageContext);

    const { backendCache } = useContext(BackendContext);

    const [medicine, setMedicine] = useState<Medicine | null>(null)

    useEffect(() => {
        backendCache.getMedicine(userMedication.medication_id).then((result) => {
            if (result !== undefined) {
                setMedicine(result)
            }
        })
    }, []);

    return (
        <Card id={id} className={`${className} flex flex-row`}>
            <div className="">
                <CardTitle>{medicine !== null ? medicine.getTranslatedName(appLanguage) : (<Skeleton className="h-4 w-[200px]"/>) }</CardTitle>
                <CardDescription>{summary}</CardDescription>
            </div>
        </Card>
    );
}