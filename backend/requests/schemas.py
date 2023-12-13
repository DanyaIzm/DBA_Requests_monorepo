from society_group.schemas import SocietyGroupSchema
from information_system.schemas import InformationSystemSchema
from pydantic import BaseModel, ConfigDict


class RequestSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    applicant_name: str
    information_system: InformationSystemSchema
    society_group: SocietyGroupSchema
    database_url: str
    description: str
    completed: bool


class CreateRequestSchema(BaseModel):
    applicant_name: str
    information_system: InformationSystemSchema
    society_group: SocietyGroupSchema
    database_url: str
    description: str
