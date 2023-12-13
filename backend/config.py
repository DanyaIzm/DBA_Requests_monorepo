from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import PostgresDsn


class DatabaseSettings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env")

    pg_dsn: PostgresDsn
