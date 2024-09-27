import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {UserInformationContext} from "@/context/UserInformationContext.ts";
import UserNotLoggedIn from "@/components/user/UserNotLoggedIn.tsx";


export default function MedicinePrescriptionsPage() {

    const { appLanguage } = useContext(AppLanguageContext);
    const { showLogInDialog, isLoggedIn, userInformation } = useContext(UserInformationContext)

    return (
        <div>
            <div className="w-full my-4">
                {!isLoggedIn && (<div><UserNotLoggedIn /></div>)}
            </div>


        </div>
    )
}
