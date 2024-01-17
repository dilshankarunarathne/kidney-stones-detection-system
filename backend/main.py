from fastapi import FastAPI

from backend.routes import main

app = FastAPI()

app.include_router(main.router)
