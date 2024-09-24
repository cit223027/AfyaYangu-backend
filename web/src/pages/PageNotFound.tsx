import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {House, PanelsTopLeft} from "lucide-react";
import {useContext} from "react";
import {AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

export default function PageNotFound() {

    const appLanguageContext = useContext(AppLanguageContext)

    return (
        <div className="w-screen h-screen">
            <Card className="max-w-64 mx-auto my-auto align-middle">
                <CardHeader>
                    <CardTitle>
                        <div className="flex flex-row">
                            <PanelsTopLeft />{LanguageTranslations.pageNotFound.getTranslation(appLanguageContext.appLanguage)}
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mx-auto text-center my-3 px-2">{LanguageTranslations.pageNotFoundDescription.getTranslation(appLanguageContext.appLanguage)}</p>
                </CardContent>
                <CardFooter>
                    <div className="w-full">
                        <Link to="/">
                            <Button className="w-full max-w-full">
                                <House />
                                <span className="ms-2">{LanguageTranslations.goToHomePage.getTranslation(appLanguageContext.appLanguage)}</span>
                            </Button>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
