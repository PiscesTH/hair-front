import { NavLink } from "react-router-dom";
import { HeaderBtn, HeaderContainer, HeaderLogo, HeaderNav, HeaderWrap, LoginButton, StyledNavLink } from "../style/headerStyle"


const Header = () => {

    return (
        <HeaderWrap>
            <HeaderContainer>
            <HeaderLogo href="/">TH</HeaderLogo>
            <HeaderNav>
                <StyledNavLink to={"/introduction"}>소개</StyledNavLink>
                <StyledNavLink to={"/infomation"}>정보</StyledNavLink>
                <StyledNavLink to={"/inquiry"}>문의하기</StyledNavLink>
            </HeaderNav>
            <LoginButton>로그인</LoginButton>
            </HeaderContainer>
        </HeaderWrap>
    );
}

export default Header;