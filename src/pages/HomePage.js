import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import Popular from "../components/Popular";
import LatestTrailer from "../components/LatestTrailer";
import Trending from "../components/Trending";
import { Box, Stack } from "@mui/material";

function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ width: "100%" }}
      >
        <Welcome />
        <Popular />
        <LatestTrailer />
        <Trending />
      </Stack>
    </Box>
  );
}

export default HomePage;
