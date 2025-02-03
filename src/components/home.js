import styled from "styled-components";

export const SwiperContainer = styled.div`
    width: 1000px;
    height: 500px;
    border: 1px solid black;

& .swiper {
  width: 100%;
  height: 100%;
}

& .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: beige;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

& .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;