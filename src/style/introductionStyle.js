import styled from "styled-components";

export const IntroductionWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 100px;
`;

export const IntroImageContainer = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export const IntroImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

export const IntroTxtContainer = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
  line-height: 1.6;
`;

export const IntroTxt = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export const IntroTxtHighlight = styled.strong`
  font-size: 18px;
  color: #d35400;
`;