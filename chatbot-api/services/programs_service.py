from typing import List

from entities.Programs_cesde_medellin import ProgramsEntity
from models.programs_cesde_medellin import ProgramsModel

class ProgramsService:
    
    def __init__(self, db) -> None:
        self.db = db
        
    def get_programs(self) -> List[ProgramsEntity]:
        return self.db.query(ProgramsModel).all()