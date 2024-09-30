import {useContext} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {BackendContext} from "@/components/backend/BackendContext.tsx";


export default function EmergencyContactPage() {

    const { appLanguage } = useContext(AppLanguageContext);
    const { backendCache } = useContext(BackendContext);



    return (
        <div>
            <p>Emergency Contacts</p>
        </div>
    )
}
