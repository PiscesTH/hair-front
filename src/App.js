import "./App.css";
import { MainWrap, BodyWrap } from "./style/main.js";
import { FooterWrap } from "./style/footer.js";

import Header from "./components/header.js";
import Banner from "./components/banner.js";

function App() {
  return (
      <BodyWrap>
        <Header></Header>
        <Banner></Banner>
        <MainWrap>Main</MainWrap>
        <FooterWrap>Footer</FooterWrap>
      </BodyWrap>
  );
}

export default App;
