import "./App.css";
import { BodyWrap } from "./style/mainStyle.js";
import { FooterWrap } from "./style/footer.js";

import Header from "./components/header.js";
import Banner from "./components/banner.js";
import React from "react";
import MainPage from "./page/mainpage.js";
import { AuthProvider } from "./AuthContext.js";

function App() {
  return (
    <AuthProvider>
      <BodyWrap>
        <Header></Header>
        <Banner></Banner>
        <MainPage></MainPage>
        <FooterWrap>Copyright 2025. TH All rights reserved.</FooterWrap>
      </BodyWrap>
    </AuthProvider>
  );
}

export default App;
