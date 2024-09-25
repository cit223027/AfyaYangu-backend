import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPageLayout from "@/pages/MainPageLayout.tsx";
import PageNotFound from "@/pages/PageNotFound.tsx";
import KnowledgePage from "@/pages/KnowledgePage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import MyMedicinePage from "@/pages/MyMedicinePage.tsx";
import EmergencyContactPage from "@/pages/EmergencyContactPage.tsx";
import {KnowledgeOrgansPage} from "@/pages/knowledge/KnowledgeOrgansPage.tsx";
import KnowledgeDiseasesPage from "@/pages/knowledge/KnowledgeDiseasesPage.tsx";
import KnowledgeMentalHealthPage from "@/pages/knowledge/KnowledgeMentalHealthPage.tsx";
import KnowledgeInsurancePage from "@/pages/knowledge/KnowledgeInsurancePage.tsx";
import KnowledgeOrgansBrainPage from "@/pages/knowledge/organs/KnowledgeOrgansBrainPage.tsx";
import KnowledgeOrgansHeartPage from "@/pages/knowledge/organs/KnowledgeOrgansHeartPage.tsx";
import "./App.css"
import KnowledgeOrgansKidneyPage from "@/pages/knowledge/organs/KnowledgeOrgansKidneyPage.tsx";
import KnowledgeOrgansLiverPage from "@/pages/knowledge/organs/KnowledgeOrgansLiverPage.tsx";
import KnowledgeOrgansLungPage from "@/pages/knowledge/organs/KnowledgeOrgansLungPage.tsx";
import KnowledgeOrgansSkinPage from "@/pages/knowledge/organs/KnowledgeOrgansSkinPage.tsx";
import KnowledgeOrgansStomachPage from "@/pages/knowledge/organs/KnowledgeOrgansStomachPage.tsx";
import KnowledgeDiseasesBreastCancerPage from "@/pages/knowledge/diseases/DiseasesBreastCancerPage.tsx";
import KnowledgeDiseasesCholeraPage from "@/pages/knowledge/diseases/DiseasesCholeraPage.tsx";
import KnowledgeDiseasesDiabetesPage from "@/pages/knowledge/diseases/DiseasesDiabetesPage.tsx";
import KnowledgeDiseasesHivAidsPage from "@/pages/knowledge/diseases/DiseasesHivAidsPage.tsx";
import KnowledgeDiseasesMalariaPage from "@/pages/knowledge/diseases/DiseasesMalariaPage.tsx";
import KnowledgeDiseasesTyphoidPage from "@/pages/knowledge/diseases/DiseasesTyphoidPage.tsx";
import KnowledgeMentalHealthAnxietyPage from "@/pages/knowledge/mentalhealth/MentalHealthAnxietyPage.tsx";
import KnowledgeMentalHealthDepressionPage from "@/pages/knowledge/mentalhealth/MentalHealthDepressionPage.tsx";
import KnowledgeMentalHealthAutismPage from "@/pages/knowledge/mentalhealth/MentalHealthAutismPage.tsx";
import KnowledgeMentalHealthDyslexiaPage from "@/pages/knowledge/mentalhealth/MentalHealthDyslexiaPage.tsx";
import KnowledgeInsuranceNhifPage from "@/pages/knowledge/insurance/InsuranceNhifPage.tsx";
import KnowledgeMentalHealthUniversalHealthCasePage from "@/pages/knowledge/insurance/InsuranceUniversalHealthCasePage.tsx";
import KnowledgeFirstAidPage from "@/pages/knowledge/KnowledgeFirstAidPage.tsx";
import FirstAidChokingPage from "@/pages/knowledge/firstaid/FirstAidChokingPage.tsx";
import FirstAidFaintingPage from "@/pages/knowledge/firstaid/FirstAidFaintingPage.tsx";
import FirstAidNoseBleedPage from "@/pages/knowledge/firstaid/FirstAidNoseBleedPage.tsx";
import KnowledgeExercisePage from "@/pages/knowledge/KnowledgeExercisePage.tsx";

export default function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainPageLayout />,
            errorElement: <PageNotFound />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/knowledge",
                    element: <KnowledgePage />
                },
                {
                    path: "/mymedicine",
                    element: <MyMedicinePage />
                },
                {
                    path: "/emergencycontacts",
                    element: <EmergencyContactPage />
                },
                {
                    path: '/knowledge/organs',
                    element: <KnowledgeOrgansPage />
                },
                {
                    path: '/knowledge/organs/brain',
                    element: <KnowledgeOrgansBrainPage />
                },
                {
                    path: '/knowledge/organs/heart',
                    element: <KnowledgeOrgansHeartPage />
                },
                {
                    path: '/knowledge/organs/kidney',
                    element: <KnowledgeOrgansKidneyPage />
                },
                {
                    path: '/knowledge/organs/liver',
                    element: <KnowledgeOrgansLiverPage />
                },
                {
                    path: '/knowledge/organs/lung',
                    element: <KnowledgeOrgansLungPage />
                },
                {
                    path: '/knowledge/organs/skin',
                    element: <KnowledgeOrgansSkinPage />
                },
                {
                    path: '/knowledge/organs/stomach',
                    element: <KnowledgeOrgansStomachPage />
                },
                {
                    path: '/knowledge/diseases',
                    element: <KnowledgeDiseasesPage />
                },
                {
                    path: '/knowledge/diseases/breastcancer',
                    element: <KnowledgeDiseasesBreastCancerPage />
                },
                {
                    path: '/knowledge/diseases/cholera',
                    element: <KnowledgeDiseasesCholeraPage />
                },
                {
                    path: '/knowledge/diseases/diabetes',
                    element: <KnowledgeDiseasesDiabetesPage />
                },
                {
                    path: '/knowledge/diseases/hivaids',
                    element: <KnowledgeDiseasesHivAidsPage />
                },
                {
                    path: '/knowledge/diseases/malaria',
                    element: <KnowledgeDiseasesMalariaPage />
                },
                {
                    path: '/knowledge/diseases/typhoid',
                    element: <KnowledgeDiseasesTyphoidPage />
                },
                {
                    path: '/knowledge/exercise',
                    element: <KnowledgeExercisePage />
                },
                {
                    path: '/knowledge/mentalhealth',
                    element: <KnowledgeMentalHealthPage />
                },
                {
                    path: '/knowledge/mentalhealth/anxiety',
                    element: <KnowledgeMentalHealthAnxietyPage />
                },
                {
                    path: '/knowledge/mentalhealth/autism',
                    element: <KnowledgeMentalHealthAutismPage />
                },
                {
                    path: '/knowledge/mentalhealth/depression',
                    element: <KnowledgeMentalHealthDepressionPage />
                },
                {
                    path: '/knowledge/mentalhealth/dyslexia',
                    element: <KnowledgeMentalHealthDyslexiaPage />
                },
                {
                    path: '/knowledge/insurance',
                    element: <KnowledgeInsurancePage />
                },
                {
                    path: '/knowledge/insurance/nhif',
                    element: <KnowledgeInsuranceNhifPage />
                },
                {
                    path: '/knowledge/insurance/uhc',
                    element: <KnowledgeMentalHealthUniversalHealthCasePage />
                },
                {
                    path: '/knowledge/firstaid',
                    element: <KnowledgeFirstAidPage />
                },
                {
                    path: '/knowledge/firstaid/choking',
                    element: <FirstAidChokingPage />
                },
                {
                    path: '/knowledge/firstaid/fainting',
                    element: <FirstAidFaintingPage />
                },
                {
                    path: '/knowledge/firstaid/nosebleeding',
                    element: <FirstAidNoseBleedPage />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}
