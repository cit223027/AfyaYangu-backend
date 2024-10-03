from enum import Enum
from typing import List, Optional
from pydantic import BaseModel

class DosageType(str, Enum):
    syrup = "syrup"
    tablets = "tablets"

class DosagePeriod(str, Enum):
    day = "day"
    week = "week"
    month = "month"

class IntakeMealInstruction(str, Enum):
    before_meal = "before_meal"
    after_meal = "after_meal"

class UserMedication(BaseModel):
    user_medication_id: Optional[str] = None
    user_id: str
    medicine_name: str
    dosage_type: DosageType
    dosage_period: DosagePeriod
    dosages_per_period: int
    intake_per_dosage: int
    intake_meal_instruction: Optional[IntakeMealInstruction] = None
    time_to_take: List[int] = [] # Time is measured in seconds from start of dosage_period (0000 hrs for day, Sunday 0000hrs for week, 1st 0000hrs for month)

    @staticmethod
    def from_dict(data: dict) -> 'UserMedication':
        return UserMedication(
            user_medication_id=data['user_medication_id'],
            user_id=data['user_id'],
            medicine_name=data['medicine_name'],
            dosage_type=data['dosage_type'],
            dosage_period=data['dosage_period'],
            dosages_per_period=data['dosages_per_period'],
            intake_per_dosage=data['intake_per_dosage'],
            intake_meal_instruction=data['intake_meal_instruction'],
            time_to_take=data['time_to_take']
        )

    def to_dict(self) -> dict:
        return {
            'user_medication_id': self.user_medication_id,
            'user_id': self.user_id,
            'medicine_name': self.medicine_name,
            'dosage_type': self.dosage_type,
            'dosage_period': self.dosage_period,
            'dosages_per_period': self.dosages_per_period,
            'intake_per_dosage': self.intake_per_dosage,
            'intake_meal_instruction': self.intake_meal_instruction,
            'time_to_take': self.time_to_take
        }

    class Config:
        schema_extra = {
            "example": {
                "user_id": "string",
                "medication_id": "string",
                "dosage_type": "syrup",
                "dosage_period": "day",
                "dosages_per_period": 3,
                "intake_per_dosage": 5,
                "intake_meal_instruction": None,
                "time_to_take": [32400, 46800, 75600],
            }
        }
