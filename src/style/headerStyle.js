import styled from "styled-components"

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

export const HeaderLogo = styled.div`
    font-weight: bold;
    font-size: 24px;
`;

export const HeaderNav = styled.nav`
    width: 50%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    flex-direction: row;
`;

export const HeaderBtn = styled.div`
    width: 10%;
`;