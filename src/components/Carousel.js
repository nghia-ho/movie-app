// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { Stack } from "@mui/system";
export default function Carousel({ item }) {
  return (
    <Swiper
      spaceBetween={-50}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {item?.slice(1, 20).map((movie) => (
        <SwiperSlide>
          <Grid key={movie.id} item xs={12} md={6} lg={10} sx={{ m: 5 }}>
            <CardItem movie={movie} />
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
