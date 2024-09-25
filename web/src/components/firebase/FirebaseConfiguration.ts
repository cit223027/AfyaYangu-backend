import {createContext} from "react";
import { Auth, getAuth, User, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app"

type FirebaseProfileInformation = {
    userId: string;
    displayName: string;
    photoUrl: string | null;
}

const myFirebaseConfig = {
    apiKey: "AIzaSyD6VqzBx1MC4zxNfn2-yg5MoRtiql5gNpc",
    authDomain: "bkmbigo-afyayangu.firebaseapp.com",
    projectId: "bkmbigo-afyayangu",
    storageBucket: "bkmbigo-afyayangu.appspot.com",
    messagingSenderId: "448527910628",
    appId: "1:448527910628:web:db3dffe65fd4e2baaf0ef1",
    measurementId: "G-VGK44Q7VV6"
};

export class FirebaseConfiguration {

    private firebaseApp: FirebaseApp | undefined = undefined

    private isFirebaseInitialized: boolean = false;
    private firebaseAuth: Auth
    private googleProvider = new GoogleAuthProvider()
    private readonly onSetLoggedInState: (isLoggedIn: boolean) => void = () => {}


    profileInfo: FirebaseProfileInformation | undefined = undefined

    constructor(
        onSetLoggedInState: (isLoggedIn: boolean) => void = () => {}
    ) {
        this.isFirebaseInitialized = true
        const app = initializeApp(myFirebaseConfig)
        this.firebaseApp = app
        this.firebaseAuth = getAuth()
        this.onSetLoggedInState = onSetLoggedInState
    }

    private setUpUserInformation(user: User) {
        this.profileInfo = {
            userId: user.uid,
            displayName: user.displayName !== null ? user.displayName : "",
            photoUrl: user.photoURL
        }
    }

    /* Auth Functions */

    signInUsingGoogle() {
        signInWithPopup(this.firebaseAuth, this.googleProvider)
            .then((result) => {
                this.setUpUserInformation(result.user);
                this.onSetLoggedInState(true)
            })
    }

    signOutUser() {
        signOut(this.firebaseAuth)
            .then(() => {
                this.onSetLoggedInState(false)
            })
    }

    /* Firestore Functions */
    /*
    * The App does not directly communicate with the firestore database.
    *   Instead, it communicates with the backend which in turn communicates with the backend
    * */

}

type FirebaseConfigContextType = {
    isLoggedIn: boolean,
    firebaseConfiguration: FirebaseConfiguration,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
}

export const FirebaseConfigContext = createContext<FirebaseConfigContextType>({
    isLoggedIn: false,
    firebaseConfiguration: new FirebaseConfiguration(),
    setIsLoggedIn: () => {}
})





