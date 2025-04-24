import styled from "styled-components";

export const BodyWrap = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 1200px;
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
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: white;
`;

export const MainTitle = styled.div`
  width: 100%;
  height: 100px;
  font-size: 30px;
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
`;

export const MainTextContainer = styled.div`
  width: 500px;
  height: 500px;
  color: #8a8a8a;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MainTextTitle = styled.div`
  padding: 10px 5px;
  width: 100%;
  min-height: 30px;
  font-size: 1.5em;
  font-weight: bold;
`;

export const MainTextContent = styled.div`
  padding: 0 5px;
  width: 100%;
  font-size: 1em;
  line-height: 1.7;
`;
