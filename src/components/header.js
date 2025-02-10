import { useState } from "react";
import { useAuth } from "../AuthContext";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderWrap,
  StyledNavLink,
} from "../style/headerStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {isLoggedIn, login, logout} = useAuth();
  const navigate = useNavigate();

  const checkLogined = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLogo href="/">TH</HeaderLogo>
        <HeaderNav>
          <StyledNavLink to={"/introduction"}>소개</StyledNavLink>
          <StyledNavLink to={"/infomation"}>정보</StyledNavLink>
          <StyledNavLink to={"/inquiry"} onClick={checkLogined}>
            문의하기
          </StyledNavLink>
        </HeaderNav>
        {isLoggedIn ? (
          <StyledNavLink to={""} onClick={handleLogout}>로그아웃</StyledNavLink>
        ) : (
          <StyledNavLink to={"/login"}>로그인</StyledNavLink>
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
