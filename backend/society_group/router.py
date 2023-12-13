from typing import List
from fastapi import APIRouter

from society_group.schemas import CreateSocietyGroupSchema, SocietyGroupSchema


router = APIRouter()


@router.get("/")
async def get_society_groups() -> List[SocietyGroupSchema]:
    return [SocietyGroupSchema(name="Общество группа")]


@router.get("/{id}")
async def get_society_group(id: int) -> SocietyGroupSchema:
    return SocietyGroupSchema(name="Общество группа")


@router.post("/")
async def create_society_group(society_group: CreateSocietyGroupSchema):
    ...
