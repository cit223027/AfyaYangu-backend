from fastapi import APIRouter
from api.models.PromptRequestModel import PromptRequestModel
from api.models.PromptResponseModel import PromptResponseModel
from services.openai.ChatGptHelper import ChatGptHelper

ai_router = APIRouter(prefix = "/ai", tags = ["Engine"])

@ai_router.get("/health")
def greater():
    return { "message": "The ai engine is healthy!" }

@ai_router.post("/prompt", response_model=PromptResponseModel)
def handle_prompt(request: PromptRequestModel) -> PromptResponseModel:
    response = ChatGptHelper.send_prompt_request(request)

    return response

@ai_router.get("/image_prompt", response_model=PromptRequestModel)
def handle_prompt_image(request: PromptRequestModel):
    pass
