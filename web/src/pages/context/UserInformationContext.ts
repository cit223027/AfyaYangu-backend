import {createContext} from "react";


export class UserInformation {
    avatarUrl: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;

    constructor(
        avatarUrl: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string
    ) {
        this.avatarUrl = avatarUrl;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber
    }

}

export type UserInformationContextType = {
    isLoggedIn: boolean,
    userInformation?: UserInformation,
    setUpUserInformation: (userBasicInformation: UserInformation) => void,
    logOutUser: () => void,
}

export const UserInformationContext = createContext<UserInformationContextType>({
    isLoggedIn: false,
    userInformation: undefined,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUpUserInformation: (_userInfo: UserInformation) => {},
    logOutUser: () => {}
});
