import React, { useEffect, useState } from "react";
import apiService from ".././app/apiService";
import { API_KEY } from ".././app/config";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { Box, Grid, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function Carousel() {
  const [movies, setMovies] = useState();
  const [popular, setPopular] = useState();
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await apiService.get(
          `trending/all/day?api_key=${API_KEY}&page=3`
        );

        setMovies(data.data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await apiService.get(
          `movie/popular?api_key=${API_KEY}&page=12`
        );

        setPopular(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );
  const settings = {
    dots: true,
    infinite: true,
    nextArrow: (
      <SlickButtonFix>
        <ArrowRightIcon color="error" />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <ArrowLeftIcon color="error" />
      </SlickButtonFix>
    ),
    centerMode: true,

    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box sx={{ mb: 8 }}>
        <Slider {...settings}>
          {movies?.slice(8, 20).map((movie) => (
            <Grid key={movie.id} item xs={12} md={6} lg={10} sx={{ m: 5 }}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Slider>
      </Box>
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#3C6562",
            p: "13px",
          }}
        >
          POPULAR
        </Typography>
        <Slider {...settings}>
          {popular?.slice(8, 20).map((movie) => (
            <Grid key={movie.id} item xs={12} md={6} lg={10} sx={{ m: 5 }}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Slider>
      </Box>
    </>
  );
}
