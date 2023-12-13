from typing import Annotated, List
from fastapi import APIRouter, Depends
from information_system.repository import InformationSystemRepository
from information_system.schemas import (
    InformationSystemSchema,
    CreateInformationSystemSchema,
)

router = APIRouter()


@router.get("/")
async def get_information_systems(
    information_system_repo: Annotated[InformationSystemRepository, Depends()]
) -> List[InformationSystemSchema]:
    return await information_system_repo.get_all()


@router.get("/{id}")
async def get_information_system(
    id: int, information_system_repo: Annotated[InformationSystemRepository, Depends()]
) -> InformationSystemSchema:
    return await information_system_repo.get_by_id(id)


@router.post("/")
async def create_information_system(
    information_system: CreateInformationSystemSchema,
    information_system_repo: Annotated[InformationSystemRepository, Depends()],
) -> InformationSystemSchema:
    return await information_system_repo.create(information_system.model_dump())
