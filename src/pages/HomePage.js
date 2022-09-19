import React, { useState, useEffect } from "react";
import { Alert, Box, Grid, Stack, Typography } from "@mui/material";

import Genres from "../components/Genres";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";
import { FormProvider } from "../components/form";
import { useForm } from "react-hook-form";
import apiService from "../app/apiService";
import MoviePagination from "../components/MoviePagination";
import Loading from "../components/Loading";
import { API_KEY } from "../app/config";
import Carousel from "../components/Carousel";
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState();
  const [selectGenres, setSelectGenres] = useState();
  const defaultValues = {
    searchQuery: "",
  };

  const methods = useForm({
    defaultValues,
  });

  const { watch } = methods;
  const filters = watch();
  const filterMovies = applyFilter(movies, filters);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        if (filters.searchQuery) {
          const res = await apiService.get(
            `search/movie?api_key=${API_KEY}&language=en-US&query=${filters.searchQuery}&with_genres=${selectGenres}&page=${page}`
          );
          setMovies(res.data.results);
        } else {
          const data = await apiService.get(
            `discover/movie?api_key=${API_KEY}&with_genres=${selectGenres}&page=${page}`
          );

          setMovies(data.data.results);
          setError("");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getMovies();
  }, [filters.searchQuery, page, selectGenres]);

  return (
    <Grid display="flex" justifyContent="space-around ">
      <Stack width="10%">
        <Genres setSelectGenres={setSelectGenres} />
      </Stack>
      <Grid width="70%">
        <Stack>
          <FormProvider methods={methods}>
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ sm: "center" }}
              justifyContent="space-between"
              mb={2}
            >
              <MovieSearch />
            </Stack>
          </FormProvider>

          <Box>
            {loading ? (
              <Loading />
            ) : (
              <>
                {error ? (
                  <Alert severity="error">{error}</Alert>
                ) : (
                  <>
                    <div>
                      {page || selectGenres || filters.searchQuery ? (
                        ""
                      ) : (
                        <>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: "#3C6562",
                              p: "13px",
                            }}
                          >
                            TRENDING
                          </Typography>
                          <Carousel />
                        </>
                      )}
                    </div>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "#3C6562",
                        p: "13px",
                      }}
                    >
                      {filters.searchQuery || "DISCOVERY"}
                    </Typography>
                    <MovieList movies={filterMovies} />
                  </>
                )}
              </>
            )}
          </Box>
          <MoviePagination setPage={setPage} page={page} />
        </Stack>
      </Grid>
    </Grid>
  );
}

function applyFilter(movies, filters) {
  let filteredMovies = movies;

  if (filters.searchQuery) {
    filteredMovies = movies?.filter((movie) =>
      movie?.title?.toLowerCase().includes(filters?.searchQuery?.toLowerCase())
    );
  }
  return filteredMovies;
}

export default HomePage;
