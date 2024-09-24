import firebase_admin
from firebase_admin import credentials

class FirebaseInitializer:

    @staticmethod
    def initialize_firebase() -> firebase_admin.App:
        if not firebase_admin._apps:
            cred = credentials.Certificate('bkmbigo-afyayangu-creds.json')
            firebase_app = firebase_admin.initialize_app(cred)
            return firebase_app
        else:
            return firebase_admin.get_app()
