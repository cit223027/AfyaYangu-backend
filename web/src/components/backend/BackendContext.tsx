import {createContext, ReactNode} from "react";
import BackendCache from "@/components/backend/BackendCache.ts";

type BackendContextType = {
    backendCache: BackendCache

}

export const BackendContext = createContext<BackendContextType>({
    backendCache: new BackendCache()
})

export function BackendProvider(
    { children }: { children?: ReactNode }
) {

    const backendCache = new BackendCache()

    return (
        <BackendContext.Provider value={{backendCache: backendCache}}>
            {children !== undefined && (children)}
        </BackendContext.Provider>
    )
}
