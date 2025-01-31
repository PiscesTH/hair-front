import { BannerTitle, BannerMenu, BannerMenuItem } from "../style/bannerStyle";

const InfoMenu = () => {
  return (
    <>
      <BannerTitle>하루 헤어</BannerTitle>
      <BannerMenu>
        <BannerMenuItem to={"/infomation/way"}>오시는 길</BannerMenuItem>
        <BannerMenuItem to={"/infomation/price"}>가격</BannerMenuItem>
        <BannerMenuItem to={"/infomation/business-day"}>영업일</BannerMenuItem>
      </BannerMenu>
    </>
  );
};

export default InfoMenu;