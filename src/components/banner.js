import { BannerContainer, BannerMenu, BannerMenuItem, BannerTitle, TopBannerWrap } from "../style/bannerStyle";

const Banner = () => {
  return (
    <TopBannerWrap>
      <BannerContainer>
        <BannerTitle>
        배너영역
        </BannerTitle>
        <BannerMenu>
            <BannerMenuItem to={"/infomation/way"}>오시는 길</BannerMenuItem>
            <BannerMenuItem to={"/infomation/price"}>가격</BannerMenuItem>
            <BannerMenuItem to={"/infomation/3"}>item3</BannerMenuItem>
        </BannerMenu>
        </BannerContainer>
    </TopBannerWrap>
  );
};

export default Banner;
