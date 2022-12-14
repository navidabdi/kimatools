import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("kimatools"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
