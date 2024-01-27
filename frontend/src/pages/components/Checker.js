import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FileUploader from "./Uploader";

export default function MediaCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px", padding: "16px" }}>
      <CardContent sx={{ textAlign: "center", fontWeight: "bold", letterSpacing: "5px" }}>
        <Typography variant="h4">
          Check Your Kidneys
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" style={{ marginBottom: "16px", marginTop: "10px" }}>
          Upload only png, jpg, or jpeg files
        </Typography>
      </CardContent>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <FileUploader />
      </Box>
    </Card>
  );
}
