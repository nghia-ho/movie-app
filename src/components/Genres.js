import React, { useEffect } from "react";
import { Stack } from "@mui/system";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import { API_KEY } from "../app/config";
import { useState } from "react";

function Genres({ setSelectGenres }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();

        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack spacing={3} sx={{ p: "60px 35px ", width: 230 }}>
        <Stack spacing={1}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#3C6562", p: "13px" }}
          >
            GENRES
          </Typography>
          {genres.map((pro) => (
            <ListItemButton
              onClick={() => {
                setSelectGenres(pro.id);
              }}
              key={pro.id}
              sx={{
                fontSize: 20,
                py: 0,
                minHeight: 40,
                letterSpacing: 0,
                color: "#003545",
                "&:focus": {
                  backgroundColor: "#ED6363",
                },
              }}
            >
              <ListItemText
                primary={pro.name}
                primaryTypographyProps={{
                  fontSize: 17,
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Genres;
