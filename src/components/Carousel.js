// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Grid } from "@mui/material";
import CardItem from "./CardItem";

export default function Carousel({ item }) {
  return (
    <Swiper
      spaceBetween={-40}
      slidesPerView={5}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
    >
      {item?.slice(1, 20).map((movie) => (
        <SwiperSlide key={movie.id}>
          <Grid item xs={12} md={6} lg={10} sx={{ m: 5 }}>
            <CardItem movie={movie} height="300" />
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
