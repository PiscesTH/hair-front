import { NavLink } from "react-router-dom";
import { HeaderBtn, HeaderContainer, HeaderLogo, HeaderNav, HeaderWrap, StyledNavLink } from "../style/headerStyle"


const Header = () => {

    return (
        <HeaderWrap>
            <HeaderContainer>
            <HeaderLogo>TH</HeaderLogo>
            <HeaderNav>
                <StyledNavLink to={"/"}>btn1</StyledNavLink>
                <StyledNavLink to={"/"}>btn2</StyledNavLink>
                <StyledNavLink to={"/"}>btn3</StyledNavLink>
            </HeaderNav>
            <HeaderBtn>로그인 버튼</HeaderBtn>
            </HeaderContainer>
        </HeaderWrap>
    );
}

export default Header;