import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { SwiperContainer } from "../components/home";

const Home = () => {
  const url = process.env.PUBLIC_URL;
  const images = [
    url + "/asset/images/haru1.jpg",
    url + "/asset/images/haru2.jpg",
    url + "/asset/images/haru3.jpg",
    url + "/asset/images/haru4.jpg",
    url + "/asset/images/haru5.jpg",
  ];

  return (
    <SwiperContainer>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}><img src={image} alt=""></img></SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default Home;
