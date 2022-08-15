import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import React, { Profiler } from "react";

import { ModalProvider } from "./contexts/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("kimatools"));
root.render(
  <React.StrictMode>
    <Profiler id="global">
      <ModalProvider>
        <BrowserRouter basename="/">
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </BrowserRouter>
      </ModalProvider>
    </Profiler>
  </React.StrictMode>,
);
