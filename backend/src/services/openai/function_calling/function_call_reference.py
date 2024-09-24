from src.services.openai.function_calling.medical_center_function_calls import \
    get_closest_medical_centers_function_call, get_all_medical_centers_function_call, get_medical_center_function_call
from src.services.openai.function_calling.medicine_function_calls import get_all_medicine_function_call, \
    get_medicine_function_call, upsert_medicine_function_call
from src.services.openai.function_calling.user_medication_function_calls import get_user_medications_function_call, \
    get_user_medication_function_call, upsert_user_medication_function_call, delete_user_medication_function_call

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
