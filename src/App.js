import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import TeamPage from "./pages/TeamPage";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import UserContextProvider from "./userContext/UserContextProvider.js";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/team/:teamId" element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
