import logo from "./logo.svg";
import "./App.css";
import { MainWrap, BodyWrap } from "./style/main.js";
import { HeaderWrap } from "./style/Header.js";
import { FooterWrap } from "./style/footer.js";
import { TopBannerWrap } from "./style/banner.js";

function App() {
  return (
      <BodyWrap>
        <HeaderWrap/>
        <TopBannerWrap></TopBannerWrap>
        <MainWrap></MainWrap>
        <FooterWrap></FooterWrap>
      </BodyWrap>
  );
}

export default App;
