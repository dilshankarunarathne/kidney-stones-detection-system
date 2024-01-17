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
    # Base 64 decode the image

    # Run the model on the image

    return {"message": "Hello World"}
