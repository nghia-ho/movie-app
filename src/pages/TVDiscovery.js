import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Alert, Box, Grid, Stack, Typography } from "@mui/material";
import LoadingScreen from "../components/LoadingScreen";
import CardList from "../components/CardList";
import MTPagination from "../components/MTPagination";
import { getTvDiscovery } from "../features/tv/tvSlice";

function TVDiscovery() {
  const [page, setPage] = useState(2);

  const dispatch = useDispatch();
  const { isLoading, tvShows, error } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(getTvDiscovery(page));
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
                  <CardList movies={tvShows.results} />
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

export default TVDiscovery;
