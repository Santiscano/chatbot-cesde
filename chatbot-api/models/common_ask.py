from sqlalchemy import Column, DateTime, Float, Integer, String
from config.database import Base


class CommonAskModel(Base):
    __tablename__ = "Common_ask"
    id: int = Column(Integer, primary_key=True, index=True)
    ask_title: str = Column(String, index=True)
    response_info: str = Column(String, index=True)