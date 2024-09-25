from pydantic import BaseModel

class PromptPerformedActionModel(BaseModel):
    message: str
    details: dict[str, str]

class PromptSuggestionModel(BaseModel):
    message: str
    action_name: str
    options: dict[str, str]

class PromptResponseModel(BaseModel):
    language: str
    response: str
    performed_actions: list[PromptPerformedActionModel] = []
    unperformed_actions: list[PromptSuggestionModel] = []

