import "./App.css";
import { MainWrap, BodyWrap } from "./style/main.js";
import { FooterWrap } from "./style/footer.js";
import { TopBannerWrap } from "./style/banner.js";
import Header from "./components/header.js";

function App() {
  return (
      <BodyWrap>
        <Header></Header>
        <TopBannerWrap>Banner</TopBannerWrap>
        <MainWrap>Main</MainWrap>
        <FooterWrap>Footer</FooterWrap>
      </BodyWrap>
  );
}

export default App;
