import json
from fastapi import HTTPException
import base64
import requests
from http.client import responses

from openai import AssistantEventHandler, OpenAI
from openai.types.beta.threads.runs import FunctionToolCall
from typing_extensions import override
from typing import List

from api.models.PromptRequestModel import PromptRequestModel, PromptConversationMessage
from api.models.PromptResponseModel import PromptResponseModel
from services.openai.function_calling.medical_center_function_calls import \
    get_closest_medical_centers_function_call, get_all_medical_centers_function_call, get_medical_center_function_call
from services.openai.function_calling.user_medication_function_calls import get_user_medications_function_call, \
    get_user_medication_function_call, upsert_user_medication_function_call, delete_user_medication_function_call

class ChatGptHelper:
    assistant_name = "AfyaYangu"

    api_key_secret_1 = "t9lFOGYXMZ0rcpMssZqK0lQx2yxdbReird" # -
    api_key_secret_2 = "TC7KAL_Q0Owp77wVw0PoGPZH1T-B161TL03GRfYT3BlbkFJmmB" # ''
    api_key_secret_3 = "-nxX35Ia8hLUcJx8dUkzMx5b1MXm9jBatEkGGa8jvur" # _
    api_key_secret_4 = "75Ye5nICddsuWDbXdOOIYg5cTVIA"

    function_call_reference = {
        'get_closest_medical_centers_function_call': get_closest_medical_centers_function_call,
        'get_all_medical_centers_function_call': get_all_medical_centers_function_call,
        'get_medical_center_function_call': get_medical_center_function_call,
        'get_user_medications_function_call': get_user_medications_function_call,
        'get_user_medication_function_call': get_user_medication_function_call,
        'upsert_user_medication_function_call': upsert_user_medication_function_call,
        'delete_user_medication_function_call': delete_user_medication_function_call
    }

    @staticmethod
    def send_base_model_request(
        conversation: List[PromptConversationMessage] = []
    ):
        """
        Sends a request to the assistant and handles function calls or responses.

        :param conversation: The current conversation between the user and the assistant
        :return: PromptResponseModel with the assistant's response and any actions taken
        """
        return ChatGptHelper._create_base_model_request(
            client = OpenAI(
                "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",
            ),
            messages = conversation
        )

    @staticmethod
    def send_prescription_extraction_request(base64_image: str):
        """
        Sends the base64-encoded image to ChatGPT and asks for the prescription details.

        :param base64_image: The base64-encoded image of the prescription
        :return: Extracted description of the prescription from the image
        """

        api_key = "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"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        }

        payload = {
            "model": "gpt-4o-mini",  # or any appropriate model
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "Extract all details contained in the prescription below. This can include medicine information, patient information and dosage information. Put a space at the end of each line. use"
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}"
                            }
                        }
                    ]
                }
            ],
            "max_tokens": 500
        }

        try:
            response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

            if response.status_code == 200:
                response_data = response.json()  # Get the full response JSON
                # print("send_prescription_extraction_request: success", response_data)

                # Extract the assistant's message content
                if 'choices' in response_data and len(response_data['choices']) > 0:
                    assistant_message = response_data['choices'][0]['message']['content']
                    return assistant_message  # Return only the text response from the model
                else:
                    raise HTTPException(status_code=500, detail="Invalid response structure from the model.")
            else:
                raise HTTPException(status_code=response.status_code, detail=response.text)

        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    @staticmethod
    def _create_base_model_request(
            client: OpenAI,
            messages: List[PromptConversationMessage],
            model = "gpt-4o"
    ):
        try:
            response = client.chat.completions.create(
                model = model,
                messages = [message.to_open_ai_message() for message in messages],
                tools=ChatGptHelper.function_call_tools
            )

            return ChatGptHelper._handle_response(client, messages, response, model)
        except Exception as e:
            print("Error obtained: _create_base_model_request")
            print(e)
            pass


    @staticmethod
    def _handle_response(
            client: OpenAI,
            messages: List[PromptConversationMessage],
            response,
            model = "gpt-4o"
    ):
        """
        Handles the response received from the assistant.
        :return:
        """
        first_choice = response.choices[0]

        finish_reason = first_choice.finish_reason
        message = first_choice.message

        # Handle function call
        if finish_reason == "tool_calls":
            return_messages = [ChatGptHelper._handle_function_call(function_call) for function_call in message.tool_calls]
            new_messages = [message.to_open_ai_message() for message in messages]
            [new_messages.append(message) for message in return_messages]

            response = client.chat.completions.create(
                model = model,
                messages = new_messages,
                tools=ChatGptHelper.function_call_tools
            )

            return ChatGptHelper._handle_response(client, messages, response, model)
        else:
            return PromptResponseModel(
                language = "english",
                message = message.content
            )

    @staticmethod
    def _handle_function_call(
        function_tool_call: FunctionToolCall
    ):
        tool_call_id = function_tool_call.id
        tool_function_name = function_tool_call.function.name
        tool_function_arguments = json.loads(function_tool_call.function.arguments)

        # Call the function
        result = ChatGptHelper.function_call_reference[tool_function_name](tool_function_arguments)
        return {
            "role":"tool",
            "tool_call_id": tool_call_id,
            "name": tool_function_name,
            "content": result
        }

    function_call_tools = [
        {
            "type": "function",
            "function": {
                "name": "get_closest_medical_centers_function_call",
                "description": "Get the closest medical centers based on the user's latitude and longitude.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "latitude": {
                            "type": "number",
                            "description": "The user's latitude."
                        },
                        "longitude": {
                            "type": "number",
                            "description": "The user's longitude."
                        },
                        "number_of_centers": {
                            "type": "integer",
                            "description": "The number of closest medical centers to return (default is 3)."
                        }
                    },
                    "required": ["latitude", "longitude"],
                    "additionalProperties": False
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "get_all_medical_centers_function_call",
                "description": "Retrieve all medical centers.",
                "parameters": {
                    "type": "object",
                    "properties": {},
                    "required": [],
                    "additionalProperties": False
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "get_medical_center_function_call",
                "description": "Get the details of a specific medical center.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "medical_center_id": {
                            "type": "string",
                            "description": "The ID of the medical center."
                        }
                    },
                    "required": ["medical_center_id"],
                    "additionalProperties": False
                }
            }
        },

        {
            "type": "function",
            "function": {
                "name": "get_user_medications_function_call",
                "description": "Retrieve all medications for a specific user.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "user_id": {
                            "type": "string",
                            "description": "The ID of the user whose medications need to be retrieved."
                        }
                    },
                    "required": ["user_id"],
                    "additionalProperties": False
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "get_user_medication_function_call",
                "description": "Retrieve a specific user medication based on medication ID.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "user_medication_id": {
                            "type": "string",
                            "description": "The ID of the user medication to retrieve."
                        }
                    },
                    "required": ["user_medication_id"],
                    "additionalProperties": False
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "upsert_user_medication_function_call",
                "description": "Create or update a user's medication details.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "user_id": {
                            "type": "string",
                            "description": "The ID of the user."
                        },
                        "medication_id": {
                            "type": "string",
                            "description": "The ID of the medication."
                        },
                        "dosage_type": {
                            "type": "string",
                            "enum": ["syrup", "tablets"],
                            "description": "The dosage type, either syrup or tablets."
                        },
                        "dosage_period": {
                            "type": "string",
                            "enum": ["day", "week", "month"],
                            "description": "The dosage period, whether per day, week, or month."
                        },
                        "dosages_per_period": {
                            "type": "integer",
                            "description": "Number of dosages to take within the period."
                        },
                        "intake_per_dosage": {
                            "type": "integer",
                            "description": "The number of intakes per dosage."
                        },
                        "intake_meal_instruction": {
                            "type": "string",
                            "enum": ["before_meal", "after_meal"],
                            "description": "When the medication should be taken relative to a meal (optional)."
                        },
                        "time_to_take": {
                            "type": "array",
                            "items": { "type": "integer" },
                            "description": "The times at which the medication should be taken, in hours."
                        }
                    },
                    "required": ["user_id", "medication_id", "dosage_type", "dosage_period", "dosages_per_period", "intake_per_dosage", "time_to_take"],
                    "additionalProperties": False
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "delete_user_medication_function_call",
                "description": "Delete a specific user's medication record.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "user_medication_id": {
                            "type": "string",
                            "description": "The ID of the user medication to delete."
                        }
                    },
                    "required": ["user_medication_id"],
                    "additionalProperties": False
                }
            }
        }
    ]