from fastapi import APIRouter

router = APIRouter(
    prefix="/api/detect",
    tags=["detect"],
    responses={404: {"description": "The requested page was not found"}},
)


