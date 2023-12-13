from typing import Annotated, List
from fastapi import APIRouter, Depends
from database import get_async_session
from information_system.schemas import InformationSystemSchema
from society_group.schemas import SocietyGroupSchema

from requests.schemas import RequestSchema, CreateRequestSchema


router = APIRouter()


@router.get("/")
async def get_requests(
    sessionmaker: Annotated[get_async_session, Depends()]
) -> List[RequestSchema]:
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
async def get_request(id: int) -> RequestSchema:
    return RequestSchema(
        applicant_name="Daniel",
        information_system=InformationSystemSchema(name="123"),
        society_group=SocietyGroupSchema(name="123"),
        database_url="https://123.com/123",
        description="Hello, world!",
        completed=False,
    )


@router.post("/")
async def create_request(request: CreateRequestSchema):
    ...


@router.post("/{id}")
async def complete_request(id: int):
    ...
