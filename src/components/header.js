import { useState } from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderWrap,
  StyledNavLink,
} from "../style/headerStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLogined, setIsLogined] = useState(false);
  const navigate = useNavigate();

  const checkLogined = (e) => {
    if (!isLogined) {
      e.preventDefault();
      alert("로그인이 필요합니다.");
      navigate("/login");
      setIsLogined((prev) => !prev); //임시
    }
  };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLogo href="/">TH</HeaderLogo>
        <HeaderNav>
          <StyledNavLink to={"/introduction"}>소개</StyledNavLink>
          <StyledNavLink to={"/infomation"}>정보</StyledNavLink>
          <StyledNavLink to={"/inquiry"} onClick={checkLogined}>문의하기</StyledNavLink>
        </HeaderNav>
        {/* <LoginButton>로그인</LoginButton> */}
        <StyledNavLink to={"/login"}>로그인</StyledNavLink>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
