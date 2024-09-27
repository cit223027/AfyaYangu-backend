import MainTopBar from "@/components/topbar/MainTopBar.tsx";
import {UserInformation, UserInformationContext} from "@/context/UserInformationContext.ts";
import {AppLanguage, AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {ReactElement, useEffect, useState} from "react";
import {AIContext, AIPageInformation} from "@/context/AIContext.ts";
import {Link, Outlet, useLocation} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import {Bot, HomeIcon} from "lucide-react";
import KnowledgeIconDark from "/public/images/page/knowledge.dark.svg"
import MedicineIconDark from "/public/images/page/medicine.dark.svg"
import AmbulanceIconDark from "/public/images/page/ambulance.dark.svg"
import SpeakProvider from "@/components/speech/SpeakProvider.tsx";
import AIChatSpace from "@/components/ai/AIChatSpace.tsx";
import BreadCrumbGenerator from "@/utils/BreadCrumbGenerator.tsx";

enum TopPage {
    Home,
    Knowledge,
    Medicine,
    FirstAid,
    EmergencyContacts
}

export default function MainPageLayout() {

    const [userInformationData, setUserInformationData] = useState<UserInformation | undefined>(undefined)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUserLanguage, setCurrentUserLanguage] = useState(AppLanguage.English)
    const [pageBreadcrumb, setPageBreadcrumb] = useState((<></>))

    const [isShowingAIPane, setIsShowingAIPane] = useState<boolean>(false)
    const [aiPageInformation, setAIPageInformation] = useState<AIPageInformation>(
        new AIPageInformation(
            "User is in main page",
            "User is in main page",
            "User has not logged in",
            "User has not logged in, therefore does not have any medical information"
        )
    )

    const [currentTopPage, setCurrentTopPage] = useState(TopPage.Home)

    /* Get the current URL */
    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname.startsWith("/knowledge")) {
            setCurrentTopPage(TopPage.Knowledge)
        } else if (pathname.startsWith("/medicine")) {
            setCurrentTopPage(TopPage.Medicine)
        } else if (pathname.startsWith("/firstaid")) {
            setCurrentTopPage(TopPage.FirstAid)
        } else if (pathname.startsWith("/emergencycontacts")) {
            setCurrentTopPage(TopPage.EmergencyContacts)
        } else {
            setCurrentTopPage(TopPage.Home)
        }

        // set breadcrumb
        setPageBreadcrumb(BreadCrumbGenerator.generateBreadCrumbs(pathname, currentUserLanguage))
    }, [pathname, currentUserLanguage]);

    function SideMenuOption(
        topPage: TopPage,
        icon: ReactElement,
        title: string,
        darkIcon?: ReactElement
    ) {
        let destinationUrl = "";

        switch (topPage) {
            case TopPage.Home:
                destinationUrl = "/"
                break
            case TopPage.Medicine:
                destinationUrl = "/medicine"
                break
            case TopPage.FirstAid:
                destinationUrl = "/firstaid"
                break
            case TopPage.EmergencyContacts:
                destinationUrl = "/emergencycontacts"
                break
            case TopPage.Knowledge:
                destinationUrl = "/knowledge"
                break
            default:
                throw new Error("There is no error")
        }

        function CurrentIcon() {
            if (currentTopPage == topPage && darkIcon !== undefined) {
                return (<>{darkIcon}</>)
            } else {
                return (<>{icon}</>)
            }
        }

         return (
             <Link to={destinationUrl}>
                 <div className={`flex flex-col items-center px-2 py-2 rounded-2xl ${currentTopPage === topPage && "bg-primary text-primary-foreground"}`}>
                     <div className={`p-2`}>
                         {CurrentIcon()}
                     </div>
                     <p className={`text-center mx-auto mt-2 ${currentTopPage === topPage && "font-bold"}`}>{title}</p>
                 </div>
             </Link>
         )
    }


    return (
        <div className="bg-page-background andika-regular flex flex-col my-1 w-screen h-screen">
            <AppLanguageContext.Provider value={{
                appLanguage: currentUserLanguage,
                setAppLanguage: (appLanguage: AppLanguage) => {
                    setCurrentUserLanguage(appLanguage)
                }
            }}>
                <UserInformationContext.Provider value={{
                    isLoggedIn: isLoggedIn,
                    userInformation: userInformationData,
                    setUpUserInformation: (userInfo: UserInformation) => {
                        setIsLoggedIn(true)
                        setUserInformationData(userInfo)
                    },
                    showLogInDialog: () => {

                    },
                    logOutUser: () => {
                        setIsLoggedIn(false)
                        setUserInformationData(undefined)
                    }
                }}>
                    <AIContext.Provider value={{
                        toggleAIPane: (show: boolean) => {
                            setIsShowingAIPane(show)
                        },
                        pageInformation: aiPageInformation,
                        goToNewPage: (_pageTitle, _pageContentDescription) => {
                            setAIPageInformation(aiPageInformation.withNewPageInformation(_pageTitle, _pageContentDescription))
                        },
                        updatePageContentInformation: (_pageContentDescription) => {
                            setAIPageInformation(aiPageInformation.withNewPageContentDescription(_pageContentDescription))
                        },
                        updateUserInformation: (_userBasicInformation, _userMedicineInformation) => {
                            setAIPageInformation(aiPageInformation.withUserInformation(_userBasicInformation, _userMedicineInformation))
                        }
                    }}>
                        <SpeakProvider>
                            <MainTopBar className="w-full flex-none py-1 px-4" isShowingSearchBar={false}/>
                            <div className="grow p-2 flex flex-row w-full max-h-full min-h-0">
                                <div className="hidden lg:flex px-2 flex-col justify-center w-28 h-full">
                                    {SideMenuOption(TopPage.Home, (
                                        <HomeIcon/>), LanguageTranslations.pageHome.getTranslation(currentUserLanguage))}
                                    {SideMenuOption(TopPage.Knowledge, (
                                        <img src={KnowledgeIconDark} alt="Knowledge Page" width={24}
                                             height={24}/>), LanguageTranslations.pageKnowledge.getTranslation(currentUserLanguage))}
                                    {SideMenuOption(TopPage.Medicine, (
                                        <img src={MedicineIconDark} alt="Medicine" width={24}
                                             height={24}/>), LanguageTranslations.pageMedicine.getTranslation(currentUserLanguage))}
                                    {SideMenuOption(TopPage.EmergencyContacts, (
                                        <img src={AmbulanceIconDark} alt="Emergency Contacts" width={24}
                                             height={24}/>), LanguageTranslations.pageEmergencyContacts.getTranslation(currentUserLanguage))}
                                </div>

                                <div className={`px-1 w-full flex-shrink min-w-0 relative`}>

                                    {/* Small screens - Show AIChatSpace as overlay */}
                                    {isShowingAIPane && (
                                        <div
                                            className="fixed inset-0 z-50 bg-gray-950/80 bg-black lg:hidden flex justify-center items-center p-6">
                                            <div className="my-6 mx-4 h-full w-full bg-gray-950 p-2 rounded-xl">
                                                <AIChatSpace
                                                    className="h-full"
                                                    onCloseAIChatSpace={() => setIsShowingAIPane(false)}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="w-full h-full flex flex-row">

                                        <div className="grow h-full w-full flex flex-col">
                                            {pageBreadcrumb}
                                            <div className="grow h-full w-full overflow-y-auto">
                                                <Outlet/>
                                            </div>
                                        </div>

                                        {/* Large screens - Show AIChatSpace to the right */}
                                        {isShowingAIPane && (
                                            <div className="ms-1 h-full hidden lg:block 2xl:w-2/5 w-3/5">
                                                <AIChatSpace
                                                    className="h-full"
                                                    onCloseAIChatSpace={() => setIsShowingAIPane(false)}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Button to open AIChatSpace */}
                                    {!isShowingAIPane && (
                                        <Button
                                            className="absolute bottom-1 right-1 mr-4 mb-4 py-3 px-5 rounded-xl"
                                            onClick={() => setIsShowingAIPane(true)}
                                        >
                                            <Bot className="me-2"/>
                                            <span>{LanguageTranslations.aiAsk.getTranslation(currentUserLanguage)}</span>
                                        </Button>
                                    )}
                                </div>

                            </div>
                        </SpeakProvider>
                    </AIContext.Provider>
                </UserInformationContext.Provider>
            </AppLanguageContext.Provider>
        </div>
    )
}
