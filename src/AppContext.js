import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "./axios";

// 1. Context 생성
const AppContext = createContext();

// 2. Context 제공자 컴포넌트
export function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <AppContext.Provider
      value={{
        isModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// 3. Context를 쉽게 가져오도록 Custom Hook
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
