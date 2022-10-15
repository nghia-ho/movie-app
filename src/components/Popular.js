import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovie } from "../features/movie/movieSlice";
import { getTvPopular } from "../features/tv/tvSlice";
import Carousel from "./Carousel";
function Popular() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  const dispatch = useDispatch();

  const { tvShows } = useSelector((state) => state.tv);
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getPopularMovie());
    dispatch(getTvPopular());
  }, [dispatch]);

  return (
    <Container>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Typography variant="h6" align="center">
          What's Popular
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab label="TV" sx={{ color: "blue" }} />
          <Tab label="MOVIES" />
        </Tabs>
      </Box>
      {value === 1 ? (
        <Carousel item={movies.results} />
      ) : (
        <Carousel item={tvShows.results} />
      )}
    </Container>
  );
}

export default Popular;
