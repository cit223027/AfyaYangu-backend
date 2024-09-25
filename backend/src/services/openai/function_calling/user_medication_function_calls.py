from typing import List, Optional
from services.firebase.UserMedicationRepository import UserMedicationRepository
from models.UserMedication import UserMedication, DosageType, DosagePeriod, IntakeMealInstruction


def get_user_medications_function_call(args: dict):
    user_id = args.get('user_id')

    if user_id is None:
        return {'error': 'user_id is required'}

    user_medications = UserMedicationRepository.get_user_medications(user_id)
    return {
        'message': 'User medications retrieved successfully',
        'user_medications': [med.to_dict() for med in user_medications]
    }


def get_user_medication_function_call(args: dict):
    user_medication_id = args.get('user_medication_id')

    if user_medication_id is None:
        return {'error': 'user_medication_id is required'}

    user_medication = UserMedicationRepository.get_user_medication(user_medication_id)
    if user_medication:
        return {
            'message': 'User medication retrieved successfully',
            'user_medication': user_medication.to_dict()
        }
    else:
        return {'error': 'User medication not found'}


def upsert_user_medication_function_call(args: dict):
    user_id = args.get('user_id')
    medicine_id = args.get('medicine_id')
    dosage_type = args.get('dosage_type')
    dosage_period = args.get('dosage_period')
    dosages_per_period = args.get('dosages_per_period')
    intake_per_dosage = args.get('intake_per_dosage')
    time_to_take = args.get('time_to_take')
    intake_meal_instruction = args.get('intake_meal_instruction')

    # Validate required fields
    if user_id is None or medicine_id is None or dosage_type is None or dosage_period is None:
        return {
            'error': 'user_id, medicine_id, dosage_type, and dosage_period are required'
        }

    if dosages_per_period is None or intake_per_dosage is None:
        return {
            'error': 'dosages_per_period and intake_per_dosage are required'
        }

    if time_to_take is None or not isinstance(time_to_take, list):
        return {
            'error': 'time_to_take must be a list of integers'
        }

    new_user_medication_id = UserMedicationRepository.upsert_user_medication(
        UserMedication(
            user_id=user_id,
            medicine_id=medicine_id,
            dosage_type=DosageType(dosage_type),
            dosage_period=DosagePeriod(dosage_period),
            dosages_per_period=dosages_per_period,
            intake_per_dosage=intake_per_dosage,
            intake_meal_instruction=IntakeMealInstruction(intake_meal_instruction) if intake_meal_instruction else None,
            time_to_take=time_to_take
        )
    )

    return {
        'message': 'User medication upserted successfully',
        'user_medication_id': new_user_medication_id,
        'user_id': user_id,
        'medicine_id': medicine_id,
        'dosage_type': dosage_type,
        'dosage_period': dosage_period,
        'dosages_per_period': dosages_per_period,
        'intake_per_dosage': intake_per_dosage,
        'intake_meal_instruction': intake_meal_instruction,
        'time_to_take': time_to_take
    }


def delete_user_medication_function_call(args: dict):
    user_medication_id = args.get('user_medication_id')

    if user_medication_id is None:
        return {
            'error': 'user_medication_id is required'
        }

    UserMedicationRepository.delete_user_medication(user_medication_id)
    return {
        'message': f'User medication {user_medication_id} deleted successfully'
    }