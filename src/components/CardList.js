import { Grid } from "@mui/material";
import CardItem from "./CardItem.js";

function CardList({ movies }) {
  return (
    <Grid container spacing={2} mt={1}>
      {movies?.map((movie) => (
        <Grid key={movie.id} item xs={12} md={6} lg={3}>
          <CardItem movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
