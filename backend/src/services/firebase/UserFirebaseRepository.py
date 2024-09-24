from typing import Optional, List
from firebase_admin import firestore
from models.User import User
from services.firebase.FirebaseInitializer import FirebaseInitializer


class UserFirebaseRepository:

    firebase_app = FirebaseInitializer.initialize_firebase()
    user_collection_reference = firestore.client().collection('user')

    @staticmethod
    def upsert_user(user: User) -> str:
        """
        Inserts or Updates a user into the user collection
        :param user: User object to be inserted or updated
        :return: user_id of the inserted or updated user
        """
        if user.user_id is None:
            # This is a new user, create a new document
            _, new_ref = UserFirebaseRepository.user_collection_reference.add(user.dict())
            new_ref.update({"user_id": new_ref.id})
            return new_ref.id
        else:
            # Update the existing user
            UserFirebaseRepository.user_collection_reference.document(user.user_id).set(user.dict())
            return user.user_id

    @staticmethod
    def get_user(user_id: str) -> Optional[User]:
        """
        Retrieves a user from the user collection
        :param user_id: The user_id of the user to be retrieved
        :return: The User object or None if none exists
        """
        doc_ref = UserFirebaseRepository.user_collection_reference.document(user_id)
        doc = doc_ref.get()
        if doc.exists:
            return User(**doc.to_dict())
        else:
            return None