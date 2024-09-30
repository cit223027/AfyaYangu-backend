from typing import Annotated

from fastapi import APIRouter, Form
from starlette.formparsers import FormMessage

from api.models.PromptRequestModel import PromptRequestModel, PromptConversationMessage
from api.models.SmsIncomingMessageModel import SmsIncomingMessageModel
from services.africastalking.AfricasTalkingRepository import AfricasTalkingRepository
from services.africastalking.USSDService import UssdService
from services.openai.AfyaYanguOpenAIAssistant import AfyaYanguOpenAIAssistant
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
    response = AfyaYanguOpenAIAssistant.create_afya_yangu_assistant_request(
        request = PromptRequestModel(
            language="english",
            conversation=[
                PromptConversationMessage(
                    role = "user",
                    message = request_message
                )
            ]
        )
    )

    # Send the response back to the sender
    africas_talking_repository.send_message(recipient=from_, message=response.message)

@sms_router.post("/ussd")
def handle_ussd(
        sessionId: Annotated[str, Form(alias="sessionId")],
        phoneNumber: Annotated[str, Form(alias="phoneNumber")],
        text: Annotated[str, Form(alias="text")]
) -> str:
    """


    :return:
    """
    print("/sms/ussd request phone_number: ", phoneNumber, " text: ", text)

    response = UssdService.handle_ussd_request(africas_talking_repository, text, phoneNumber)
    print("sms/ussd response: ", response)

    return "END Welcome to afyayangu"
