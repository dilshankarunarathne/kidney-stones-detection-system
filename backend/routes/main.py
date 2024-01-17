from fastapi import APIRouter, File

router = APIRouter(
    prefix="/api/detect",
    tags=["detect"],
    responses={404: {"description": "The requested page was not found"}},
)


@router.post("/")
async def detect(
        img: File = File(...),
):
    
    return {"message": "Hello World"}
