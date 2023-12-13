from sqlalchemy.orm import Mapped, mapped_column, relationship

from database import Base


class SocietyGroup(Base):
    __tablename__ = "society_group"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str]

    requests = relationship("Request", uselist=True, back_populates="society_group")
