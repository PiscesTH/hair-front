import { BannerContainer, BannerMenu, BannerMenuItem, BannerTitle, TopBannerWrap } from "../style/bannerStyle";

const Banner = () => {
  return (
    <TopBannerWrap>
      <BannerContainer>
        <BannerTitle>
        배너 영역
        </BannerTitle>
        <BannerMenu>
            <BannerMenuItem to={"/a/1"}>item1</BannerMenuItem>
            <BannerMenuItem to={"/a/2"}>item2</BannerMenuItem>
            <BannerMenuItem to={"/a/3"}>item3</BannerMenuItem>
        </BannerMenu>
        </BannerContainer>
    </TopBannerWrap>
  );
};

export default Banner;
