import { NavLink } from "react-router-dom";
import { HeaderBtn, HeaderContainer, HeaderLogo, HeaderNav, HeaderWrap } from "../style/headerStyle"


const Header = () => {

    return (
        <HeaderWrap>
            <HeaderContainer>
            <HeaderLogo>TH</HeaderLogo>
            <HeaderNav>
                <NavLink to={"/"}>btn1</NavLink>
                <NavLink to={"/"}>btn2</NavLink>
                <NavLink to={"/"}>btn3</NavLink>
            </HeaderNav>
            <HeaderBtn>로그인 버튼</HeaderBtn>
            </HeaderContainer>
        </HeaderWrap>
    );
}

export default Header;