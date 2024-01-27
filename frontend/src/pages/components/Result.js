import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const PlaceholderImage = styled("div")({
  border: "3px dashed #44CBCB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#aaa",
  borderRadius: "10px",
  width: "100%", // Added width to occupy full space
  height: "100%", // Added height to occupy full space
});

const placeholderStyle = {
  width: "400px", // Adjust width as per your requirement
  height: "200px", // Adjust height as per your requirement
};

export default function MediaCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px", padding: "16px" }}>
      <CardContent sx={{ textAlign: "center", fontWeight: "bold", letterSpacing: "5px" }}>
        <Typography variant="h4">
          The Result
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" style={{ marginBottom: "16px", marginTop: "10px" }}>
          Check your results
        </Typography>
      </CardContent>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
        <PlaceholderImage style={placeholderStyle}>
          The Result will be displayed here...
        </PlaceholderImage>
      </Box>
    </Card>
  );
}
