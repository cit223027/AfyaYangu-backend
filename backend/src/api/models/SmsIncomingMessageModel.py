from pydantic import BaseModel, Field


class SmsIncomingMessageModel(BaseModel):
    date: str
    from_: str = Field(alias='from')  # Use alias for 'from'
    to: str
    id: str
    text: str
