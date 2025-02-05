import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  background-color: #fff;
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(219, 219, 219, 0.49);
`;

export const HeaderContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.a`
  padding: 6px 12px;
  font-weight: bold;
  font-size: 24px;
`;

export const HeaderNav = styled.nav`
  width: 25%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 6%;
`;

export const HeaderBtn = styled.button`
  width: 10%;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 6px 12px;
  border-radius: 20px;
  transition: 0.1s ease-out;
  color: black;
  position: relative;

  &:hover {
    background-color: black;
    color: white;
  }


  &.active::after {
    position: absolute;
    display: block;
    content: "";
    clear: both;
    width: 20px;
    height: 2.5px;
    background: black;
    left: 50%;
    transform: translateX(-50%);
    bottom: -7px;
  }
`;

export const LoginButton = styled.button`
  background-color: #4CAF50; /* 녹색 버튼 */
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049; /* 살짝 어두운 녹색 */
  }

  &:active {
    transform: scale(0.95); /* 클릭 시 작아지는 효과 */
  }
`;