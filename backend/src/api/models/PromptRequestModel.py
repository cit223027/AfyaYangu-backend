from typing import List
from pydantic import BaseModel

class PromptConversationMessage(BaseModel):
    role: str
    message: str


    def to_open_ai_message(self):
        return {
            "role": self.role,
            "content": [
                {
                    "type": "text",
                    "text": self.message
                }
            ]
        }

class PromptRequestModel(BaseModel):
    language: str
    conversation: List[PromptConversationMessage]
    pageContext: str = None
    userContext: str = None
    chatContext: str = None