from pydantic import BaseModel


class ClosestMedicalCenterRequestModel(BaseModel):
    latitude: float
    longitude: float
    number_of_centers: int = 3

class FilterDistanceMedicalCenterRequestModel(BaseModel):
    latitude: float
    longitude: float
    max_distance_km: float = 10.0
