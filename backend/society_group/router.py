from typing import List
from fastapi import APIRouter

from society_group.schemas import CreateSocietyGroupSchema, SocietyGroupSchema


router = APIRouter()


@router.get("/")
def get_society_groups() -> List[SocietyGroupSchema]:
    return [SocietyGroupSchema(name="Общество группа")]


@router.get("/{id}")
def get_society_group(id: int) -> SocietyGroupSchema:
    return SocietyGroupSchema(name="Общество группа")


@router.post("/")
def create_society_group(society_group: CreateSocietyGroupSchema):
    ...
