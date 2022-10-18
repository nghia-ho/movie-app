import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import StarsIcon from "@mui/icons-material/Stars";
import { Box } from "@mui/system";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function CardItem({ movie, height }) {
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
        height: 390,
      }}
    >
      <CardMedia
        component="img"
        height={height}
        image={`https://image.tmdb.org/t/p/w500/${
          movie.poster_path || "/orV7mt3Gu4h2WEE2ki2CfeIkMuK.jpg"
        }`}
        alt=""
      />

      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {movie?.name?.slice(0, 18) || movie?.title?.slice(0, 18)}
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          spacing={2}
        >
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
