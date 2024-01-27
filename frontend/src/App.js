import React from "react";
import TopNavbar from "./TopNavbar";
import HomePage from "./pages/homepage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlassCursor from "./pages/components/GlassCursor";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <TopNavbar />
        <div style={{ padding: "20px" }}>
          <HomePage />
        </div>
        <GlassCursor />
      </div>
    </ThemeProvider>
  );
}

export default App;
