import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "../index.css";
import StarsIcon from "@mui/icons-material/Stars";
import { Box } from "@mui/system";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "../index.css";

function CardItem({ movie }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/movie/${movie.id}`)}
      sx={{
        ":hover": {
          boxShadow: 20,
          maxWidth: 350,
          transition: "transform 0.5s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
      }}
      className="container"
    >
      <CardMedia
        component="img"
        height="400"
        image={`https://image.tmdb.org/t/p/w500/${
          movie.poster_path || "/orV7mt3Gu4h2WEE2ki2CfeIkMuK.jpg"
        }`}
        alt=""
      />
      <CardContent className="overlay">
        <Typography gutterBottom variant="subtitle1" component="div">
          {movie?.name || movie?.title}
        </Typography>
        <Stack flexDirection="row" justifyContent="space-around" mt={1}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mr={3}
          >
            <StarsIcon className="fvIcon" fontSize="small" />
            <Typography variant="subtitle2" ml={1}>
              {movie.vote_average}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <ThumbUpOffAltIcon fontSize="small" />
            <Typography variant="subtitle2" ml={1}>
              {movie.vote_count}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CardItem;
