import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "./axios";

// AuthContext 생성
const AuthContext = createContext();

// AuthContext를 사용하기 위한 커스텀 훅
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider 컴포넌트
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const token = sessionStorage.getItem("accessToken");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const login = (token) => {
    // sessionStorage.setItem("accessToken", token);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    // await axios.post("/user/sign-out");
    // sessionStorage.clear();
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
