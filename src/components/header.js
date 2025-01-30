import { NavLink } from "react-router-dom";
import { HeaderBtn, HeaderContainer, HeaderLogo, HeaderNav, HeaderWrap, StyledNavLink } from "../style/headerStyle"


const Header = () => {

    return (
        <HeaderWrap>
            <HeaderContainer>
            <HeaderLogo href="/">TH</HeaderLogo>
            <HeaderNav>
                <StyledNavLink to={"/introduction"}>소개</StyledNavLink>
                <StyledNavLink to={"/infomation/way"}>정보</StyledNavLink>
                <StyledNavLink to={"/c"}>btn3</StyledNavLink>
            </HeaderNav>
            <HeaderBtn>로그인 버튼</HeaderBtn>
            </HeaderContainer>
        </HeaderWrap>
    );
}

export default Header;