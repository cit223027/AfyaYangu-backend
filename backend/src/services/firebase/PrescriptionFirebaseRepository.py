from typing import List, Optional

import firebase_admin
from firebase_admin import firestore
from models.Prescription import Prescription
from services.firebase.FirebaseInitializer import FirebaseInitializer
from services.firebase.UserMedicationRepository import UserMedicationRepository


class PrescriptionFirebaseRepository:

    @staticmethod
    def get_prescription_collection_reference(firebase_app: firebase_admin.App):
        return firestore.client(firebase_app).collection('prescription')

    @staticmethod
    def upsert_prescription(firebase_app, prescription: Prescription) -> str:
        """
        Inserts or Updates a prescription into the prescription collection.
        :param firebase_app:
        :param prescription: Prescription to be inserted or updated.
        :return: prescription_id of the inserted or updated prescription.
        """
        # Store medications as medication_ids
        prescription_data = prescription.dict()
        medication_ids = []

        for medication in prescription.medications:
            medication_id = UserMedicationRepository.upsert_user_medication(medication)
            medication_ids.append(medication_id)

        # Update the prescription's medications to store medication_ids instead of objects
        prescription_data['medications'] = medication_ids

        if prescription.prescription_id is None:
            # This is a new prescription
            _, new_ref = PrescriptionFirebaseRepository.get_prescription_collection_reference(firebase_app).add(prescription_data)
            new_ref.update({"prescription_id": new_ref.id})
            return new_ref.id
        else:
            # Updating an existing prescription
            PrescriptionFirebaseRepository.get_prescription_collection_reference(firebase_app).document(prescription.prescription_id).update(prescription_data)
            return prescription.prescription_id

    @staticmethod
    def get_prescription(firebase_app, prescription_id: str) -> Optional[Prescription]:
        """
        Retrieves a prescription from the prescription collection.
        :param prescription_id: The prescription_id of the prescription to be retrieved.
        :return: The prescription or None if none exists.
        """
        doc_ref = PrescriptionFirebaseRepository.get_prescription_collection_reference(firebase_app).document(prescription_id)
        doc = doc_ref.get()
        if doc.exists:
            prescription_data = doc.to_dict()
            # Retrieve UserMedication objects based on medication_ids
            medication_ids = prescription_data.get('medications', [])
            medications = [UserMedicationRepository.get_user_medication(med_id) for med_id in medication_ids]

            # Replace medication_ids with UserMedication objects
            prescription_data['medications'] = medications
            return Prescription(**prescription_data)
        else:
            return None

    @staticmethod
    def get_all_prescriptions(firebase_app) -> List[Prescription]:
        """
        Retrieves all prescriptions from the prescription collection.
        :return: List[Prescription]
        """
        docs = PrescriptionFirebaseRepository.get_prescription_collection_reference(firebase_app).stream()
        return PrescriptionFirebaseRepository._get_prescription_information(docs)

    @staticmethod
    def get_prescriptions_by_user(firebase_app, user_id: str) -> List[Prescription]:
        """
        Retrieves all prescriptions for a specific user.
        :param firebase_app:
        :param user_id: The user_id for which prescriptions need to be retrieved.
        :return: List[Prescription]
        """
        docs = PrescriptionFirebaseRepository.get_prescription_collection_reference(firebase_app).where("user_id", "==", user_id).stream()
        return PrescriptionFirebaseRepository._get_prescription_information(docs)

    @staticmethod
    def _get_prescription_information(docs) -> List[Prescription]:
        prescriptions = []
        for doc in docs:
            prescription_data = doc.to_dict()
            medication_ids = prescription_data.get('medications', [])
            medications = [UserMedicationRepository.get_user_medication(med_id) for med_id in medication_ids]
            prescription_data['medications'] = medications
            prescriptions.append(Prescription(**prescription_data))
        return prescriptions

    @staticmethod
    def delete_prescription(firebase_app, prescription_id: str):
        """
        Deletes a prescription and its associated UserMedications from the database.
        :param prescription_id: The prescription_id of the prescription to be deleted.
        :return: None
        """
        # First, delete associated medications
        prescription = PrescriptionFirebaseRepository.get_prescription(firebase_app, prescription_id)
        if prescription:
            for medication in prescription.medications:
                if medication and medication.user_medication_id:
                    UserMedicationRepository.delete_user_medication(medication.user_medication_id)

        # Then delete the prescription
        doc_ref = PrescriptionFirebaseRepository.get_prescription_collection_reference(firebase_app).document(prescription_id)
        doc_ref.delete()
