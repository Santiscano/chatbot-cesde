from pydantic import BaseModel, Field


class ProgramsEntity(BaseModel):
    id: int = Field(default=None, title="ID")
    ask: str = Field(default=None, title="Title")
    response: str = Field(default=None, title="Content")

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "id": 1,
                "title": "string",
                "content": "string",
            }
        }