from typing import Annotated, List
from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from information_system.models import InformationSystem
from database import get_async_session


class InformationSystemRepository:
    def __init__(self, session: Annotated[AsyncSession, Depends(get_async_session)]):
        self.session = session

    async def get_all(self) -> List[InformationSystem]:
        get_request = select(InformationSystem)

        results = await self.session.execute(get_request)

        return results.scalars().all()

    async def get_by_id(self, id: int) -> InformationSystem:
        get_request = select(InformationSystem).where(InformationSystem.id == id)

        results = await self.session.execute(get_request)

        return results.scalar_one()

    async def create(self, fields: dict) -> InformationSystem:
        information_system = InformationSystem(**fields)

        self.session.add(information_system)

        await self.session.commit()

        await self.session.refresh(information_system)

        return information_system
