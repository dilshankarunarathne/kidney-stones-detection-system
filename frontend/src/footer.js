import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function TopNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" align="center">Kidney Stones Detector </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavbar;
