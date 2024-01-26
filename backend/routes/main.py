from fastapi import APIRouter, File

router = APIRouter(
    prefix="/api/detect",
    tags=["detect"],
    responses={404: {"description": "The requested url was not found"}},
)


@router.post("")
async def detect(
        image: UploadFile = File(...)
):
    # Base 64 decode the image

    # Run the model on the image

    # Return the result
    result = None
    return {"result": result}
