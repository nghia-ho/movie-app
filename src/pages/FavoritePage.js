import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useAuth } from "../contexts/AuthContext";
import MovieCard from "../components/MovieCard";
import { Stack } from "@mui/material";
function FavoritePage() {
  const auth = useAuth();
  return (
    <>
      <Stack sx={{ mt: 5, mb: 10, mx: 15 }}>
        <Typography variant="h5" mb={2} sx={{ fontWeight: 600 }}>
          YOUR FAVORITE MOVIES
        </Typography>
        <Divider />
        <Grid container spacing={2} mt={2}>
          {auth.favorite?.map((movie, index) => (
            <Grid key={index} item xs={6} md={4} lg={1.5}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default FavoritePage;
