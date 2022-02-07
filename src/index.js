import React from "react";
import ReactDOM from "react-dom";
import App from "./common/app/App";
import { GlobalPage } from "./pages/HomePage/HomePage";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalPage/>
    
  </React.StrictMode>,
  document.getElementById("root")
);
