import { Routes, Route } from "react-router-dom";
import Way from "../components/way";
import MainImage from "../components/mainImage";
import { MainWrap } from "../style/mainStyle";
import Introduction from "../components/introduction";
import { Navigate } from "react-router-dom";
import Home from "./homepage";
import Inquiry from "../components/inquiry";

const MainPage = () => {
  const priceImg = process.env.PUBLIC_URL + "/asset/images/price.png";
  const businessDayImg = process.env.PUBLIC_URL + "/asset/images/day.png"

  const BusinessDay = () => {
    return (
      <MainImage resizing={true} image={businessDayImg}></MainImage>
    );
  }

  return (
    <MainWrap>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/introduction" element={<Introduction></Introduction>}></Route>
        <Route path="infomation">
          <Route index element={<Navigate to="/infomation/way" />}></Route>
          <Route path="way" element={<Way></Way>}></Route>
          <Route path="price" element={<MainImage image={priceImg} />}></Route>
          <Route path="business-day" element={<BusinessDay/>}></Route>
        </Route>
        <Route path="/inquiry" element={<Inquiry></Inquiry>}></Route>
      </Routes>
    </MainWrap>
  );
};

export default MainPage;
