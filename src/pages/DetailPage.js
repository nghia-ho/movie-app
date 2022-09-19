import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  Rating,
  Breadcrumbs,
  Link,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import StarIcon from "@mui/icons-material/Star";
import CardMedia from "@mui/material/CardMedia";
import apiService from "../app/apiService";
import { Alert } from "@mui/material";
import Loading from "../components/Loading";

function DetailPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const getProduct = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(
            `/movie/${params.id}?api_key=a5c02fc4fa6ba77606206d61795d16bb`
          );
          console.log(res.data);
          setMovie(res.data);
          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getProduct();
    }
  }, [params]);

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
        <Link underline="hover" color="inherit" component={RouterLink} to="/">
          Movie
        </Link>
        <Typography color="text.success">
          {movie?.title || movie?.name}
        </Typography>
      </Breadcrumbs>
      <Box sx={{ position: "relative", height: 1 }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <>
                {movie && (
                  <Paper
                    elevation={5}
                    sx={{
                      p: 2,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        m: 1,

                        p: 2,
                        pt: 0,
                      }}
                    >
                      <Grid container sx={{ maxWidth: 1200 }}>
                        <Grid item xs={12} md={4} sx={{ p: 1 }}>
                          <CardMedia
                            component="img"
                            alt={movie.title}
                            image={
                              movie.poster_path
                                ? `http://image.tmdb.org/t/p/w780/${movie.poster_path}`
                                : "/img/noPoster.png"
                            }
                            sx={{ objectFit: "contain" }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={8} sx={{ p: 1 }}>
                          <Typography variant="h3" maxWidth="80%">
                            {movie.title}
                          </Typography>
                          <Rating
                            value={parseFloat(movie.vote_average) / 2}
                            precision={0.1}
                            readOnly
                          />
                          <Typography variant="h6">
                            {movie.release_date.slice(0, 4)}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ mt: 1 }}
                            component={"span"}
                          >
                            Genres:
                            {movie.genres.map((i) => (
                              <Chip label={i?.name} key={i.id} />
                            ))}
                          </Typography>

                          <Typography variant="body2">
                            {movie.overview}
                          </Typography>
                          <Stack flexDirection="column" alignItems="end">
                            <IconButton
                              size="large"
                              children={<StarIcon fontSize="large" />}
                              sx={{
                                backgroundColor: "rgba(225,0,0,0.9)",
                                marginRight: "30px",
                              }}
                            />
                            <Typography
                              sx={{
                                marginRight: "34px",
                                marginTop: "10px",
                              }}
                              color="error"
                            >
                              {error}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                )}
                {!movie && (
                  <Typography variant="h6">404 Product not found</Typography>
                )}
              </>
            )}
          </>
        )}
      </Box>
    </Container>
  );
}

export default DetailPage;
