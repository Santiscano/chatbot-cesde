from pydantic import BaseModel, Field

class CommonAskEntity(BaseModel):
    id: int = Field(default=None, title="ID")
    ask_title: str = Field(default=None, title="ask_title")
    response_info: str = Field(default=None, title="response_info")
    
    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "id": 1,
                "ask_title": "string",
                "response_info": "string",
            }
        }