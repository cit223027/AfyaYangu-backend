from typing import List
from pydantic import BaseModel
from src.models.UserMedication import UserMedication


class Prescription(BaseModel):
    user_id: str
    date_scanned: int
    medications: List[UserMedication]

    @staticmethod
    def from_dict(data: dict) -> 'Prescription':
        return Prescription(
            user_id=data['user_id'],
            date_scanned=data['date_scanned'],
            medications=[UserMedication.from_dict(med) for med in data['medications']]
        )

    def to_dict(self) -> dict:
        return {
            'user_id': self.user_id,
            'date_scanned': self.date_scanned,
            'medications': [med.to_dict() for med in self.medications]
        }
