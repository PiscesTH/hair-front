import { BannerContainer, BannerMenu, BannerMenuItem, BannerTitle, TopBannerWrap } from "../style/bannerStyle";
import { Route, Routes } from "react-router-dom";
import InfoMenu from "./infoMenu";

const Banner = () => {
  return (
    <TopBannerWrap>
      <BannerContainer>
        <Routes>
          <Route path="/introduction" element= {<BannerTitle>소개 배너</BannerTitle>}></Route>
          <Route path="/infomation/*" element={<InfoMenu></InfoMenu>}></Route>
        </Routes>
        {/* <BannerTitle>
        배너영역
        </BannerTitle>
        <BannerMenu>
            <BannerMenuItem to={"/infomation/way"}>오시는 길</BannerMenuItem>
            <BannerMenuItem to={"/infomation/price"}>가격</BannerMenuItem>
            <BannerMenuItem to={"/infomation/3"}>item3</BannerMenuItem>
        </BannerMenu> */}
        </BannerContainer>
    </TopBannerWrap>
  );
};

export default Banner;
