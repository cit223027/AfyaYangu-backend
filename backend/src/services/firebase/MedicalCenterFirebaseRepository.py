from typing import Optional, List
from firebase_admin import firestore
from geopy.distance import geodesic  # For distance calculation
from src.models.MedicalCenter import MedicalCenter

class MedicalCenterFirebaseRepository:

    medical_center_collection_reference = firestore.client().collection('medical_center')

    @staticmethod
    def upsert_medical_center(medical_center: MedicalCenter) -> str:
        """
        Inserts or updates a medical center in the medical_center collection
        :param medical_center: MedicalCenter object to be upserted
        :return: medical_center_id of the inserted medical center
        """
        if medical_center.medical_center_id is None:
            # This is a new medical center
            _, new_ref = MedicalCenterFirebaseRepository.medical_center_collection_reference.add(medical_center.to_dict())
            new_ref.update(
                    {"medical_center_id": new_ref.id}
            )
            return new_ref.id
        else:
            # Updating an existing medical center
            MedicalCenterFirebaseRepository.medical_center_collection_reference.document(medical_center.medical_center_id).update(medical_center.to_dict())
            return medical_center.medical_center_id

    @staticmethod
    def get_all_medical_centers() -> List[MedicalCenter]:
        """
        Returns all medical centers in the medical_center collection
        :return: List of MedicalCenter
        """
        docs = MedicalCenterFirebaseRepository.medical_center_collection_reference.stream()
        medicines = [MedicalCenter.from_dict(**doc.to_dict()) for doc in docs]
        return medicines

    @staticmethod
    def get_medical_center(medical_center_id: str) -> Optional[MedicalCenter]:
        """
        Retrieves a medical center by ID
        :param medical_center_id: ID of the medical center to retrieve
        :return: MedicalCenter object or None if not found
        """
        doc_ref = MedicalCenterFirebaseRepository.medical_center_collection_reference.document(medical_center_id)
        doc = doc_ref.get()
        if doc.exists:
            return MedicalCenter.from_dict(**doc.to_dict())
        return None

    @staticmethod
    def delete_medical_center(medical_center_id: str):
        """
        Deletes a medical center by ID
        :param medical_center_id: ID of the medical center to delete
        """
        doc_ref = MedicalCenterFirebaseRepository.medical_center_collection_reference.document(medical_center_id)
        doc_ref.delete()
        return doc_ref.id

    @staticmethod
    def search_medical_center_by_name(name: str) -> List[MedicalCenter]:
        """
        Searches for medical centers by name (partial match)
        :param name: Name to search for
        :return: List of MedicalCenter objects that match the name
        """
        query = MedicalCenterFirebaseRepository.medical_center_collection_reference.where('name', '>=', name).where('name', '<=', name + '\uf8ff')
        docs = query.stream()
        return [MedicalCenter.from_dict(**doc.to_dict()) for doc in docs]

    @staticmethod
    def filter_medical_centers_by_location(
            latitude: float,
            longitude: float,
            max_distance_km: float = 50
    ) -> List[MedicalCenter]:
        """
        Searches for medical centers within a given distance from the provided location
        :param latitude: Latitude of the reference point
        :param longitude: Longitude of the reference point
        :param max_distance_km: Maximum distance (in kilometers) from the reference point
        :return: List of MedicalCenter objects within the distance
        """
        all_centers = MedicalCenterFirebaseRepository.medical_center_collection_reference.stream()
        nearby_centers = []

        reference_point = (latitude, longitude)

        for doc in all_centers:
            center_data = doc.to_dict()
            center_location = (center_data['latitude'], center_data['longitude'])
            distance_km = geodesic(reference_point, center_location).km

            if distance_km <= max_distance_km:
                nearby_centers.append(MedicalCenter.from_dict(**center_data))

        return nearby_centers

    @staticmethod
    def get_closest_medical_centers(
            latitude: float,
            longitude: float,
            number_of_centers: int = 3
    ) -> List[MedicalCenter]:
        """
        Returns the closest medical centers to the given latitude and longitude.
        :param latitude: Latitude of the user
        :param longitude: Longitude of the user
        :param number_of_centers: Number of closest centers to return (default is 3)
        :return: List of MedicalCenter objects sorted by distance
        """
        all_centers = MedicalCenterFirebaseRepository.medical_center_collection_reference.stream()
        reference_point = (latitude, longitude)
        centers_with_distance = []

        # Calculate distance for each center
        for doc in all_centers:
            center_data = doc.to_dict()
            center_location = (center_data['latitude'], center_data['longitude'])
            distance_km = geodesic(reference_point, center_location).km
            centers_with_distance.append((MedicalCenter(**center_data), distance_km))

        # Sort centers by distance and return the closest ones
        centers_with_distance.sort(key=lambda x: x[1])
        closest_centers = [center for center, _ in centers_with_distance[:number_of_centers]]

        return closest_centers