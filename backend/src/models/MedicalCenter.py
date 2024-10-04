from typing import Optional

from pydantic import BaseModel


class MedicalCenter(BaseModel):
    medical_center_id: Optional[str] = None
    name: str
    description: str
    swahili_description: Optional[str] = None
    kikuyu_description: Optional[str] = None
    emergency_mobile_number: Optional[str] = None
    secondary_emergency_mobile_number: Optional[str] = None
    latitude: float
    longitude: float

    @staticmethod
    def from_dict(data: dict):
        return MedicalCenter(
            medical_center_id=data['medical_center_id'],
            name=data['name'],
            description=data['description'],
            swahili_description=data['swahili_description'],
            kikuyu_description=data['kikuyu_description'],
            emergency_mobile_number=data['emergency_mobile_number'],
            secondary_emergency_mobile_number=data['secondary_emergency_mobile_number'],
            latitude=data['latitude'],
            longitude=data['longitude']
        )

    def to_dict(self) -> dict:
        return {
            'medical_center_id': self.medical_center_id,
            'name': self.name,
            'description': self.description,
            'swahili_description': self.swahili_description,
            'kikuyu_description': self.kikuyu_description,
            'emergency_mobile_number': self.emergency_mobile_number,
            'secondary_emergency_mobile_number': self.secondary_emergency_mobile_number,
            'latitude': self.latitude,
            'longitude': self.longitude
        }