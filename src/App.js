import React from "react";
import "./App.css";
// import { useState } from "react";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RestrictedRoutes from "./Routes/RestrictedRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import DashBoardPage from "./pages/DashBoardPage";
import { getCookies } from "./utils/CookiesUtils";
import AllPosts from "./components/Dasboard/AllPosts";
import MyPosts from "./components/Dasboard/MyPosts";

function App() {
  getCookies();
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/dashboard/all-posts" element={<AllPosts />} />
          <Route path="/dashboard/my-posts" element={<MyPosts />} />
        </Route>

        <Route path="/" element={<RestrictedRoutes />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="*"
            element={<h1>No Routes Found. Please go Back!!</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
