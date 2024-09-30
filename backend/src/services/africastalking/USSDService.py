from typing import List

from models import KnowledgeArticle
from models.KnowledgeArticle import KnowledgeOrgansArticleType, KnowledgeDiseasesArticleType
from services.africastalking.AfricasTalkingRepository import AfricasTalkingRepository
from services.africastalking.SMSService import SMSService
from services.articles.KnowledgeArticles import KnowledgeOrgansArticleSubsection, KnowledgeDiseaseArticleSubsection


class UssdService:

    @staticmethod
    def handle_ussd_request(
            africas_talking_repository: AfricasTalkingRepository,
            user_text: str,
            phone_number: str
    ) -> str:
        user_text_splits = user_text.split('*')

        # implement a stack to process the back decisions
        input_stream_stack = []

        for user_text_split in user_text_splits:
            if user_text_split == '0':
                if input_stream_stack and len(input_stream_stack) > 0:
                    input_stream_stack.pop() # Pop the previous entry
            else:
                input_stream_stack.append(user_text_split) # Append the item to the stack


        if input_stream_stack[len(input_stream_stack) - 1] == '00':
            if input_stream_stack[0] == '1':
                return "END " + UssdService._print_exit_message_english()
            elif input_stream_stack[0] == '2':
                return "END " + UssdService._print_exit_message_swahili()
            else:
                return "END " + UssdService._print_exit_message_any_language()



        return UssdService._perform_ussd_action(
            africas_talking_repository,
            input_stream_stack,
            phone_number
        )

    @staticmethod
    def _perform_ussd_action(
            africas_talking_repository: AfricasTalkingRepository,
            user_action_text: List[str],
            phone_number: str
    ) -> str:

        def handle_language(current_input: List[str]) -> str:
            if len(current_input) > 0 and current_input[0] == '1':
                return handle_english(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '2':
                return handle_swahili(current_input[1:])
            elif len(current_input) > 1:
                # There are still parcelable inputs
                return handle_language(current_input[1:])
            else:
                return "CON " + UssdService._print_language_menu()

        def handle_english(current_input: List[str]) -> str:
            if len(current_input) > 0 and current_input[0] == '1':
                return handle_english_knowledge(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '2':
                return handle_english_mymedicine(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '3':
                return handle_english_emergencycontacts(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '4':
                return handle_english_aiservices(current_input[1:])
            elif len(current_input) > 1:
                # There are still parcelable inputs
                return handle_english(current_input[1:])
            else:
                return "CON " + UssdService._print_main_menu_english()

        def handle_swahili(current_input: List[str]) -> str:
            return "END " + UssdService._print_unimplemented_section_swahili()

        def handle_english_knowledge(current_input: List[str]) -> str:
            if len(current_input) > 0 and current_input[0] == '1':
                return handle_english_knowledge_organs(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '2':
                return handle_english_knowledge_diseases(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '3':
                return handle_english_knowledge_exercises(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '4':
                return handle_english_knowledge_firstaid(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '5':
                return handle_english_knowledge_mentalhealth(current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '6':
                return handle_english_knowledge_insurance(current_input[1:])
            elif len(current_input) > 1:
                # There are still parcelable inputs
                return handle_english_knowledge(current_input[1:])
            else:
                return "CON " + UssdService._print_knowledge_menu_english()

        def handle_english_mymedicine(current_input: List[str]) -> str:
            return "END " + UssdService._print_unimplemented_section_english()

        def handle_english_emergencycontacts(current_input: List[str]) -> str:
            return "END " + UssdService._print_unimplemented_section_english()

        def handle_english_aiservices(current_input: List[str]) -> str:
            return "END " + UssdService._print_unimplemented_section_english()

        def handle_english_knowledge_organs(current_input: List[str]) -> str:

            if len(current_input) > 0 and current_input[0] == '1':
                return handle_english_knowledge_organs_subsection(KnowledgeOrgansArticleType.BRAIN, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '2':
                return handle_english_knowledge_organs_subsection(KnowledgeOrgansArticleType.HEART, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '3':
                return handle_english_knowledge_organs_subsection(KnowledgeOrgansArticleType.KIDNEY, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '4':
                return handle_english_knowledge_organs_subsection(KnowledgeOrgansArticleType.LIVER, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '5':
                return handle_english_knowledge_organs_subsection(KnowledgeOrgansArticleType.LUNGS, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '6':
                return handle_english_knowledge_organs_subsection(KnowledgeOrgansArticleType.SKIN, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '7':
                return handle_english_knowledge_organs_subsection(KnowledgeOrgansArticleType.STOMACH, current_input[1:])
            elif len(current_input) > 1:
                # There are still parcelable inputs
                return handle_english_knowledge_organs(current_input[1:])
            else:
                return "CON " + UssdService._print_knowledge_organs_english()

        def handle_english_knowledge_organs_subsection(
                organ: KnowledgeOrgansArticleType,
                current_input: List[str]
        ) -> str:
            if len(current_input) > 0 and current_input[0] == '1':
                # Send article on introduction

                SMSService.send_knowledge_organ_article_sms(
                    africas_talking_repository,
                    phone_number,
                    organ,
                    KnowledgeOrgansArticleSubsection.INTRODUCTION
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 0 and current_input[0] == '2':
                # Send article on

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    organ,
                    KnowledgeOrgansArticleSubsection.STRUCTURE
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 0 and current_input[0] == '3':
                # Send article on

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    organ,
                    KnowledgeOrgansArticleSubsection.FUNCTIONS
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 0 and current_input[0] == '4':
                # Send article on

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    organ,
                    KnowledgeOrgansArticleSubsection.COMPLICATIONS
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 1:
                # There are still parcelable inputs
                return handle_english_knowledge_organs_subsection(organ, current_input[1:])
            else:
                return "CON " + UssdService._print_knowledge_organs_subsections_english()

        def handle_english_knowledge_diseases(current_input: List[str]) -> str:

            if len(current_input) > 0 and current_input[0] == '1':
                return handle_english_knowledge_diseases_subsection(KnowledgeDiseasesArticleType.BREAST_CANCER, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '2':
                return handle_english_knowledge_diseases_subsection(KnowledgeDiseasesArticleType.CHOLERA, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '3':
                return handle_english_knowledge_diseases_subsection(KnowledgeDiseasesArticleType.DIABETES, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '4':
                return handle_english_knowledge_diseases_subsection(KnowledgeDiseasesArticleType.MALARIA, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '5':
                return handle_english_knowledge_diseases_subsection(KnowledgeDiseasesArticleType.HIVAIDS, current_input[1:])
            elif len(current_input) > 0 and current_input[0] == '6':
                return handle_english_knowledge_diseases_subsection(KnowledgeDiseasesArticleType.TYPHOID, current_input[1:])
            elif len(current_input) > 1:
                # There are still parcelable inputs
                return handle_english_knowledge_diseases(current_input[1:])
            else:
                return "CON " + UssdService._print_knowledge_diseases_english()

        def handle_english_knowledge_diseases_subsection(
                disease: KnowledgeDiseasesArticleType,
                current_input: List[str]
        ) -> str:
            if len(current_input) > 0 and current_input[0] == '1':
                # Send article on introduction

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    disease,
                    KnowledgeDiseaseArticleSubsection.INTRODUCTION
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 0 and current_input[0] == '2':
                # Send article on

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    disease,
                    KnowledgeDiseaseArticleSubsection.SIGNS_AND_SYMPTOMS
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 0 and current_input[0] == '3':
                # Send article on

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    disease,
                    KnowledgeDiseaseArticleSubsection.CAUSES
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 0 and current_input[0] == '4':
                # Send article on

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    disease,
                    KnowledgeDiseaseArticleSubsection.DIAGNOSIS
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 0 and current_input[0] == '5':
                # Send article on

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    disease,
                    KnowledgeDiseaseArticleSubsection.TREATMENT
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 0 and current_input[0] == '6':
                # Send article on

                SMSService.send_knowledge_disease_article_sms(
                    africas_talking_repository,
                    phone_number,
                    disease,
                    KnowledgeDiseaseArticleSubsection.PREVENTION
                )

                return "END " + UssdService._print_successful_article_exit_english()
            elif len(current_input) > 1:
                # There are still parcelable inputs
                return handle_english_knowledge_diseases_subsection(disease, current_input[1:])
            else:
                return "CON " + UssdService._print_knowledge_diseases_subsections_english()

        def handle_english_knowledge_exercises(current_input: List[str]):
            return "END " + UssdService._print_unimplemented_section_english()

        def handle_english_knowledge_firstaid(current_input: List[str]):
            return "END " + UssdService._print_unimplemented_section_english()

        def handle_english_knowledge_mentalhealth(current_input: List[str]):
            return "END " + UssdService._print_unimplemented_section_english()

        def handle_english_knowledge_insurance(current_input: List[str]):
            return "END " + UssdService._print_unimplemented_section_english()


        return handle_language(user_action_text)


    @staticmethod
    def _print_language_menu():
        return """Karibu AfyaYangu. What language would you like to use?\nChagua lugha ambayo ungependa kutumia\n\n1. English\n2. Swahili\n00. Exit\n"""

    @staticmethod
    def _print_main_menu_english():
        return """Welcome to AfyaYangu. What service would you like to access?\n\n1. Knowledge\n2. MyMedicine\n3. Emergency Contacts\n4. AI Services\n0. Back\n00. Exit\n"""

    @staticmethod
    def _print_main_menu_swahili():
        return """Karibu AfyaYangu. Chagua huduma ambayo ungependa kupata\n\n1. Ujumbe\n2. Dawa Zangu\n3. Nambari za huduma za haraka\n4. Huduma za AI\n0.Back\n00. Exit\n"""

    @staticmethod
    def _print_knowledge_menu_english():
        return """Welcome to the knowledge menu. What section would you like to access?\n\n1. Organs\n2. Diseases\n3. Exercise\n4. First Aid\n5. Mental Health\n6. Insurance\n0.Back\n00. Exit\n"""

    @staticmethod
    def _print_knowledge_menu_swahili():
        return """Karibu kipande cha Ujumbe. Je, ni ujumbe upi ungependa kupata?\n\n1. Viungo\n2. Magonjwa\n3. Mazoezi\n4. Msaada wa kwanza\n5. Hali ya akili\n6. Bima\n0. Rudi Nyuma\n00. Toka\n"""

    @staticmethod
    def _print_knowledge_organs_english():
        return  """Welcome to Knowledge Organs page. What organ would you like to read about?\n\n1. Brain\n2. Heart\n3. Kidney\n4. Liver\n5. Lungs\n6. Skin\n7. Stomach\n0. Back\n00. Exit\n"""

    @staticmethod
    def _print_knowledge_organs_swahili():
        return  """Karibu sehemu ya vuingo. Je, ni kiumbe kipi ungependa kusoma kuhusu?\n\n1. Ubongo\n2. Moyo\n3. Figo\n4. Ini\n5. Mapafu\n6. Ngozi\n7. Tumbo\n0. Rudi Nyuma\n00. Toka\n"""

    @staticmethod
    def _print_knowledge_organs_subsections_english():
        return """What section of the article would you like to access?\n\n1. Introduction\n2. Structure or Anatomy\n3. Functions\n4. Common Complications and disorders\n0. Back\n00. Exit\n"""

    @staticmethod
    def _print_knowledge_organs_subsections_swahili():
        return """Je, ni sehemu ipi ya makala ungependa kupata?\n\n1. Utangulizi\n2. Anatomia ya kiungo\n3. Kazi ya kiungo\n4. Magonjwa wa kawaida yanayoathiri kiungo\n0. Rudi Nyuma\n00. Toka\n"""

    @staticmethod
    def _print_knowledge_diseases_english():
        return """Welcome to Knowledge Diseases section. What disease would you like to read about?\n\n1. Breast Cancer\n2. Cholera\n3. Diabetes\n4. Malaria\n5. HIV/AIDS\n6. Typhoid\n0. Back\n00. Exit
        """

    @staticmethod
    def _print_knowledge_diseases_swahili():
        return """Karibu katika sehemu ya magonjwa. Je, ni ugonjwa upi ungependa kusoma kuhusu?
        
        1. Saratani ya matiti
        2. Kipindupindu
        3. Ugonjwa wa kisukari
        4. Malaria
        5. Ukimwi
        6. Typhoid
        0. Rudi Nyuma
        00. Toka
        """

    @staticmethod
    def _print_knowledge_diseases_subsections_english():
        return """What section of the article would you like to read about?\n\n1. Introduction\n2. Signs and Symptoms\n3. Causes\n4. Diagnosis\n5. Treatment\n6. Prevention and Risk Factors\n0. Back\n00. Exit\n"""

    @staticmethod
    def _print_knowledge_diseases_subsections_swahili():
        return """Je, ni sehemu ipi ya makala ungependa kupata?\n\n1. Utangulizi\n2. Dalili na Ishara\n3. Sababu\n4. Kutambua Ugonjwa\n5. Matibabu\n6. Kinga na Vihatarishi\n0. Back\n00. Exit\n"""

    @staticmethod
    def _print_knowledge_exercises_english():
        return """Welcome to Knowledge Exercises section. What exercise would you like to read about?\n\n1. Pushups\n0. Back\n00. Exit\n"""

    @staticmethod
    def _print_knowledge_exercises_swahili():
        return """Karibu katika sehemu ya mazoezi. Je, ni zoezi gani ungependa kusoma kuhusu?\n\n1. Mazoezi ya Kujiinua\n0. Rudi Nyuma\n00. Toka\n"""

    @staticmethod
    def _print_knowledge_first_aid_english():
        return """Welcome to First Aid section. What article would you like to read?\n\n1. Chocking\n2. Fainting\n3. Nose Bleeding\n0. Back\n00. Exit
        """

    @staticmethod
    def _print_knowledge_first_aid_swahili():
        return """Karibu sehemu ya hali ya msaada wa haraka. Je, ungependa kusoma kuhusu nini?\n1. Kujinyonga\n2. Kuzimia\n3. Kutoka damu kwa mapua\n0. Rudi Nyuma\n00. Toka\n"""

    @staticmethod
    def _print_knowledge_mental_health_english():
        return """Welcome to Mental Health section. What article would you like to read?\n\n1. Anxiety\n2. Autism\n3. Depression\n4. Dyslexia\n0. Back\n00. Exit"""

    @staticmethod
    def _print_knowledge_mental_health_swahili():
        return """Karibu sehemu ya hali ya akili. Je, ungependa kusoma kuhusu nini?\n\n1. Wasiwasi\n2. Usonji\n3. Hali ya huzuni\n4. Dyslexia\n0. Rudi Nyuma\n00. Toka\n"""

    @staticmethod
    def _print_knowledge_insurance_english():
        return """Welcome to Insurance section. What article would you like to read?\n\n1. NHIF\n2. SHIF\n0. Back\n00. Exit\n"""

    @staticmethod
    def _print_knowledge_insurance_swahili():
        return """Karibu sehemu ya bima. Je, ungependa kusoma kuhusu nini?\n\n1. NHIF\n2. SHIF\n0. Rudi Nyuma\n00. Toka"""

    @staticmethod
    def _print_my_medicine_english():
        return """Welcome to My Medicine section. What section would you like to read?\n\n1. My Prescriptions\n2. My Medications\n0. Back\n00. Exit\n"""

    @staticmethod
    def _print_my_medicine_swahili():
        return """Karibu sehemu ya bima. Je, ungependa kusoma kuhusu nini?\n\n1. Maagizo yangu ya daktari\n2. Dawa ninazochukua\n0. Rudi Nyuma\n00. Toka\n"""



    @staticmethod
    def _print_unimplemented_section_english():
        return """AfyaYangu\nThis section has not been implemented yet."""

    @staticmethod
    def _print_unimplemented_section_swahili():
        return """AfyaYangu\nHii sehemu haijakamilika."""

    @staticmethod
    def _print_successful_article_exit_english():
        return """Thank you for accessing AfyaYangu! An article will be sent to your phone shortly."""

    @staticmethod
    def _print_successful_article_exit_swahili():
        return """Asanti kwa kutumia AfyaYangu! Utapokea ujumbe kwa simu yakokwa mude mfupi. """

    @staticmethod
    def _print_exit_message_english():
        return """Thank you for visiting AfyaYangu! Remember to dail *334*99133# to gain access to this service."""

    @staticmethod
    def _print_exit_message_swahili():
        return """Asanti kwa kutumia AfyaYangu! Kumbuka kupiga *334*99133# ili kupata huduma za AfyaYangu!"""

    @staticmethod
    def _print_exit_message_any_language():
        return """Asanti! Use *334*99133# to use AfyaYangu."""
