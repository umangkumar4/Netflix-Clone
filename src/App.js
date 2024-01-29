import React, { startTransition } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/main-page/nav/Nav";
import Header from "./component/main-page/header/Header";
import Content from "./component/main-page/content/Content.js";
import axios from "axios";
import Homebanner from "./component/headerlogin/Homebanner";
import Headerlogin from "./component/headerlogin/Headerlogin";
import Login from "./component/Login/Login";
import MainPage from "./component/main-page/MainPage";
axios.defaults.baseURL = "http://api.themoviedb.org/3";
axios.defaults.params = { api_key: "6657b5a769d7444131a198edfcbae534" };

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homebanner />}/>
        <Route path="/register" element={<Login  page={false} />} />
        <Route path="/login" element={<Login page={true} />} />
        <Route path="/content"  element={<MainPage/>}/>
      </Routes>
    </>
  );
}
export default App;
