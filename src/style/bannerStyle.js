import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TopBannerWrap = styled.div`
  grid-area: banner;
  width: 100%;
  height: 233px;
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
  font-size: 35px;
  padding: 10px;
  text-align: center;
  margin: 30px 0;
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

  font-size: 18px;
`;

export const BannerMenuItem = styled(NavLink)`
  color: rgb(154, 154, 154);
  width: 13%;
  padding: 5px;
  border-radius: 20px;
  position: relative;

  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 30px;
    height: 3px;
    background: transparent;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
  }

  &.active {
    border-radius: 40px;
    background: white;
    color: black;

    &::after {
      background: rgb(197, 31, 31); /* 활성 상태일 때 빨간 밑줄 */
    }
  }
`;
