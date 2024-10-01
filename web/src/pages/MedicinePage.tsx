import {useContext, useState} from "react";
import {UserInformationContext} from "@/context/UserInformationContext.ts";

export default function MedicinePage() {

    // @ts-ignore
    const { isLoggedIn, userInformation } = useContext(UserInformationContext)

    // @ts-ignore
    const [isLoading, setIsLoading] = useState(false)
    // @ts-ignore
    const [isGridMode, setIsGridMode] = useState<boolean>(true);

    return (
        <div className="h-full w-full flex flex-col">
            <p>Medicine</p>
        </div>
    )
}

