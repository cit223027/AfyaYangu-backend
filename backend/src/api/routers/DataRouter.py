from fastapi import APIRouter

from api.models.MedicalCenterModels import FilterDistanceMedicalCenterRequestModel, ClosestMedicalCenterRequestModel
from models.MedicalCenter import MedicalCenter
from models.Medicine import Medicine
from models.Prescription import Prescription
from models.UserMedication import UserMedication
from services.firebase.MedicalCenterFirebaseRepository import MedicalCenterFirebaseRepository
from services.firebase.MedicineFirebaseRepository import MedicineFirebaseRepository
from services.firebase.PrescriptionFirebaseRepository import PrescriptionFirebaseRepository
from services.firebase.UserMedicationRepository import UserMedicationRepository

data_router = APIRouter(prefix="/data", tags=["Data"])

@data_router.get("/health")
async def health():
    return { "status": "ok" }


## Medicine
@data_router.get("/medicines")
async def get_medicines():
    medicines = MedicineFirebaseRepository.get_all_medicines()
    return {
        "data": medicines
    }

@data_router.get("/medicine/{medicine_id}")
async def get_medicine(medicine_id: str):
    medicine = MedicineFirebaseRepository.get_medicine(medicine_id)
    return {
        "data": medicine
    }

@data_router.post("/medicine/")
async def upsert_new_medicine(medicine: Medicine):
    medicine_id = MedicineFirebaseRepository.upsert_medicine(medicine)
    return {
        "data": medicine_id
    }


## User Medication
@data_router.get("/user_medications/user/{user_id}")
async def get_user_medications(user_id: str):
    user_medications = UserMedicationRepository.get_user_medications(user_id)
    return {
        "data": user_medications
    }

@data_router.get("/user_medication/{user_medication_id}")
async def get_user_medication(user_medication_id: str):
    user_medication = UserMedicationRepository.get_user_medication(user_medication_id)
    return {
        "data": user_medication
    }

@data_router.post("/user_medications")
async def upsert_new_user_medication(user_medication: UserMedication):
    user_medication_id = UserMedicationRepository.upsert_user_medication(user_medication)
    return {
        "data": user_medication_id
    }

## Prescription
@data_router.get("/prescriptions/user/{user_id}")
async def get_user_prescriptions(user_id: str):
    prescriptions = PrescriptionFirebaseRepository.get_prescriptions_by_user(user_id)

    return {
        "data": prescriptions
    }

@data_router.get("/prescription/{prescription_id}")
async def get_prescription(prescription_id: str):
    prescription = PrescriptionFirebaseRepository.get_prescription(prescription_id)

    return {
        "data": prescription
    }

@data_router.delete("/prescription/{prescription_id}")
async def delete_prescription(prescription_id: str):
    prescription = PrescriptionFirebaseRepository.delete_prescription(prescription_id)

    return {
        "data": prescription
    }

@data_router.post("/prescription")
async def upsert_prescription(prescription: Prescription):
    prescription_id = PrescriptionFirebaseRepository.upsert_prescription(prescription)

    return {
        "data": prescription_id
    }


## Medical Centers
@data_router.get("/medical_centers")
async def get_all_medical_centers():
    medical_centers = MedicalCenterFirebaseRepository.get_all_medical_centers()
    return {
        "data": medical_centers
    }

@data_router.get("/medical_center/{medical_center_id}")
async def get_medical_center(medical_center_id: str):
    medical_center = MedicalCenterFirebaseRepository.get_medical_center(medical_center_id)
    return {
        "data": medical_center
    }

@data_router.post("/medical_center")
async def upsert_medical_center(medical_center: MedicalCenter):
    medical_center_id = MedicalCenterFirebaseRepository.upsert_medical_center(medical_center)
    return {
        "data": medical_center_id
    }

@data_router.delete("/medical_center/{medical_center_id}")
async def delete_medical_center(medical_center_id: str):
    medical_center_id = MedicalCenterFirebaseRepository.delete_medical_center(medical_center_id)
    return {
        "data": medical_center_id
    }

@data_router.post("/medical_center/closest")
async def get_all_medical_center(closest_medical_center: ClosestMedicalCenterRequestModel):
    medical_centers = MedicalCenterFirebaseRepository.get_closest_medical_centers(
        latitude=closest_medical_center.latitude,
        longitude=closest_medical_center.longitude,
        number_of_centers=closest_medical_center.number_of_centers
    )

    return {
        "data": medical_centers
    }

@data_router.post("/medical_center/filter_distance")
async def get_all_medical_center(filter_location_model: FilterDistanceMedicalCenterRequestModel):
    medical_centers = MedicalCenterFirebaseRepository.filter_medical_centers_by_location(
        latitude=filter_location_model.latitude,
        longitude=filter_location_model.longitude,
        max_distance_km=filter_location_model.max_distance_km
    )

    return {
        "data": medical_centers
    }
