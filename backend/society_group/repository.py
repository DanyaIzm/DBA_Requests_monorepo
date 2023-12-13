from typing import Annotated, List
from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from society_group.models import SocietyGroup
from database import get_async_session


class SocietyGroupRepository:
    def __init__(self, session: Annotated[AsyncSession, Depends(get_async_session)]):
        self.session = session

    async def get_all(self) -> List[SocietyGroup]:
        get_request = select(SocietyGroup)

        results = await self.session.execute(get_request)

        return results.scalars().all()

    async def get_by_id(self, id: int) -> SocietyGroup:
        get_request = select(SocietyGroup).where(SocietyGroup.id == id)

        results = await self.session.execute(get_request)

        return results.scalar_one()

    async def create(self, fields: dict) -> SocietyGroup:
        society_group = SocietyGroup(**fields)

        self.session.add(society_group)

        await self.session.commit()

        await self.session.refresh(society_group)

        return society_group
