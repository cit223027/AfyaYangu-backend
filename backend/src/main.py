import os
import fastapi as FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.routers.AIRouter import ai_router
from src.api.routers.DataRouter import data_router

app = FastAPI.FastAPI(title = "")
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