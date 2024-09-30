import {AppLanguage} from "@/context/AppLanguageContext.ts";


export class LanguageTranslation {
    english: string = ""
    swahili: string = ""
    kikuyu: string = ""

    constructor(
        english: string,
        swahili: string,
        kikuyu: string
    ) {
        this.english = english
        this.swahili = swahili
        this.kikuyu = kikuyu
    }

    getTranslation(appLanguage: AppLanguage): string {
        switch (appLanguage) {
            case AppLanguage.English:
                return this.english
            case AppLanguage.Swahili:
                return this.swahili
            case AppLanguage.Kikuyu:
                return this.kikuyu
            default:
                throw new Error()
        }
    }

}

export const LanguageTranslations = {

    /* Language Translations */
    languageName: new LanguageTranslation('English', 'Swahili', 'G\u0129k\u0169y\u0169'),
    language: new LanguageTranslation('Language', 'Lugha', 'R\u0169thiomi',),
    chooseLanguage: new LanguageTranslation('Choose language', 'Chagua lugha', 'Thuura R\u0169thiomi'),
    english: new LanguageTranslation('English', 'Kizungu', 'G\u0129th\u0169ng\u0169'),
    swahili: new LanguageTranslation('Swahili', 'Swahili', 'G\u0129thwer\u0129'),
    kikuyu: new LanguageTranslation('Kikuyu', 'Kikuyu', 'G\u0129k\u0169y\u0169'),

    /* Account Translations */
    logIn: new LanguageTranslation('Log In', 'Ingia Akaunti', 'Ing\u0129ra Akaunti'),
    logOut: new LanguageTranslation('Log Out', 'Toa Akaunti', 'Ruta Akaunti'),
    createNewAccount: new LanguageTranslation('Create Account', 'Tengeneza Akaunti', 'Thondeka Akaunti'),
    firstName: new LanguageTranslation('First Name', 'Jina ya Kwanza', 'R\u0129twa r\u0129a mbere'),
    lastName: new LanguageTranslation('Last Name', 'Jina ya Mwisho', 'R\u0129twa r\u0129a mwisho'),
    phoneNumber: new LanguageTranslation('Phone Number', 'Nambari ya Simu', 'Namba ya Thimu'),
    password: new LanguageTranslation('Password', 'NenoSiri', 'Kiugo k\u0129a kuh\u0129ng\u0169ra'),

    /* Page Options */
    pageHome: new LanguageTranslation('Home', 'Nyumbani', 'M\u0169c\u0129\u0129'),
    pageKnowledge: new LanguageTranslation('Knowledge', 'Ujumbe', '\u0168menyo'),
    pageMedicine: new LanguageTranslation('Medicine', 'Dawa', 'Dawa'),
    pageEmergencyContacts: new LanguageTranslation('Emergency Contacts', 'Nambari za Usaidizi', 'Namba cia uteithio'),

    /* Knowledge Translations */
    knowledgePageDescription: new LanguageTranslation('This page avails medical information to anyone for the purpose of self-learning or tutoring others', 'Ukurasa huu una maelezo ya matibabu ambayo yanaweza kutumika kujifunza au kuelimisha mtu yeyote', 'G\u0129cunj\u0129 hiki k\u0129na \u0169horo wa \u0169gima wa mw\u0129r\u0129'),
    knowledgeSubSections: new LanguageTranslation('Sections', 'Sehemu', 'Icunj\u0129'),
    knowledgeOrgans: new LanguageTranslation('Organs', 'Viungo', 'Icunj\u0129 cia mw\u0129r\u0129'),
    knowledgeOrgansDescription: new LanguageTranslation('Learn more about the human organs, including the skin, heart and other organs', 'Soma kuhusu viungo vya binadamu, kama vile, ubongo, ngozi na moyo', 'Thoma uigie icunj\u0129 cia mw\u0129r\u0129 wa mundu ta akiri, ngoro na ngothi'),
    knowledgeDiseases: new LanguageTranslation('Diseases', 'Magonjwa', 'M\u0129rim\u0169'),
    knowledgeDiseasesDescription: new LanguageTranslation('Learn more about the diseases that affect the human body', 'Soma kuhusu magonjwa yanayoathiri mwili wa binadamu', 'Thoma uigie M\u0129rim\u0169 \u0129r\u0129a inyitaga mw\u0129r\u0129 wa m\u0169nd\u0169'),
    knowledgeMentalHeath: new LanguageTranslation('Mental Health', 'Hali ya Akili', '\u0168gima wa meciria'),
    knowledgeMentalHealthDescription: new LanguageTranslation('Gain knowledge about your mental health. This includes diseases, disorders, treatments and prevention', 'Soma kuhusu hali ya akili', ''),
    knowledgeInsurance: new LanguageTranslation('Insurance', 'Bima', '\u0168rigiti'),
    knowledgeInsuranceDescription: new LanguageTranslation('Learn more about insurance options available to you, including registration and their coverage', 'Soma kuhusu bima zilizoweza kukusaidia na pia kuhusu jinsi ya kusajiri na kufaidika', 'Thoma uigie \u0169rigiti na \u0169ria \u0169ngeteitheka'),
    knowledgeExercise: new LanguageTranslation('Exercise', 'Mazoezi', 'Mazoezi'),
    knowledgeExerciseDescription: new LanguageTranslation('Learn more about physical exercise activities to make you fit', 'Soma kuhusu mazoezi itakayoboresha afya yako ya kimwili', 'Thoma \u0169igie mazoezi ma g\u0169g\u0169teithia mw\u0129r\u0129 waku'),
    knowledgeFirstAid: new LanguageTranslation('First Aid', 'Msaada wa kwanza', '\u0168teithio wa mbere'),
    knowledgeFirstAidDescription: new LanguageTranslation('Learn more on how to offer emergency medical assistance', 'Soma kuhusu jinsi unavyoweza peana usaidizi wa kidharura wa kiafya', 'Thoma \u0169ria \u0169ngihota k\u0169neana \u0169teithio wa naihenya'),

    /* Knowledge Organs Articles */
    //<editor-fold desc="Knowledge Organs Articles">
    knowledgeOrgansBrainTitle: new LanguageTranslation('Brain', 'Ubongo', 'Tombo'),
    knowledgeOrgansBrainDescription: new LanguageTranslation('The structure and functions of the human brain', 'Soma kuhusu ubongo wa binadamu na kazi yake', 'Thome \u0169igie tombo wa m\u0169nd\u0169 na w\u0129ra wake'),
    knowledgeOrgansHeartTitle: new LanguageTranslation('Heart', 'Moyo', 'Ngoro'),
    knowledgeOrgansHeartDescription: new LanguageTranslation('The structure and functions of the human heart', 'Soma kuhusu moyo wa binadamu na kazi yake', 'Tombo'),
    knowledgeOrgansKidneyTitle: new LanguageTranslation('Kidney', 'Figo', 'Higo'),
    knowledgeOrgansKidneyDescription: new LanguageTranslation('The structure and functions of the human kidney', 'Ubongo', 'Tombo'),
    knowledgeOrgansLiverTitle: new LanguageTranslation('Liver', 'Ini', 'Ini'),
    knowledgeOrgansLiverDescription: new LanguageTranslation('The structure and functions of the human liver', 'Ubongo', 'Tombo'),
    knowledgeOrgansLungTitle: new LanguageTranslation('Lung', 'Mapafu', 'Mah\u0169ri'),
    knowledgeOrgansLungDescription: new LanguageTranslation('The structure and functions of the human lung', 'Ubongo', 'Tombo'),
    knowledgeOrgansSkinTitle: new LanguageTranslation('Skin', 'Ngozi', 'Ngothi'),
    knowledgeOrgansSkinDescription: new LanguageTranslation('The structure and functions of the human skin', 'Ubongo', 'Tombo'),
    knowledgeOrgansStomachTitle: new LanguageTranslation('Stomach', 'Tumbo', 'Da'),
    knowledgeOrgansStomachDescription: new LanguageTranslation('The structure and functions of the human stomach', 'Ubongo', 'Tombo'),
    //</editor-fold>

    // <editor-fold desc="Knowledge Diseases Articles">
    knowledgeDiseasesBreastCancerTitle: new LanguageTranslation('Breast Cancer', 'Saratani ya Matiti', 'Cancer ya Nyondo'),
    knowledgeDiseasesBreastCancerDescription: new LanguageTranslation('Learn more on breast cancer and its diagnosis', '', 'Cancer ya Nyondo'),
    knowledgeDiseasesCholeraTitle: new LanguageTranslation('Cholera', 'Kipindupindu', 'Cholera'),
    knowledgeDiseasesCholeraDescription: new LanguageTranslation('Learn more on cholera, its prevention and diagnosis', '', 'Cancer ya Nyondo'),
    knowledgeDiseasesDiabetesTitle: new LanguageTranslation('Diabetes', 'Kisukari', 'M\u0169rim\u0169 wa sukari'),
    knowledgeDiseasesDiabetesDescription: new LanguageTranslation('Learn more on diabetes and its diagnosis', '', 'Cancer ya Nyondo'),
    knowledgeDiseasesHivAidsTitle: new LanguageTranslation('HIV/AIDS', 'Ukimwi', 'M\u0169kingo'),
    knowledgeDiseasesHivAidsDescription: new LanguageTranslation('Learn more on HIV and AIDS and its prevention', '', 'Cancer ya Nyondo'),
    knowledgeDiseasesMalariaTitle: new LanguageTranslation('Malaria', 'Malaria', 'Malaria'),
    knowledgeDiseasesMalariaDescription: new LanguageTranslation('Learn more on malaria, its prevention and diagnosis', '', 'Cancer ya Nyondo'),
    knowledgeDiseasesTyphoidTitle: new LanguageTranslation('Typhoid', 'Typhoid', 'Typhoid'),
    knowledgeDiseasesTyphoidDescription: new LanguageTranslation('Learn more on cholera, its prevention and diagnosis', 'Soma kuhusu ugonjwa wa Typhoid na jinsi ya kujikinga', 'Cancer ya Nyondo'),
    // </editor-fold>

    // <editor-fold desc="Knowledge Mental Health Articles">
    knowledgeMentalHealthAnxietyTitle: new LanguageTranslation('Anxiety', '', ''),
    knowledgeMentalHealthAnxietyDescription: new LanguageTranslation('Anxiety', '', ''),
    knowledgeMentalHealthAutismTitle: new LanguageTranslation('Autism', 'Usonji', ''),
    knowledgeMentalHealthAutismDescription: new LanguageTranslation('Autism', 'Usonji', ''),
    knowledgeMentalHealthDepressionTitle: new LanguageTranslation('Depression', 'Huzuni', ''),
    knowledgeMentalHealthDepressionDescription: new LanguageTranslation('Depression', '', ''),
    knowledgeMentalHealthDyslexiaTitle: new LanguageTranslation('Dyslexia', 'Dyslexia', ''),
    knowledgeMentalHealthDyslexiaDescription: new LanguageTranslation('Dyslexia', 'Dyslexia', ''),
    knowledgeMentalHealthPtsdTitle: new LanguageTranslation('PTSD', '', ''),
    knowledgeMentalHealthPtsdDescription: new LanguageTranslation('Post Traumatic Stress Disorder', '', ''),
    // </editor-fold>

    // <editor-fold desc="Knowledge Insurance Articles">
    knowledgeInsuranceNhifTitle: new LanguageTranslation('NHIF', 'NHIF', 'NHIF'),
    knowledgeInsuranceNhifDescription: new LanguageTranslation('NHIF', 'NHIF', 'NHIF'),
    knowledgeInsuranceUniversalHealthCareTitle: new LanguageTranslation('Universal Health Care', 'Universal Health Care', 'Universal Health Care'),
    knowledgeInsuranceUniversalHealthCareDescription: new LanguageTranslation('Universal Health Care', 'Universal Health Care', 'Universal Health Care'),
    // </editor-fold>

    // <editor-fold desc="Knowledge First Aid Articles">
    knowledgeFirstAidChokingTitle: new LanguageTranslation('Choking', 'Kujinyonga', 'G\u0169itwo'),
    knowledgeFirstAidChokingDescription: new LanguageTranslation('How to perform first aid on choking individual', 'Jinsi ya kusaidia mtu anayenyongwa', '\u0168ria \u0169ng\u0129teithia m\u0169nd\u0169 araitwo'),
    knowledgeFirstAidFaintingTitle: new LanguageTranslation('Fainting', 'Kuzirai', 'G\u0169itwo'),
    knowledgeFirstAidFaintingDescription: new LanguageTranslation('How to perform first aid on a fainted individual', 'Jinsi ya kusaidia mtu ambaye amezirai', '\u0168ria \u0169ng\u0129teithia m\u0169nd\u0169 araitwo'),
    knowledgeFirstAidNoseBleedTitle: new LanguageTranslation('Nose Bleeding', 'Kutoka damu kwa mapua', 'G\u0169itwo'),
    knowledgeFirstAidNoseBleedDescription: new LanguageTranslation('How to perform first aid on a nose bleeding individual', 'Jinsi ya kusaidia mtu ambaye amezirai', '\u0168ria \u0169ng\u0129teithia m\u0169nd\u0169 araitwo'),
    // </editor-fold>


    // <editor-fold desc="Knowledge Exercise Articles">
    knowledgeExercisePushUpTitle: new LanguageTranslation('Push Ups', 'Mazoezi ya kujiinua', ''),
    knowledgeExercisePushUpDescription: new LanguageTranslation('Learn how to perform push up exercises', 'Mazoezi ya kujiinua', ''),
    // </editor-fold>

    /* Emergency Contacts Translations */


    // <editor-fold desc="Medicine Translations">
    medicineMyDosage: new LanguageTranslation('My Dosages', 'Dozi zangu' ,'Dawa Ciakwa'),
    medicineMyDosageDescription: new LanguageTranslation('These are the medications you are supposed to take', 'Hizi ndizo dawa unazofaa kuchukua kwa muda ujao' ,'Ici nicio dawa ufatie kunyua kahida karoka'),
    medicineMyPrescriptions: new LanguageTranslation('My Prescriptions', 'Maagizo ya daktari', 'Makinya ma dagitari'),
    medicineAvailableMedicine: new LanguageTranslation('Available Medicine', 'Dawa zinazopatikana','Dawa iria iri duka'),


    // </editor-fold>

    /* AI Options */
    aiAsk: new LanguageTranslation('Ask Peter', 'Uliza Petero', 'Uria Peter'),

    /* Misc Translations */
    pageNotFound: new LanguageTranslation('Page Not Found', 'Ukurasa Hupatikani', 'G\u0129cunj\u0129 g\u0129tironekana'),
    pageNotFoundDescription: new LanguageTranslation('The URL does not belong to a recognized page', 'Wavuti iliyopitishwa haipatikani kwa kurasa katika tovuti', 'T\u0169ting\u0129hota kuona g\u0129cunj\u0129'),
    goToHomePage: new LanguageTranslation('Go To Home', 'Enda Nyumbani', 'Coka M\u0169c\u0129\u0129'),
    learn: new LanguageTranslation('Learn', 'Soma', 'Thoma'),

    ask: new LanguageTranslation('Ask', 'Uliza', 'Uria'),
    speak: new LanguageTranslation('Speak', 'Ongea', 'Aria'),

    search: new LanguageTranslation('Search', 'Tafuta', 'Car\u0129a'),
    loading: new LanguageTranslation('Loading', 'Ngoja', 'Eterera'),
    pageIsLoadingArticle: new LanguageTranslation('Please be patient while the page is loading the article. The page will be ready in a few seconds', 'Tafadhali kuwa na subira wakati ukurasa unapakia makala. Ukurasa utakuwa tayari katika sekunde chache', 'Eterera. T\u0169rahar\u0129ria m\u0169horo maku'),

    articleNoTranslation: new LanguageTranslation('No Available Translation', 'Hakuna tafsiri inayopatikana', 'G\u0169t\u0129r\u0129 \u0169horo na G\u0129k\u0169y\u0169'),
    articleNoTranslationDescription: new LanguageTranslation('The article is not available in English. Please use the available language options', 'Makala hayapatikani kwa Kiingereza. Tafadhali tumia chaguo za lugha zinazopatikana', 'Uhoro uyu utiandikatwo na Gikuyu. Nu utumire na ruthiomi rugi'),

}

