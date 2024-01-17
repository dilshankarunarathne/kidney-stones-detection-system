from fastapi import APIRouter

router = APIRouter(
    prefix="/api/detect",
    tags=["detect"],
    responses={404: {"description": "The requested page was not found"}},
)


@router.post("/")
async def detect():
    return {"message": "Hello World"}
