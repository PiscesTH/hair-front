import styled from "styled-components";

export const BodyWrap = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 1200px;
  background-color: #9bd2ff;
  grid-template-rows: 100px 233px auto 100px;
  grid-template-areas: 
  "header"
  "banner"
  "main"
  "footer"
  `;

export const MainWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: beige;
  grid-area: main;
`;
