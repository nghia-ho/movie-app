import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMovie,
  getTrendingMovie,
} from "../features/movie/movieSlice";
import { getTvPopular } from "../features/tv/tvSlice";
import Carousel from "./Carousel";
function Popular() {
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState("day");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  const { tvShows } = useSelector((state) => state.tv);
  const { movies } = useSelector((state) => state.movie);
  const trending = movies.trending;
  const popular = movies.popular;
  useEffect(() => {
    dispatch(getPopularMovie());
    dispatch(getTvPopular());
    dispatch(getTrendingMovie(date));
  }, [dispatch, date]);

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
          <Tab label="TV" />
          <Tab label="MOVIES" />
        </Tabs>
      </Box>
      {value === 1 ? (
        <Carousel item={popular.results} />
      ) : (
        <Carousel item={tvShows.results} />
      )}

      <Box
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" align="center">
          Trending
        </Typography>
        <Button
          variant={date === "day" ? "contained" : "outlined"}
          onClick={() => setDate("day")}
        >
          Today
        </Button>
        <Button
          variant={date === "day" ? "outlined" : "contained"}
          onClick={() => setDate("week")}
        >
          Thisweek
        </Button>
      </Box>

      <Carousel item={trending?.results} />
    </Container>
  );
}

export default Popular;
