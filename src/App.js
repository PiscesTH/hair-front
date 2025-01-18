import logo from "./logo.svg";
import "./App.css";
import { MainWrap, BodyWrap } from "./style/main.js";
import { FooterWrap } from "./style/footer.js";
import { TopBannerWrap } from "./style/banner.js";
import { HeaderWrap } from "./style/header.js";

function App() {
  return (
      <BodyWrap>
        <HeaderWrap></HeaderWrap>
        <TopBannerWrap></TopBannerWrap>
        <MainWrap></MainWrap>
        <FooterWrap></FooterWrap>
      </BodyWrap>
  );
}

export default App;
