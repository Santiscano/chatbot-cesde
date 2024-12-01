from typing import List

from fastapi import APIRouter
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

from entities.Programs_cesde_medellin import ProgramsEntity
from config.database import SessionLocal
from services.programs_service import ProgramsService

programs_router = APIRouter()

@programs_router.get("/programs", tags=["Programs"], response_model=ProgramsEntity, status_code=200)
def get_programs() -> List[ProgramsEntity]:
    db = SessionLocal()
    
    data = ProgramsService(db).get_programs()
    print(data)
    
    return JSONResponse(
        status_code=200,
        content=jsonable_encoder(data)
    )