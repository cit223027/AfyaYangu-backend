from typing import Optional, List

from firebase_admin import firestore
from models.Medicine import Medicine
from services.firebase.FirebaseInitializer import FirebaseInitializer


class MedicineFirebaseRepository:

    firebase_app = FirebaseInitializer.initialize_firebase()
    medicine_collection_reference = firestore.client().collection('medicine')

    @staticmethod
    def upsert_medicine(medicine: Medicine) -> str:
        """
        Inserts or Updates a medicine into the medicine collection
        :param medicine: Medicine to be inserted
        :return: medicine_id of the inserted medicine
        """
        if medicine.medicine_id is None:
            # This is a new medicine
            _, new_ref = MedicineFirebaseRepository.medicine_collection_reference.add(medicine.to_dict())
            new_ref.update({ "medicine_id": new_ref.id })
        else:
            # Updating a medicine
            MedicineFirebaseRepository.medicine_collection_reference.document(medicine.medicine_id).update(medicine.to_dict())

    @staticmethod
    def get_medicine(medicine_id: str) -> Optional[Medicine]:
        """
        Retrieves a medicine from the medicine collection
        :param medicine_id: The medicine_id of the medicine to be retrieved
        :return: The medicine or None if none exists
        """
        doc_ref = MedicineFirebaseRepository.medicine_collection_reference.document(medicine_id)
        doc = doc_ref.get()
        if doc.exists:
            return Medicine.from_dict(doc.to_dict())
        else:
            return None

    @staticmethod
    def delete_medicine(medicine_id: str):
        """
        Deletes a medicine from the medicine collection
        :param medicine_id: The medicine_id of the medicine to be deleted
        :return: None
        """
        doc_ref = MedicineFirebaseRepository.medicine_collection_reference.document(medicine_id)
        doc_ref.delete()

    @staticmethod
    def get_all_medicines() -> List[Medicine]:
        """
        Retrieves all medicines from the medicine collection
        :return: List[Medicine]
        """
        docs = MedicineFirebaseRepository.medicine_collection_reference.stream()
        medicines = [Medicine(**doc.to_dict()) for doc in docs]
        return medicines

    @staticmethod
    def search_medicine(medicine_name: str) -> List[Medicine]:
        """
        Searches a medicine by name
        :param medicine_name: The search name of the medicine to be searched
        :return:
        """
        # Prepare a case-insensitive partial match query by using Firestore's `>=` and `<=` operators
        medicine_name_lower = medicine_name.lower()

        # Queries for matching medicines
        english_query = MedicineFirebaseRepository.medicine_collection_reference.where(
            'english_name', '>=', medicine_name_lower).where('english_name', '<=', medicine_name_lower + '\uf8ff').stream()

        swahili_query = MedicineFirebaseRepository.medicine_collection_reference.where(
            'swahili_name', '>=', medicine_name_lower).where('swahili_name', '<=', medicine_name_lower + '\uf8ff').stream()

        kikuyu_query = MedicineFirebaseRepository.medicine_collection_reference.where(
            'kikuyu_name', '>=', medicine_name_lower).where('kikuyu_name', '<=', medicine_name_lower + '\uf8ff').stream()

        # Collect results from all queries
        medicines = set()
        for doc in english_query:
            medicines.add(Medicine(**doc.to_dict()))
        for doc in swahili_query:
            medicines.add(Medicine(**doc.to_dict()))
        for doc in kikuyu_query:
            medicines.add(Medicine(**doc.to_dict()))

        return list(medicines)