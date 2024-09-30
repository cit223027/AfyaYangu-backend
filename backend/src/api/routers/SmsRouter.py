from typing import Annotated

from fastapi import APIRouter, Form
from starlette.formparsers import FormMessage

from api.models.PromptRequestModel import PromptRequestModel, PromptConversationMessage
from api.models.SmsIncomingMessageModel import SmsIncomingMessageModel
from services.africastalking.AfricasTalkingRepository import AfricasTalkingRepository
from services.africastalking.USSDService import UssdService
from services.openai.ChatGptHelper import ChatGptHelper

africas_talking_repository = AfricasTalkingRepository()
sms_router = APIRouter(prefix="/sms", tags=["sms"])

@sms_router.post("/incoming_message")
def notify_incoming_message(
        from_: Annotated[str, Form(alias="from")],  # Alias 'from' to 'from_'
        text: Annotated[str, Form()]
):
    # Construct request message
    request_message = f"Origin: SMS Sender: {from_}\n{text}"

    # Send prompt to the model
    response = ChatGptHelper.send_base_model_request(
        conversation=[
            PromptConversationMessage(
                role="user",
                message=request_message
            )
        ]
    )

    # Send the response back to the sender
    africas_talking_repository.send_message(recipient=from_, message=response.message)

@sms_router.post("/ussd")
def handle_ussd(
        session_id: Annotated[str, Form(alias="sessionId")],
        phone_number: Annotated[str, Form(alias="phoneNumber")],
        text: Annotated[str, Form(alias="text")]
):
    """


    :return:
    """
    print("/sms/ussd request phone_number: ", phone_number, " text: ", text)

    response = UssdService.handle_ussd_request(africas_talking_repository, text, phone_number)
    print("sms/ussd response: ", response)

    return "END Welcome to afyayangu"
