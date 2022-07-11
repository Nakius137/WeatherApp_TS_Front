import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorDestination from "./components/ErrorDestination";
import { Details } from "./components/Details";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="details" element={<Details />}></Route>
          <Route path="*" element={<ErrorDestination />}></Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
