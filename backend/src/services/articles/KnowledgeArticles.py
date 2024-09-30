from enum import Enum

from models.KnowledgeArticle import KnowledgeOrgansArticleType, KnowledgeDiseasesArticleType, \
    KnowledgeExercisesArticleType, KnowledgeFirstAidsArticleType, KnowledgeMentalHealthArticleType, \
    KnowledgeInsuranceArticleType


class KnowledgeOrgansArticleSubsection(Enum):
    INTRODUCTION = "introduction"
    STRUCTURE = "structure"
    FUNCTIONS = "functions"
    COMPLICATIONS = "complications"

class KnowledgeDiseaseArticleSubsection(Enum):
    INTRODUCTION = 'introduction'
    SIGNS_AND_SYMPTOMS = 'signs and symptoms'
    CAUSES = 'causes'
    DIAGNOSIS = 'diagnosis'
    TREATMENT = 'treatment'
    PREVENTION = 'prevention'

class KnowledgeExerciseArticleSubsection(Enum):
    INTRODUCTION = 'introduction'
    STEPS = 'steps'
    BENEFITS = 'benefits'
    VARIATIONS = 'variations'
    COMMON_MISTAKES_TO_AVOID = 'common_mistakes_to_avoid'

class KnowledgeFirstAidArticleSubsection(Enum):
    CHOCKING = 'chocking'
    FAINTING = 'fainting'
    NOSE_BLEEDING = 'nose bleeding'

class KnowledgeMentalHealthArticleSubsection(Enum):
    INTRODUCTION = 'introduction'
    IDENTIFYING = 'identifying'
    CAUSES = 'causes'
    DEALING = 'dealing'
    HELPING = 'helping'
    PREVENTION_AND_AVOIDANCE = 'prevention and avoidance'

class KnowledgeInsuranceArticleSubsection(Enum):
    INTRODUCTION = 'introduction'

