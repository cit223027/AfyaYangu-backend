from fastapi import APIRouter

from models.Medicine import Medicine
from services.firebase.MedicineFirebaseRepository import MedicineFirebaseRepository

data_router = APIRouter(prefix="/data", tags=["Data"])

@data_router.get("/health")
async def health():
    return { "status": "ok" }

## Medicine
@data_router.get("/medicines")
async def get_medicines():
    medicines = MedicineFirebaseRepository.get_all_medicines()
    return medicines

@data_router.get("/medicine/{medicine_id}")
async def get_medicine(medicine_id: str):
    medicine = MedicineFirebaseRepository.get_medicine(medicine_id)
    return medicine

@data_router.post("/medicine/")
async def upsert_new_medicine(medicine: Medicine):
    medicine_id = MedicineFirebaseRepository.upsert_medicine(medicine)
    return medicine_id

## User Medication
@data_router.get("/user_medications/{user_id}")
async def get_user_medications(user_id: str):
    pass

@data_router.get("/user_medication/{user_medication_id}")
async def get_user_medication(user_medication_id: str):
    pass

@data_router.post("/user_medications")
async def upsert_new_user_medication():
    pass

