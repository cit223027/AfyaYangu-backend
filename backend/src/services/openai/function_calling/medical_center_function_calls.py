from src.services.firebase.MedicalCenterFirebaseRepository import MedicalCenterFirebaseRepository

def get_closest_medical_centers_function_call(args: dict):
    latitude = args.get('latitude')
    longitude = args.get('longitude')
    number_of_centers = args.get('number_of_centers', 3)

    if latitude is None or longitude is None:
        return {
            'error': 'Both latitude and longitude are required.'
        }

    closest_centers = MedicalCenterFirebaseRepository.get_closest_medical_centers(latitude, longitude, number_of_centers)
    return {
        'message': 'Closest medical centers retrieved successfully',
        'medical_centers': [center.to_dict() for center in closest_centers]
    }


def get_all_medical_centers_function_call(args: dict):
    centers = MedicalCenterFirebaseRepository.get_all_medical_centers()
    return {
        'message': 'All medical centers retrieved successfully',
        'medical_centers': [center.to_dict() for center in centers]
    }


def get_medical_center_function_call(args: dict):
    medical_center_id = args.get('medical_center_id')

    if medical_center_id is None:
        return {
            'error': 'medical_center_id is required.'
        }

    medical_center = MedicalCenterFirebaseRepository.get_medical_center(medical_center_id)

    if medical_center:
        return {
            'message': 'Medical center retrieved successfully',
            'medical_center': medical_center.to_dict()
        }
    else:
        return {
            'error': 'Medical center not found.'
        }