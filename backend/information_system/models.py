from sqlalchemy.orm import Mapped, mapped_column, relationship

from database import Base


class InformationSystem(Base):
    __tablename__ = "information_system"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str]

    requests = relationship(
        "Request", uselist=True, back_populates="information_system"
    )
