from typing import List
from fastapi import APIRouter
from information_system.schemas import (
    InformationSystemSchema,
    CreateInformationSystemSchema,
)


router = APIRouter()


@router.get("/")
def get_information_system() -> List[InformationSystemSchema]:
    return [InformationSystemSchema(name="Информационная система")]


@router.get("/{id}")
def get_society_group(id: int) -> InformationSystemSchema:
    return InformationSystemSchema(name="Информационная система")


@router.post("/")
def create_society_group(society_group: CreateInformationSystemSchema):
    ...
