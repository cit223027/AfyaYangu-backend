import {createContext} from "react";

export enum AppLanguage {
    English = 0,
    Swahili = 1,
    Kikuyu = 2
}

export const AppLanguageContext = createContext({
    appLanguage: AppLanguage.English,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setAppLanguage: (_: AppLanguage) => {}
})
