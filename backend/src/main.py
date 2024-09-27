import os
import fastapi as FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers.AIRouter import ai_router
from api.routers.DataRouter import data_router
from api.routers.SmsRouter import sms_router
from services.firebase.FirebaseInitializer import FirebaseInitializer

firebase_app = FirebaseInitializer.initialize_firebase()

app = FastAPI.FastAPI(title = "AfyaYangu")
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.get("/health")
def health():
    return { "message": "The AfyaYangu API is healthy" }


app.include_router(ai_router)
app.include_router(data_router)
app.include_router(sms_router)