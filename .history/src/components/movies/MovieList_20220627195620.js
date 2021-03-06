import React from "react";
import Swiper from "swiper";

const MovieList = () => {
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
