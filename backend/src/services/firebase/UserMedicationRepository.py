from typing import Optional, List
from firebase_admin import firestore
from models.UserMedication import UserMedication
from services.firebase.FirebaseInitializer import FirebaseInitializer


class UserMedicationRepository:

    firebase_app = FirebaseInitializer.initialize_firebase()
    user_medication_reference = firestore.client().collection('user_medication')

    @staticmethod
    def get_user_medications(user_id: str) -> List[UserMedication]:
        """
        Retrieves all medications for a specific user
        :param user_id: The user ID to retrieve medications for
        :return: List of UserMedication objects
        """
        docs = UserMedicationRepository.user_medication_reference.where('user_id', '==', user_id).stream()
        user_medications = [UserMedication(**doc.to_dict()) for doc in docs]
        return user_medications

    @staticmethod
    def upsert_user_medication(user_medication: UserMedication) -> str:
        """
        Inserts or Updates a user's medication into the user_medication collection
        :param user_medication: The UserMedication object to be inserted or updated
        :return: user_medication_id of the inserted or updated medication
        """
        if user_medication.user_medication_id is None:
            # This is a new user medication
            _, new_ref = UserMedicationRepository.user_medication_reference.add(user_medication.dict())
            new_ref.update({"user_medication_id": new_ref.id})
            return new_ref.id
        else:
            # Update the existing user medication
            UserMedicationRepository.user_medication_reference.document(user_medication.user_medication_id).set(user_medication.dict())
            return user_medication.user_medication_id

    @staticmethod
    def get_user_medication(user_medication_id: str) -> Optional[UserMedication]:
        """
        Retrieves a specific user's medication by user_medication_id
        :param user_medication_id: The user_medication_id of the medication to be retrieved
        :return: The UserMedication object or None if not found
        """
        doc_ref = UserMedicationRepository.user_medication_reference.document(user_medication_id)
        doc = doc_ref.get()
        if doc.exists:
            return UserMedication.from_dict(**doc.to_dict())
        else:
            return None

    @staticmethod
    def delete_user_medication(user_medication_id: str):
        """
        Deletes a specific user's medication by user_medication_id
        :param user_medication_id: The user_medication_id of the medication to be deleted
        :return: None
        """
        doc_ref = UserMedicationRepository.user_medication_reference.document(user_medication_id)
        doc_ref.delete()
