import * as React from "react";
import { Typography } from "@mui/material";
import ProductHeroLayout from "./ProductHeroLayout";
import { Stack } from "@mui/system";
import SearchFilm from "./SearchFilm";
const cover = `https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80`;
export default function Welcome({ content = "" }) {
  const [filterName, setFilterName] = React.useState("");
  const handleSubmit = (searchQuery) => {
    setFilterName(searchQuery);
  };
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${cover})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <Stack spacing={2}>
        <Typography color="inherit" variant="h3" sx={{ mt: { sx: 3, sm: 15 } }}>
          Welcome.
        </Typography>
        <Typography
          color="inherit"
          variant="h5"
          sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
        >
          {content ||
            "Millions of movies, TV shows and people to discover. Explore now."}
        </Typography>
      </Stack>
      <SearchFilm handleSubmit={handleSubmit} />

      <Typography variant="body2" color="inherit">
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
