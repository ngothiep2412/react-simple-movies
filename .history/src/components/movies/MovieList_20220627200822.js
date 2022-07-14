import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSWR from "swr";
// https://api.themoviedb.org/3/movie/now_playing?api_key=&language=en-US&page=1
const MovieList = () => {
  const { data, error } = useSWR("/api/user/123", fetcher);
  return (
    <div>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          <SwiperSlide>
            <MovieCard></MovieCard>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard></MovieCard>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard></MovieCard>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard></MovieCard>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard></MovieCard>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard></MovieCard>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard></MovieCard>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard></MovieCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
<div className="movie-list">
  <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
  </Swiper>
</div>;