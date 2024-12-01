import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm.session import sessionmaker

DATABASE_URL = "mysql+pymysql://root:123456@localhost:3307/cesdeBot"

engine = create_engine(DATABASE_URL)
Base = declarative_base()

# crear sesion sqlalquemy
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
