import { Alert, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

import CardList from "../components/CardList";
import LoadingScreen from "../components/LoadingScreen";
import Welcome from "../components/Welcome";
function Search() {
  const { movies, isLoading, error } = useSelector((state) => state.movie);
  const hasMovie = movies.search.results?.length;
  return (
    <>
      {hasMovie ? (
        <Grid display="flex" justifyContent="space-around ">
          <Stack>
            <Box>
              {isLoading ? (
                <LoadingScreen />
              ) : (
                <>
                  {error ? (
                    <Alert severity="error">{error}</Alert>
                  ) : (
                    <CardList movies={movies.search.results} />
                  )}
                </>
              )}
            </Box>
          </Stack>
        </Grid>
      ) : (
        <Welcome
          content={
            "Nothing match your search, please find your Shows you again!"
          }
        />
      )}
    </>
  );
}

export default Search;
