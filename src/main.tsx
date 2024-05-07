import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthCompanyProvider from "./context/company/AuthCompanyContext";
import AuthProvider from "./context/user/AuthUserContext";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthCompanyProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AuthCompanyProvider>
  </React.StrictMode>
);
