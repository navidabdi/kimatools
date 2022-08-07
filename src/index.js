import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Provider } from 'redux-zero/react';
// import { store } from './state';
// import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
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
