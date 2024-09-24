import { useState } from "react";
import {FirebaseConfigContext} from "@/pages/components/firebase/FirebaseConfiguration.ts";
import {FirebaseConfiguration} from "@/pages/components/firebase/FirebaseConfiguration.ts";

export function FirebaseInitializer(
    children: JSX.Element
) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const firebaseConfiguration = new FirebaseConfiguration(setIsLoggedIn)

    return (
        <FirebaseConfigContext.Provider value={{
            isLoggedIn: isLoggedIn,
            firebaseConfiguration: firebaseConfiguration,
            setIsLoggedIn: setIsLoggedIn
        }}>
            {children}
        </FirebaseConfigContext.Provider>
    )
}