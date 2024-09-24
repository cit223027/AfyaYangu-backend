from models.Medicine import Medicine
from services.firebase.MedicineFirebaseRepository import MedicineFirebaseRepository


def get_all_medicine_function_call(args: dict):
    medicines = MedicineFirebaseRepository.get_all_medicines()
    return {
        'message': 'Medicine retrieved successfully',
        'medicines': [med.to_dict() for med in medicines]
    }

def get_medicine_function_call(args: dict):
    medicine_id = args.get('medicine_id')

    if medicine_id is not None:
        medicine = MedicineFirebaseRepository.get_medicine(medicine_id)
        return {
            'message': 'Medicine retrieved successfully',
            'medicine': medicine.to_dict()
        }
    else:
        return {
            'error': 'medicine_id is required'
        }


def upsert_medicine_function_call(args: dict):
    medicine_id = args.get('medicine_id')
    medicine_english_name = args.get('english_name')
    medicine_swahili_name = args.get('swahili_name')
    medicine_kikuyu_name = args.get('kikuyu_name')
    side_effects = args.get('side_effects')
    treats = args.get('treats')

    if medicine_english_name is None:
        return {
            'error': 'english_name is required'
        }

    new_medicine_id = MedicineFirebaseRepository.upsert_medicine(
        Medicine(
            medicine_id=medicine_id,
            english_name=medicine_english_name,
            swahili_name=medicine_swahili_name,
            kikuyu_name=medicine_kikuyu_name,
            side_effects=side_effects,
            treats=treats
        )
    )

    return {
        'message': 'Medicine upserted successfully',
        'medicine_id': new_medicine_id,
        'english_name': medicine_english_name,
        'swahili_name': medicine_swahili_name,
        'kikuyu_name': medicine_kikuyu_name,
        'side_effects': side_effects,
        'treats': treats
    }
