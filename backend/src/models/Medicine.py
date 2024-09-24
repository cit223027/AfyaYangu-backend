from typing import Optional, List

from pydantic import BaseModel


class Medicine(BaseModel):
    medicine_id: Optional[str] = None
    english_name: str
    swahili_name: Optional[str] = None
    kikuyu_name: Optional[str] = None
    side_effects: List[str] = []
    treats: List[str] = []

    @staticmethod
    def from_dict(data: dict):
        return Medicine(
            medicine_id=data.get("medicine_id"),
            english_name=data.get("english_name"),
            swahili_name=data.get("swahili_name"),
            kikuyu_name=data.get("kikuyu_name"),
            side_effects=data.get("side_effects"),
            treats=data.get("treats")
        )

    def to_dict(self):
        return {
            'medicine_id': self.medicine_id,
            'english_name': self.english_name,
            'swahili_name': self.swahili_name,
            'kikuyu_name': self.kikuyu_name,
            'side_effects': self.side_effects,
            'treats': self.treats,
        }
