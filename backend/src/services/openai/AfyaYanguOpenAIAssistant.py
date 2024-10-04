from api.models.PromptRequestModel import PromptConversationMessage, PromptRequestModel
from services.openai.ChatGptHelper import ChatGptHelper
from services.openai.function_calling.function_call_reference import function_call_reference
from openai import Client
import json


class AfyaYanguOpenAIAssistant:
    @staticmethod
    def create_afya_yangu_assistant_request(request: PromptRequestModel, is_debug: bool = False) -> str:
        client = Client(
            api_key="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"
        )
        prompt_messages = [message.to_open_ai_message() for message in request.conversation]

        # Create a new thread to handle the assistant messages
        thread = client.beta.threads.create()

        # Add messages to the thread
        for message in prompt_messages:
            client.beta.threads.messages.create(
                thread_id=thread.id,
                role=message["role"],
                content=message["content"]
            )

        # Start the assistant run
        run = client.beta.threads.runs.create_and_poll(
            thread_id=thread.id,
            assistant_id="asst_b274u4jnkuwarJik9nmBsPjU",
        )

        # If the response is a function call, handle it before returning any text
        if run.required_action and hasattr(run.required_action, 'submit_tool_outputs'):
            AfyaYanguOpenAIAssistant._process_tool_calls(client, run, thread.id)

        # Safely extract and return the final message after tool calls
        return AfyaYanguOpenAIAssistant._get_final_message(client, thread.id)

    @staticmethod
    def _process_tool_calls(client, run, thread_id):
        # Handle all tool calls, including parallel calls
        if run.required_action and hasattr(run.required_action, 'submit_tool_outputs'):
            tool_calls = run.required_action.submit_tool_outputs.tool_calls
            if tool_calls:
                AfyaYanguOpenAIAssistant._handle_parallel_tool_calls(client, tool_calls, thread_id, run.id)

    @staticmethod
    def _handle_parallel_tool_calls(client, tool_calls, thread_id, run_id):
        # Process tool calls in parallel and collect their outputs
        tool_outputs = []
        for tool_call in tool_calls:
            AfyaYanguOpenAIAssistant._handle_single_tool_call(client, tool_call, tool_outputs)

        # Submit all collected tool outputs in parallel
        if tool_outputs:
            try:
                run = client.beta.threads.runs.submit_tool_outputs_and_poll(
                    thread_id=thread_id,
                    run_id=run_id,
                    tool_outputs=tool_outputs
                )
                print("Tool outputs submitted successfully.")
                # Recursively process any further tool calls after the first batch
                if run.status == 'required_action':
                    AfyaYanguOpenAIAssistant._process_tool_calls(client, run, thread_id)
            except Exception as e:
                print(f"Failed to submit tool outputs: {e}")

    @staticmethod
    def _handle_single_tool_call(client, tool_call, tool_outputs):
        # Process individual tool call
        tool_name = tool_call.function.name
        if tool_name in function_call_reference:
            tool_function = function_call_reference[tool_name]
            try:
                # Parse the arguments string as a JSON object
                tool_arguments = json.loads(tool_call.function.arguments)
                # Call the function with parsed arguments
                tool_output = tool_function(tool_arguments)

                # Convert the tool output to a JSON string if it's an object (dict or list)
                if isinstance(tool_output, (dict, list)):
                    tool_output = json.dumps(tool_output)

                # Append the tool call id and its output (now as a string)
                tool_outputs.append({
                    "tool_call_id": tool_call.id,
                    "output": tool_output
                })
            except json.JSONDecodeError as e:
                print(f"Failed to decode JSON arguments: {e}")
            except Exception as e:
                print(f"Error during tool call processing: {e}")

    @staticmethod
    def _get_final_message(client, thread_id) -> str:
        # Fetch the final message after tool calls
        messages = client.beta.threads.messages.list(thread_id=thread_id)

        # Safely extract the text from the first message
        if messages and messages.data:
            for message in messages.data:
                if hasattr(message, 'content') and isinstance(message.content, list):
                    # Extract the text value from the content block (assuming there's only one text block)
                    for block in message.content:
                        if block.type == 'text':
                            return block.text.value  # Return the first valid text block
        return ""
