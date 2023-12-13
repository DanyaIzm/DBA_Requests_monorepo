from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, Text

from database import Base


class Request(Base):
    __tablename__ = "request"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    applicant_name: Mapped[str] = mapped_column(nullable=False)
    database_url: Mapped[str] = mapped_column(nullable=True)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    completed: Mapped[bool] = mapped_column(nullable=False, default=False)
    information_system_id = mapped_column(
        ForeignKey("information_system.id"), nullable=False
    )
    society_group_id = mapped_column(ForeignKey("society_group.id"), nullable=False)

    information_system = relationship("InformationSystem", back_populates="requests")
    society_group = relationship("SocietyGroup", back_populates="requests")
