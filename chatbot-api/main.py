from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.programs import programs_router

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas las IPs y dominios
    allow_credentials=True,  # Permite el envío de cookies y headers con credenciales
    allow_methods=["*"],  # Permite todos los métodos (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Permite todos los headers
)

app.title = "Chatbot API"
app.version = "0.1.0"
app.description = "This is a very fancy project, with auto docs for the API and everything."

app.include_router(programs_router)

# @app.get("/programs")
# def read_root():
#     return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}