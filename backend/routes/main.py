from fastapi import APIRouter, File, UploadFile

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
    if image and image.content_type != "image/jpeg":
        return {300: {"description": "Only jpeg images are supported"}}
    else:
        contents = await image.read()
        nparray = np.fromstring(contents, np.uint8)
        img = cv2.imdecode(nparray, cv2.IMREAD_COLOR)

    # Run the model on the image

    # Return the result
    result = None
    return {"result": result}
