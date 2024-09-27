import {createContext} from "react";

export enum AppLanguage {
    English = "english",
    Swahili = "swahili",
    Kikuyu = "kikuyu"
}

export const AppLanguageContext = createContext({
    appLanguage: AppLanguage.English,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setAppLanguage: (_: AppLanguage) => {}
})
