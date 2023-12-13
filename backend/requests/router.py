from typing import List
from fastapi import APIRouter
from information_system.schemas import InformationSystemSchema
from society_group.schemas import SocietyGroupSchema

from requests.schemas import RequestSchema, CreateRequestSchema


router = APIRouter()


@router.get("/")
def get_requests() -> List[RequestSchema]:
    return [
        RequestSchema(
            applicant_name="Daniel",
            information_system=InformationSystemSchema(name="123"),
            society_group=SocietyGroupSchema(name="123"),
            database_url="https://123.com/123",
            description="Hello, world!",
            completed=False,
        )
    ]


@router.get("/{id}")
def get_request(id: int) -> RequestSchema:
    return RequestSchema(
        applicant_name="Daniel",
        information_system=InformationSystemSchema(name="123"),
        society_group=SocietyGroupSchema(name="123"),
        database_url="https://123.com/123",
        description="Hello, world!",
        completed=False,
    )


@router.post("/")
def create_request(request: CreateRequestSchema):
    ...


@router.post("/{id}")
def complete_request(id: int):
    ...
