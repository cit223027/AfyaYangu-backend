from typing import List
from pydantic import BaseModel
from models.UserMedication import UserMedication


class Prescription(BaseModel):
    prescription_id: str
    user_id: str
    date_scanned: int
    medications: List[UserMedication]

    @staticmethod
    def from_dict(data: dict) -> 'Prescription':
        return Prescription(
            prescription_id=data['prescription_id'],
            user_id=data['user_id'],
            date_scanned=data['date_scanned'],
            medications=[UserMedication.from_dict(med) for med in data['medications']]
        )

    def to_dict(self) -> dict:
        return {
            'prescription_id': self.prescription_id,
            'user_id': self.user_id,
            'date_scanned': self.date_scanned,
            'medications': [med.to_dict() for med in self.medications]
        }
