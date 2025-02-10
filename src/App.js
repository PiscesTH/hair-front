import "./App.css";
import { BodyWrap } from "./style/mainStyle.js";
import { FooterWrap } from "./style/footer.js";

import Header from "./components/header.js";
import Banner from "./components/banner.js";
import React from "react";
import MainPage from "./page/mainpage.js";

function App() {
  return (
    <BodyWrap>
      <Header></Header>
      <Banner></Banner>
      <MainPage></MainPage>
      <FooterWrap>Copyright 2025. TH All rights reserved.</FooterWrap>
    </BodyWrap>
  );
}

export default App;
