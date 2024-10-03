from typing import Optional, List

import firebase_admin
from firebase_admin import firestore
from models.User import User
from services.firebase.FirebaseInitializer import FirebaseInitializer


class UserFirebaseRepository:


    @staticmethod
    def get_user_collection_reference(firebase_app: firebase_admin.App):
        return firestore.client(firebase_app).collection('user')

    @staticmethod
    def upsert_user(firebase_app, user: User) -> str:
        """
        Inserts or Updates a user into the user collection
        :param user: User object to be inserted or updated
        :return: user_id of the inserted or updated user
        """
        if user.user_id is None:
            # This is a new user, create a new document
            _, new_ref = UserFirebaseRepository.get_user_collection_reference(firebase_app).add(user.dict())
            new_ref.update({"user_id": new_ref.id})
            return new_ref.id
        else:
            # Update the existing user
            UserFirebaseRepository.get_user_collection_reference(firebase_app).document(user.user_id).set(user.dict())
            return user.user_id

    @staticmethod
    def get_user(firebase_app, user_id: str) -> Optional[User]:
        """
        Retrieves a user from the user collection
        :param user_id: The user_id of the user to be retrieved
        :return: The User object or None if none exists
        """
        doc_ref = UserFirebaseRepository.get_user_collection_reference(firebase_app).document(user_id)
        doc = doc_ref.get()
        if doc.exists:
            return User(**doc.to_dict())
        else:
            return None