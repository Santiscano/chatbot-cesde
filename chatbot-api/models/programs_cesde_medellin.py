from sqlalchemy import Column, Integer, String
from config.database import Base

class ProgramsModel(Base):
    __tablename__ = "Programs_cesde_medellin"
    id: int = Column(Integer, primary_key=True, index=True)
    ask: str = Column(String, index=True)
    response: str = Column(String, index=True)