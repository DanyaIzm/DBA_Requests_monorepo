from typing import List
from sqlalchemy.orm import Mapped, mapped_column, relationship
from requests.models import Request

from database import Base


class SocietyGroup(Base):
    __tablename__ = "society_group"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str]

    requests: Mapped[List[Request]] = relationship(
        uselist=True, back_populates="society_group"
    )
