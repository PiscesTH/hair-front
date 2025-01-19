import { BannerContainer, BannerMenu, BannerMenuItem, BannerTitle, TopBannerWrap } from "../style/bannerStyle";

const Banner = () => {
  return (
    <TopBannerWrap>
      <BannerContainer>
        <BannerTitle>
        배너 영역
        </BannerTitle>
        <BannerMenu>
            <BannerMenuItem>item1</BannerMenuItem>
            <BannerMenuItem>item2</BannerMenuItem>
            <BannerMenuItem>item3</BannerMenuItem>
        </BannerMenu>
        </BannerContainer>
    </TopBannerWrap>
  );
};

export default Banner;
