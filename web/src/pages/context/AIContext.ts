import {createContext} from "react";


export class AIPageInformation {
    pageTitle: string;
    pageContentDescription: string;
    userBasicInformation: string;
    userMedicineInformation: string;


    constructor(
        pageTitle: string,
        pageContentDescription: string,
        userBasicInformation: string,
        userMedicineInformation: string,
    ) {
        this.pageTitle = pageTitle;
        this.pageContentDescription = pageContentDescription;
        this.userBasicInformation = userBasicInformation;
        this.userMedicineInformation = userMedicineInformation;
    }


    withNewPageInformation(
        pageTitle: string = this.pageTitle,
        pageContentDescription: string = this.pageContentDescription
    ): AIPageInformation {
        return new AIPageInformation(
            pageTitle,
            pageContentDescription,
            this.userBasicInformation,
            this.userMedicineInformation
        )
    }

    withNewPageContentDescription(
        pageContentDescription: string = this.pageContentDescription,
    ): AIPageInformation {
        return new AIPageInformation(
            this.pageTitle,
            pageContentDescription,
            this.userBasicInformation,
            this.userMedicineInformation
        )
    }

    withUserInformation(
        userBasicInformation: string = this.userBasicInformation,
        userMedicineInformation: string = this.userMedicineInformation,
    ): AIPageInformation {
        return new AIPageInformation(
            this.pageTitle,
            this.pageContentDescription,
            userBasicInformation,
            userMedicineInformation
        )
    }

}

export type AIContextType = {
    toggleAIPane: (_show: boolean) => void;
    pageInformation: AIPageInformation;
    goToNewPage: (_pageTitle: string, _pageContentDescription: string) => void;
    updatePageContentInformation: (_pageContentDescription: string) => void;
    updateUserInformation: (_userBasicInformation: string, _userMedicineInformation: string) => void;
}

export const AIContext = createContext<AIContextType>({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toggleAIPane: (_show: boolean) => {},

    pageInformation: new AIPageInformation("", "", "", ""),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    goToNewPage: (_pageTitle: string, _pageContentDescription: string) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updatePageContentInformation: (_pageContentDescription: string) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUserInformation: (_userBasicInformation: string, _userMedicineInformation: string) => {},
})
