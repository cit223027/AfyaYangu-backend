from enum import Enum

class KnowledgeOrgansArticleType(Enum):
    BRAIN = "brain"
    HEART = "heart"
    KIDNEY = "kidney"
    LIVER = "liver"
    LUNGS = "lungs"
    SKIN = "skin"
    STOMACH = "stomach"

class KnowledgeDiseasesArticleType(Enum):
    BREAST_CANCER = "brest cancer"
    CHOLERA = "cholera"
    DIABETES = "diabetes"
    MALARIA = "malaria"
    HIVAIDS = "hiv/aids"
    TYPHOID = "typhoid"

class KnowledgeExercisesArticleType(Enum):
    PUSHUPS = "pushups"

class KnowledgeFirstAidsArticleType(Enum):
    CHOCKING = "chocking"
    FAINTING = "fainting"
    NOSE_BLEEDING = "nose bleeding"

class KnowledgeMentalHealthArticleType(Enum):
    ANXIETY = "anxiety"
    AUTISM = "autism"
    DEPRESSION = "depression"
    DYSLEXIA = "dyslexia"

class KnowledgeInsuranceArticleType(Enum):
    NHIF = "nhif"
    SHIF = "shif"
