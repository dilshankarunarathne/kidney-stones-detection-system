import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

function TopNavbar() {
  const name = " AI Kidney Stones Detector";
  const [animatedName, setAnimatedName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let nextLetterIndex = animatedName.length % name.length;
      setAnimatedName((prevName) => {
        // If the animatedName is complete, reset it
        if (prevName === name) {
          return "";
        }
        // Otherwise, append the next letter
        return prevName + name[nextLetterIndex];
      });
    }, 200); // Adjust the interval duration

    return () => clearInterval(interval);
  }, [animatedName, name]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar>
        <div>
          <img 
            src="/static/images/logo.jpg" 
            alt="Logo" 
            style={{ height: 40, borderRadius: '50%' }} // Apply rounded border
          />
        </div>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff', marginLeft: 2 }}>
          <motion.span>
            {animatedName}
          </motion.span>
        </Typography>
        <Button variant="contained" color="primary" href="/new-page">Go to New Page</Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavbar;
