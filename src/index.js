import React from "react";
import { createRoot } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "./index.scss";
import "macro-css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
