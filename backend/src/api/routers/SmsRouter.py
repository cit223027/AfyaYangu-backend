from fastapi import APIRouter

from api.models.PromptRequestModel import PromptRequestModel, PromptConversationMessage
from api.models.SmsIncomingMessageModel import SmsIncomingMessageModel
from services.africastalking.AfricasTalkingRepository import AfricasTalkingRepository
from services.openai.ChatGptHelper import ChatGptHelper

africas_talking_repository = AfricasTalkingRepository()
sms_router = APIRouter(prefix="/sms", tags=["sms"])

@sms_router.post("/incoming_message")
def notify_incoming_message(incoming_message: SmsIncomingMessageModel):
    # Send prompt to model
    request_message = "Origin: SMS " + "Sender:" + incoming_message.from_ + "\n" + incoming_message.text

    response = ChatGptHelper.send_base_model_request(
        conversation=[
            PromptConversationMessage(
                role = "user",
                message = request_message
            )
        ]
    )

    # handle response
    africas_talking_repository.send_message(recipient=incoming_message.from_, message=response.message)
