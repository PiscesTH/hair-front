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
  "footer";
  `;

export const MainWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: beige;
  grid-area: main;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const MainMapContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: blue;
`;

export const MainText = styled.div`
  width: 500px;
  height: 500px;
  background-color: aliceblue;
`;

export const MainTitle = styled.div`
  
`;