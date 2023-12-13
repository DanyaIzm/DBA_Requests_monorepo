from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine as _create_async_engine,
)
from sqlalchemy.orm import DeclarativeBase

from config import DatabaseSettings


class Base(DeclarativeBase):
    ...


def create_async_engine() -> AsyncEngine:
    return _create_async_engine(url=DatabaseSettings().pg_dsn.unicode_string())


def create_async_sessionmaker(engine: AsyncEngine = None) -> async_sessionmaker:
    return async_sessionmaker(engine or create_async_engine())


async_sessionmaker_class = create_async_sessionmaker()


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_sessionmaker_class() as session:
        yield session
