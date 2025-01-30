import { Routes, Route } from "react-router-dom";
import Way from "../components/way";
import Price from "../components/price";
import { MainWrap } from "../style/mainStyle";

const MainPage = () => {
  return (
    <MainWrap>
      <Routes>
        <Route path="/introduction"></Route>
        <Route path="/infomation/way" element={<Way></Way>}></Route>
        <Route path="/infomation/price" element={<Price/>}></Route>
      </Routes>
    </MainWrap>
  );
};

export default MainPage;
