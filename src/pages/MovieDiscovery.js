import React, { useEffect, useState } from "react";
import { getMovieDiscovery } from "../features/movie/movieSlice";
import { useDispatch, useSelector } from "react-redux";

import { Alert, Box, Grid, Stack, Typography } from "@mui/material";
import LoadingScreen from "../components/LoadingScreen";
import CardList from "../components/CardList";
import MTPagination from "../components/MTPagination";

function MovieDiscovery() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { isLoading, movies, error } = useSelector((state) => state.movie);
  console.log(movies);
  useEffect(() => {
    dispatch(getMovieDiscovery(page));
  }, [dispatch, page]);

  return (
    <>
      <Grid display="flex" justifyContent="space-around ">
        <Grid width="70%">
          <Stack>
            <Box>
              {isLoading ? (
                <LoadingScreen />
              ) : (
                <>
                  {error && <Alert severity="error">{error}</Alert>}
                  <CardList movies={movies.results} />
                </>
              )}
            </Box>
            <MTPagination setPage={setPage} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default MovieDiscovery;
