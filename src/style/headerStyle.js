import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #ccc;
  z-index: 1;
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  height: 100%;
  border: 1px solid violet;
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
