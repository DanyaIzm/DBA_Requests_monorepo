from pydantic import BaseModel, ConfigDict


class InformationSystemSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str


class CreateInformationSystemSchema(BaseModel):
    name: str
