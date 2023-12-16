from typing import Annotated, List
from fastapi import APIRouter, Depends
from requests.repository import RequestsRepository
from database import get_async_session
from information_system.schemas import InformationSystemSchema
from society_group.schemas import SocietyGroupSchema

from requests.schemas import RequestSchema, CreateRequestSchema


router = APIRouter()


@router.get("/")
async def get_requests(
    requests_repo: Annotated[RequestsRepository, Depends()],
    completed: bool | None = None,
) -> List[RequestSchema]:
    return await requests_repo.get_all(completed)


@router.get("/{id}")
async def get_request(
    id: int, requests_repo: Annotated[RequestsRepository, Depends()]
) -> RequestSchema:
    return await requests_repo.get_by_id(id)


@router.post("/")
async def create_request(
    request: CreateRequestSchema,
    requests_repo: Annotated[RequestsRepository, Depends()],
):
    return await requests_repo.create(request.model_dump())


@router.post("/{id}")
async def change_status(
    id: int, status: bool, requests_repo: Annotated[RequestsRepository, Depends()]
):
    return await requests_repo.change_status(id, status)
