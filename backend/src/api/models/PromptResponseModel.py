from pydantic import BaseModel

class PromptActionModel(BaseModel):
    action: str
    message: str
    options: dict[str, str]

class PromptResponseModel(BaseModel):
    language: str
    response: str
    performed_actions: list[PromptActionModel]
    unperformed_actions: list[PromptActionModel]

