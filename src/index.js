import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { App } from "./components";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-left">
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </ToastProvider>,
  document.getElementById("root")
);
