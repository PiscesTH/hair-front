import {
  BannerContainer,
  BannerMenu,
  BannerMenuItem,
  BannerTitle,
  TopBannerWrap,
} from "../style/bannerStyle";
import { Route, Routes } from "react-router-dom";
import InfoMenu from "./infoMenu";

const Banner = () => {
  return (
    <TopBannerWrap>
      <BannerContainer>
        <Routes>
          <Route
            path="/"
            element={<BannerTitle>하루 헤어</BannerTitle>}
          ></Route>
          <Route
            path="/introduction"
            element={<BannerTitle>하루 헤어</BannerTitle>}
          ></Route>
          <Route path="/infomation/*" element={<InfoMenu></InfoMenu>}></Route>
          <Route
            path="/inquiry"
            element={<BannerTitle>문의하기</BannerTitle>}
          ></Route>
          <Route
            path="/login"
            element={<BannerTitle>로그인</BannerTitle>}
          ></Route>
          <Route
            path="/register"
            element={<BannerTitle>회원가입</BannerTitle>}
          ></Route>
        </Routes>
      </BannerContainer>
    </TopBannerWrap>
  );
};

export default Banner;
