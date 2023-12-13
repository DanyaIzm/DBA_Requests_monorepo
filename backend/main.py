from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from requests.router import router as requests_router
from society_group.router import router as society_group_router
from information_system.router import router as information_system_router

app = FastAPI()

app.dependency_overrides

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(requests_router, prefix="/requests", tags=["Requests"])
app.include_router(society_group_router, prefix="/societygroup", tags=["Society Group"])
app.include_router(
    information_system_router, prefix="/informationsystem", tags=["Information System"]
)
