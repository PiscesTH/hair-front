import { BannerContainer, BannerMenu, BannerMenuItem, BannerTitle, TopBannerWrap } from "../style/bannerStyle";
import { Route, Routes } from "react-router-dom";
import InfoMenu from "./infoMenu";

const Banner = () => {
  return (
    <TopBannerWrap>
      <BannerContainer>
        <Routes>
          <Route path="/introduction" element= {<BannerTitle>하루 헤어</BannerTitle>}></Route>
          <Route path="/infomation/*" element={<InfoMenu></InfoMenu>}></Route>
        </Routes>
        </BannerContainer>
    </TopBannerWrap>
  );
};

export default Banner;
