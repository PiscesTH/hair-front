import {
  IntroductionWrap,
  IntroImage,
  IntroImageContainer,
  IntroTxt,
  IntroTxtContainer,
  IntroTxtHighlight,
} from "../style/introductionStyle";

const Txt = () => {
    // const text = "하루헤어는 하루하루 열심히 살자라는 의미로 시작하였습니다 고객에 편에 서서 고민할수 있는 사람좋은 미용인이 되려 노력하겠습니다 . 하루는 가발디자인과 미용을 같이 하고 있습니다. 언제든지 고민 있으신 분들은 상담받으러 편하게 들러 주세요!! 오시는 고객님들이 항상 즐겁고 신나는 하루가 되시길 바랍니다. 방문해주시는 고객님 감사합니다~^^";

    return (<IntroTxtContainer>
        <IntroTxt>
        <IntroTxtHighlight>하루헤어</IntroTxtHighlight>는 하루하루 열심히 살자라는 의미로 시작하였습니다.
      </IntroTxt>
      <IntroTxt>고객에 편에 서서 고민할 수 있는 사람 좋은 미용인이 <br/>되려 노력하겠습니다.</IntroTxt>
      <IntroTxt>
        <IntroTxtHighlight>하루</IntroTxtHighlight>는 가발 디자인과 미용을 같이 하고 있습니다.
      </IntroTxt>
      <IntroTxt>언제든지 고민 있으신 분들은 상담받으러 편하게 들러 주세요!!</IntroTxt>
      <IntroTxt>오시는 고객님들이 항상 즐겁고 신나는 하루가 되시길 바랍니다.</IntroTxt>
      <IntroTxt>방문해주시는 고객님 감사합니다~^^</IntroTxt>
    </IntroTxtContainer>
    
    );
}

const Introduction = () => {
  const introImage = process.env.PUBLIC_URL + "/asset/images/haru4.jpg";

  return (
    <IntroductionWrap>
      <IntroImageContainer>
        <IntroImage src={introImage}></IntroImage>
      </IntroImageContainer>
      <Txt/>
    </IntroductionWrap>
  );
};

export default Introduction;
