from pydantic import BaseModel

class User(BaseModel):
    user_id: str
    first_name: str
    last_name: str

    @staticmethod
    def from_dict(data: dict):
        return User(
            user_id=data['user_id'],
            first_name=data['first_name'],
            last_name=data['last_name']
        )

    def to_dict(self) -> dict:
        return {
            'user_id': self.user_id,
            'first_name': self.first_name,
            'last_name': self.last_name
        }
