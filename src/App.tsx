import React, { useState, useEffect } from "react";

import useAppContext from "./hooks/useContext";
import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/DetailsPage";
import { Login } from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import useAuth from "./hooks/useAuth";

const App: React.FC = () => {
  useAuth();

  const {
    contextValues: { isAuth },
  } = useAppContext();
  return (
    <Routes>
      <Route path="/" element={isAuth ? <MainPage /> : <Login />}></Route>
      <Route path="/App" element={isAuth ? <MainPage /> : <Login />}></Route>
      <Route
        path="/details/:id"
        element={isAuth ? <Details /> : <Login />}
      ></Route>
      <Route path="*" element={isAuth ? <MainPage /> : <Login />}></Route>
    </Routes>
  );
};

export default App;
