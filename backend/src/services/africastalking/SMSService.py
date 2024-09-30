from models.KnowledgeArticle import KnowledgeOrgansArticleType, KnowledgeDiseasesArticleType
from services.africastalking.AfricasTalkingRepository import AfricasTalkingRepository
from services.articles.KnowledgeArticles import KnowledgeOrgansArticleSubsection, KnowledgeArticleService, \
    KnowledgeDiseaseArticleSubsection


class SMSService:

    @staticmethod
    def send_knowledge_organ_article_sms(
        africas_talking_repository: AfricasTalkingRepository,
        recipient: str,
        organ: KnowledgeOrgansArticleType,
        subsection: KnowledgeOrgansArticleSubsection
    ):
        message = KnowledgeArticleService.print_knowledge_organs_article_subsection(organ, subsection)

        africas_talking_repository.send_message(recipient, message)

    @staticmethod
    def send_knowledge_disease_article_sms(
        africas_talking_repository: AfricasTalkingRepository,
        recipient: str,
        disease: KnowledgeDiseasesArticleType,
        subsection: KnowledgeDiseaseArticleSubsection
    ):
        message = KnowledgeArticleService.print_knowledge_diseases_article_subsection(disease, subsection)

        africas_talking_repository.send_message(recipient, message)
