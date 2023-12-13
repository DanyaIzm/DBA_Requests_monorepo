from typing import Annotated, List
from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from requests.models import Request
from database import get_async_session


class RequestsRepository:
    def __init__(self, session: Annotated[AsyncSession, Depends(get_async_session)]):
        self.session = session

    async def get_all(self) -> List[Request]:
        get_request = select(Request)

        results = await self.session.execute(get_request)

        return results.scalars().all()

    async def get_by_id(self, id: int) -> Request:
        get_request = select(Request).where(Request.id == id)

        results = await self.session.execute(get_request)

        return results.scalar_one()

    async def create(self, fields: dict) -> Request:
        request = Request(**fields)

        self.session.add(request)

        await self.session.commit()

        await self.session.refresh(request)

        return request

    async def change_status(self, id: int, status: bool) -> Request:
        get_request = select(Request).where(Request.id == id)

        result = await self.session.execute(get_request)

        request = result.scalar_one()

        request.completed = status

        self.session.add(request)

        await self.session.commit()

        await self.session.refresh(request)

        return request
