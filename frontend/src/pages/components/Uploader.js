import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Grid from "@mui/material/Grid";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const PlaceholderImage = styled("div")({
  border: "3px dashed #44CBCB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#aaa",
  borderRadius: "10px",
});

const FileUploader = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [placeholderStyle, setPlaceholderStyle] = useState({ width: "250px", height: "150px" });

  useEffect(() => {
    if (uploadedImage) {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const height = 120; // Set the height of the placeholder
        const width = height * aspectRatio; // Calculate the width based on the aspect ratio
        setPlaceholderStyle({ width: `${width}px`, height: `${height}px` });
      };
      img.src = uploadedImage;
    }
  }, [uploadedImage]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setUploadedImage(imageURL);
    }
  };

  return (
    <Grid container alignItems="center" justifyContent="center" direction="column" spacing={2}>
      <Grid item>
        <input
          onChange={handleFileChange}
          type="file"
          accept=".png, .jpg, .jpeg"
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          <Button component="span" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload a Ultrasound Image
          </Button>
        </label>
      </Grid>
      <Grid item>
        {uploadedImage ? (
          <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: "250px", maxHeight: "250px" }} />
        ) : (
          <PlaceholderImage style={placeholderStyle}>Your Image will be display here.</PlaceholderImage>
        )}
      </Grid>
    </Grid>
  );
};

export default FileUploader;
