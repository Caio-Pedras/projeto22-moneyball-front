import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import "./assets/css/reset.css";
// import "./assets/css/style.css";
import UserContextProvider from "./userContext/UserContextProvider.js";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/signup" element={<SignUpPage />} /> */}
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
