import json
from http.client import responses

from openai import AssistantEventHandler, OpenAI
from openai.types.beta.threads.runs import FunctionToolCall
from typing_extensions import override
from typing import List

from api.models.PromptRequestModel import PromptRequestModel, PromptConversationMessage
from api.models.PromptResponseModel import PromptResponseModel
from services.openai.function_calling.medical_center_function_calls import \
    get_closest_medical_centers_function_call, get_all_medical_centers_function_call, get_medical_center_function_call
from services.openai.function_calling.medicine_function_calls import get_all_medicine_function_call, \
    get_medicine_function_call, upsert_medicine_function_call
from services.openai.function_calling.user_medication_function_calls import get_user_medications_function_call, \
    get_user_medication_function_call, upsert_user_medication_function_call, delete_user_medication_function_call

class ChatGptHelper:
    assistant_name = "AfyaYangu"

    api_key_secret = "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"

    api_key_secret_1 = "t9lFOGYXMZ0rcpMssZqK0lQx2yxdbReird" # -
    api_key_secret_2 = "TC7KAL_Q0Owp77wVw0PoGPZH1T-B161TL03GRfYT3BlbkFJmmB" # ''
    api_key_secret_3 = "-nxX35Ia8hLUcJx8dUkzMx5b1MXm9jBatEkGGa8jvur" # _
    api_key_secret_4 = "75Ye5nICddsuWDbXdOOIYg5cTVIA"

    function_call_reference = {
        'get_closest_medical_centers_function_call': get_closest_medical_centers_function_call,
        'get_all_medical_centers_function_call': get_all_medical_centers_function_call,
        'get_medical_center_function_call': get_medical_center_function_call,
        'get_all_medicine_function_call': get_all_medicine_function_call,
        'get_medicine_function_call': get_medicine_function_call,
        'upsert_medicine_function_call': upsert_medicine_function_call,
        'get_user_medications_function_call': get_user_medications_function_call,
        'get_user_medication_function_call': get_user_medication_function_call,
        'upsert_user_medication_function_call': upsert_user_medication_function_call,
        'delete_user_medication_function_call': delete_user_medication_function_call
    }

    @staticmethod
    def send_prompt_request(
        request: PromptRequestModel
    ):
        """
        Sends a request to the assistant and handles function calls or responses.

        :param request:
        :return: PromptResponseModel with the assistant's response and any actions taken
        """
        return ChatGptHelper._create_base_model_request(
            client = OpenAI(
                api_key= 'sk-proj-' + ChatGptHelper.api_key_secret_1 + '-' + ChatGptHelper.api_key_secret_2 + ChatGptHelper.api_key_secret_3 + ChatGptHelper.api_key_secret_4,
            ),
            messages = request.conversation
        )

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

            print("ChatGPTHelper: Chat response obtained:")
            print(response)

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
                response = message.content
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
                "name": "get_all_medicine_function_call",
                "description": "Retrieve all medicines from the database.",
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
                "name": "get_medicine_function_call",
                "description": "Retrieve details of a specific medicine.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "medicine_id": {
                            "type": "string",
                            "description": "The ID of the medicine."
                        }
                    },
                    "required": ["medicine_id"],
                    "additionalProperties": False
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "upsert_medicine_function_call",
                "description": "Create or update a medicine in the database.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "medicine_id": {
                            "type": "string",
                            "description": "The ID of the medicine (optional for new medicines)."
                        },
                        "english_name": {
                            "type": "string",
                            "description": "The English name of the medicine."
                        },
                        "swahili_name": {
                            "type": "string",
                            "description": "The Swahili name of the medicine (optional)."
                        },
                        "kikuyu_name": {
                            "type": "string",
                            "description": "The Kikuyu name of the medicine (optional)."
                        },
                        "side_effects": {
                            "type": "array",
                            "items": { "type": "string" },
                            "description": "List of side effects caused by the medicine."
                        },
                        "treats": {
                            "type": "array",
                            "items": { "type": "string" },
                            "description": "List of conditions treated by the medicine."
                        }
                    },
                    "required": ["english_name", "side_effects", "treats"],
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