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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MainTitle = styled.div`
  width: 100%;
  height: 100px;
  font-size: 20px;
  text-align: center;
`;

export const MainContentsContainer = styled.div`
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

export const MainTextContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: aliceblue;
`;

export const MainText = styled.div`
  padding: 10px 5px;
  width: 100%;
  min-height: 30px;
`;
