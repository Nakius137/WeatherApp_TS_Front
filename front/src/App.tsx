import React, { useState, useEffect } from "react";

import useAppContext from "./hooks/useContext";
import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/DetailsPage";
import { Login } from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App: React.FC = () => {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/login")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  const {
    contextValues: { isAuth },
  } = useAppContext();
  return (
    <Routes>
      <Route path="/" element={isAuth ? <MainPage /> : <Login />}></Route>
      <Route path="/App" element={isAuth ? <MainPage /> : <Login />}></Route>
      <Route path="/:id" element={isAuth ? <Details /> : <Login />}></Route>
      <Route path="*" element={isAuth ? <MainPage /> : <Login />}></Route>
    </Routes>
  );
};

export default App;
