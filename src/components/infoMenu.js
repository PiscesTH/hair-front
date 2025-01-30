import { BannerTitle, BannerMenu, BannerMenuItem } from "../style/bannerStyle";

const InfoMenu = () => {
  return (
    <>
      <BannerTitle>배너영역</BannerTitle>
      <BannerMenu>
        <BannerMenuItem to={"/infomation/way"}>오시는 길</BannerMenuItem>
        <BannerMenuItem to={"/infomation/price"}>가격</BannerMenuItem>
        <BannerMenuItem to={"/infomation/3"}>item3</BannerMenuItem>
      </BannerMenu>
    </>
  );
};

export default InfoMenu;