from pydantic import BaseModel, ConfigDict


class SocietyGroupSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    name: str


class CreateSocietyGroupSchema(BaseModel):
    name: str
