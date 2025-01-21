import "./App.css";
import { BodyWrap } from "./style/mainStyle.js";
import { FooterWrap } from "./style/footer.js";

import Header from "./components/header.js";
import Banner from "./components/banner.js";
import React from "react";
import Main from "./components/main.js";

function App() {
  return (
      <BodyWrap>
        <Header></Header>
        <Banner></Banner>
        <Main></Main>
        <FooterWrap>Footer</FooterWrap>
      </BodyWrap>
  );
}

export default App;
