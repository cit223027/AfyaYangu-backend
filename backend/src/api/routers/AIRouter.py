from fastapi import APIRouter
from src.api.models.PromptRequestModel import PromptRequestModel
from src.api.models.PromptResponseModel import PromptResponseModel

ai_router = APIRouter(prefix = "/ai", tags = ["Engine"])

@ai_router.get("/health")
def greater():
    return { "message": "The ai engine is healthy!" }

@ai_router.post("/prompt", response_model=PromptRequestModel)
def handle_prompt(request: PromptRequestModel):
    pass

@ai_router.get("/image_prompt", response_model=)
def handle_prompt_image(request: PromptRequestModel):
    pass
