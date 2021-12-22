import "bootstrap/dist/css/bootstrap.min.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AuthProvider } from "./context/auth";

import "./i18n";

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
  document.getElementById("root")
);
