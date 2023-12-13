from typing import Annotated, List
from fastapi import APIRouter, Depends
from society_group.repository import SocietyGroupRepository

from society_group.schemas import CreateSocietyGroupSchema, SocietyGroupSchema


router = APIRouter()


@router.get("/")
async def get_society_groups(
    society_group_repo: Annotated[SocietyGroupRepository, Depends()]
) -> List[SocietyGroupSchema]:
    return await society_group_repo.get_all()


@router.get("/{id}")
async def get_society_group(
    id: int, society_group_repo: Annotated[SocietyGroupRepository, Depends()]
) -> SocietyGroupSchema:
    return await society_group_repo.get_by_id(id)


@router.post("/")
async def create_society_group(
    society_group: CreateSocietyGroupSchema,
    society_group_repo: Annotated[SocietyGroupRepository, Depends()],
) -> SocietyGroupSchema:
    return await society_group_repo.create(society_group.model_dump())