class KnowledgeArticleService:

    @staticmethod
    def print_knowledge_organs_article_subsection(
            organ: KnowledgeOrgansArticleType,
            subsection: KnowledgeOrgansArticleSubsection
    ):
        if organ == KnowledgeOrgansArticleType.BRAIN:
            if subsection == KnowledgeOrgansArticleSubsection.INTRODUCTION:
                return """ AfyaYangu\nIntroduction to the Brain\n\nThe brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger and every process that regulates our body.\n"""

            elif subsection == KnowledgeOrgansArticleSubsection.STRUCTURE:
                return """AfyaYangu\nStructure of the Brain\n\nThe brain can be divided into three parts: cerebrum, brainstem and cerebellum.\nCerebrum:\n\tIt is the largest part of the brain and each hemishphere and can be divided into: Frontal lobe, Parietal lobe, Occipital lobe and Temporal lobe.\nBrain Stem:\n\tThe brain stem connects the cerebrum with the spinal cord. It includes the midbrain, the pons and the medulla\nCerebellum:\n\tIts function is to coordinate voluntary muscle movements and to maintain posture, balance and equilibrium.\n"""

            elif subsection == KnowledgeOrgansArticleSubsection.FUNCTIONS:
                return """AfyaYangu
                Functions of the Brain
                
                The brain's primary functions include controlling thought, memory, emotion, motor skills, vision, breathing, and many more bodily processes. Each region of the brain contributes to specific functions:
                    • Cerebrum: Handles complex processes like decision-making, emotions, and memory.
                    • Brainstem: Manages basic life functions like breathing, heart rate, and reflexes.
                    • Cerebellum: Coordinates movement and helps maintain balance.
                """

            elif subsection == KnowledgeOrgansArticleSubsection.COMPLICATIONS:
                return """AfyaYangu
                Common Complications of the Brain
                
                There are several potential complications and issues related to brain health, including:
                    • Traumatic Brain Injury (TBI): Resulting from impacts to the head, TBIs can affect cognitive and motor functions.
                    • Stroke: A lack of blood flow to the brain can cause damage to brain tissue, leading to paralysis, speech problems, or cognitive impairments.
                    • Dementia and Alzheimer’s Disease: Neurodegenerative disorders that affect memory, thinking, and behavior.
                    • Brain Tumors: Abnormal cell growth in the brain can affect various functions depending on the tumor's location.
                    • Epilepsy: A neurological disorder characterized by recurrent seizures caused by abnormal brain activity.
                """
        elif organ == KnowledgeOrgansArticleType.HEART:
            return """AfyaYangu
            This section has not been implemented yet.
            """

        elif organ == KnowledgeOrgansArticleType.KIDNEY:
            return """AfyaYangu
            This section has not been implemented yet.
            """

        elif organ == KnowledgeOrgansArticleType.LIVER:
            return """AfyaYangu
            This section has not been implemented yet.
            """

        elif organ == KnowledgeOrgansArticleType.LUNGS:
            return """AfyaYangu
            This section has not been implemented yet.
            """

        elif organ == KnowledgeOrgansArticleType.SKIN:
            return """AfyaYangu
            This section has not been implemented yet.
            """

        elif organ == KnowledgeOrgansArticleType.STOMACH:
            return """AfyaYangu
            This section has not been implemented yet.
            """

    @staticmethod
    def print_knowledge_diseases_article_subsection(
        disease: KnowledgeDiseasesArticleType,
        subsection: KnowledgeDiseaseArticleSubsection
    ):
        if disease == KnowledgeDiseasesArticleType.BREAST_CANCER:
            if subsection == KnowledgeDiseaseArticleSubsection.INTRODUCTION:
                return """AfyaYangu
                Introduction to Breast Cancer
                
                Breast cancer is a type of cancer that begins in the cells of the breast. It is one of the most common cancers worldwide, affecting millions of people, particularly women, although men can also develop it. Early detection and treatment are essential for improving the outcomes of breast cancer.
                """
            elif subsection == KnowledgeDiseaseArticleSubsection.SIGNS_AND_SYMPTOMS:
                return """AfyaYangu
                Signs and Symptoms of Breast Cancer
                
                Breast cancer may not cause noticeable symptoms in the early stages. However, as the cancer progresses, some common signs and symptoms include:
                    - Lump or thickening: A new lump or mass in the breast or underarm is often the most common sign of breast cancer. It can be painless, hard, or have irregular edges.
                    - Changes in breast size or shape: A sudden change in the size, shape, or appearance of the breast may indicate a problem.
                    - Skin changes: The skin of the breast may become red, dimpled (resembling an orange peel), or thickened.
                    - Nipple discharge: Discharge from the nipple, particularly if it is bloody or occurs without squeezing, can be a sign of breast cancer.
                    - Nipple changes: Inversion (nipple turning inward), scaling, or changes in the appearance of the nipple.
                    - Pain: While breast cancer is not usually painful, any new or persistent breast pain should be evaluated by a healthcare provider.

                If you experience any of these symptoms, it is crucial to visit a medical center for a thorough evaluation and diagnosis.
                """

            elif subsection == KnowledgeDiseaseArticleSubsection.CAUSES:
                return """AfyaYangu
                Causes of breast cancer
                
                The exact causes of breast cancer are not fully understood, but a combination of genetic, environmental, and lifestyle factors may contribute to its development. Some known causes and risk factors include:
                    - Genetic mutations: Certain inherited genetic mutations, such as BRCA1 and BRCA2, increase the risk of developing breast cancer.
                    - Family history: Having close relatives (mother, sister, or daughter) with breast cancer increases the risk of the disease.
                    - Hormonal factors: Long-term exposure to estrogen, such as from early menstruation or late menopause, can elevate breast cancer risk.
                    - Age: The risk of breast cancer increases as a person ages, with most cases diagnosed in women over 50.
                    - Lifestyle factors: Obesity, alcohol consumption, smoking, and lack of physical activity can contribute to a higher risk of breast cancer.
                """

            elif subsection == KnowledgeDiseaseArticleSubsection.DIAGNOSIS:
                return """AfyaYangu
                Diagnosis of Breast Cancer
                
                Diagnosing breast cancer involves a variety of tests, and it is crucial to visit a medical center if any symptoms are present or during routine check-ups. Common diagnostic methods include:
                    - Mammogram: A low-dose X-ray of the breast used to detect abnormalities or lumps. It is one of the most effective early screening tools for breast cancer.
                    - Ultrasound: An imaging technique that uses sound waves to create images of the breast tissue, often used to examine lumps found during a physical exam or mammogram.
                    - Biopsy: A biopsy involves removing a small sample of breast tissue to determine if it contains cancerous cells. This is the definitive test for diagnosing breast cancer.
                    - Breast MRI: An MRI (Magnetic Resonance Imaging) may be recommended in certain cases to provide detailed images of the breast tissue.
                
                If you notice any symptoms, always seek a healthcare provider for evaluation and possible diagnostic tests. Early detection significantly increases the chance of successful treatment.
                """
            elif subsection == KnowledgeDiseaseArticleSubsection.TREATMENT:
                return """AfyaYangu
                Treatment for breast cancer
                
                Treatment for breast cancer depends on several factors, including the type and stage of the cancer, as well as the patient’s overall health. Treatment options can include:
                    - Surgery: Surgical options may involve a lumpectomy (removing the tumor) or mastectomy (removing one or both breasts). Lymph nodes may also be removed to check for cancer spread.
                    - Radiation Therapy: This treatment uses high-energy rays to target and destroy cancer cells in the breast tissue or lymph nodes.
                    - Chemotherapy: Chemotherapy involves using drugs to kill or slow the growth of cancer cells. It may be administered before surgery (neoadjuvant therapy) or after surgery (adjuvant therapy).
                    - Hormonal Therapy: If the breast cancer is hormone receptor-positive, hormonal therapy may be used to block the effects of estrogen or progesterone, which can promote cancer growth.
                    - Targeted Therapy: Targeted therapies focus on specific characteristics of cancer cells, such as proteins that fuel cancer growth, and aim to block these processes.
                Treatment decisions should always be made in consultation with a medical professional. Visiting a medical center is essential to receive personalized treatment and care for breast cancer.
                """
            elif subsection == KnowledgeDiseaseArticleSubsection.PREVENTION:
                return """AfyaYangu
                Prevention and Risk Factors of breast cancer
                
                Although breast cancer cannot always be prevented, there are steps individuals can take to reduce their risk:
                    - Maintain a healthy weight: Obesity increases the risk of developing breast cancer, especially after menopause.
                    - Exercise regularly: Physical activity helps to regulate hormones and boost immune function, reducing breast cancer risk.
                    - Limit alcohol consumption: Drinking alcohol is linked to an increased risk of breast cancer. Limiting alcohol intake can lower this risk.
                    - Avoid smoking: Smoking is linked to various cancers, including breast cancer.
                    - Regular screenings: Routine mammograms and self-examinations are key to detecting breast cancer early when it is most treatable. Individuals at higher risk may need additional screening tests.
                    - Genetic testing: If you have a family history of breast cancer, genetic testing for BRCA mutations may help identify if you are at increased risk and need preventive measures.
                
                By adopting healthy lifestyle habits and attending regular screenings, you can reduce your risk of developing breast cancer. Always consult a healthcare provider to discuss your risk and appropriate prevention strategies.
                """
        elif disease == KnowledgeDiseasesArticleType.CHOLERA:
            return """AfyaYangu\nThis section has not been implemented yet.\n"""

        elif disease == KnowledgeDiseasesArticleType.DIABETES:
            return """AfyaYangu\nThis section has not been implemented yet.\n"""

        elif disease == KnowledgeDiseasesArticleType.HIVAIDS:
            return """AfyaYangu\nThis section has not been implemented yet.\n"""

        elif disease == KnowledgeDiseasesArticleType.MALARIA:
            return """AfyaYangu\nThis section has not been implemented yet.\n"""

        elif disease == KnowledgeDiseasesArticleType.TYPHOID:
            return """AfyaYangu\nThis section has not been implemented yet.\n"""

    @staticmethod
    def print_knowledge_exercise_article_subsection(
        exercise: KnowledgeExercisesArticleType,
        subsection: KnowledgeExerciseArticleSubsection
    ):
        return """AfyaYangu
        This section has not been implemented yet.
        """

    @staticmethod
    def print_knowledge_first_aid_subsection(
        firstaid: KnowledgeFirstAidsArticleType,
        subsection: KnowledgeFirstAidArticleSubsection
    ):
        return """AfyaYangu
        This section has not been implemented yet.
        """

    @staticmethod
    def print_knowledge_mental_health_subsection(
        mentalhealth: KnowledgeMentalHealthArticleType,
        subsection: KnowledgeMentalHealthArticleSubsection
    ):
        return """AfyaYangu
        This section has not been implemented yet.
        """

    @staticmethod
    def print_knowledge_insurance_subsection(
        insurance: KnowledgeInsuranceArticleType,
        subsection: KnowledgeInsuranceArticleSubsection
    ):
        return """AfyaYangu
        This section has not been implemented yet.
        """
