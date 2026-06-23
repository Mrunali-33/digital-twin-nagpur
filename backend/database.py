# backend/database.py

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

DATABASE_URL = "postgresql://postgres:neeri123@localhost:5432/digital_twin_db"

engine = create_engine(
    DATABASE_URL,
    echo=True
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()

# database.py

from sqlalchemy.orm import Session

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()