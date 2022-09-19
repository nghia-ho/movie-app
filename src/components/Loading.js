import { Box, CircularProgress } from "@mui/material";
import React from "react";

function LoadingScreen() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "70%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingScreen;
