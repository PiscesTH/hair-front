import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 1000px;
  height: 500px;

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .swiper-slide img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;
