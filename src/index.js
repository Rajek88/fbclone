import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { App } from "./components";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <ToastProvider
    autoDismissTimeout={4000}
    autoDismiss
    newestOnTop
    placement="top-left"
  >
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </ToastProvider>,
  document.getElementById("root")
);
