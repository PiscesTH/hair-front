import styled from "styled-components";

export const TopBannerWrap = styled.div`
  grid-area: banner;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 20px 0;
  color: white;
  flex-direction: column;
`;

export const BannerTitle = styled.div`
    height: 60%;
    padding: 10px;
`;

export const BannerMenu = styled.div`
    height: 30%;
    width: 50%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
`;

export const BannerMenuItem = styled.div`
    width: 13%;
    padding: 5px;
    border-radius: 20px;
`;