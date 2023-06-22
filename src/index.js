import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProvider from "./UserContext";
import  KitProvider from "./KitchenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="333455483546-th3a57g0225dll5rmadtsoaqctamb1u5.apps.googleusercontent.com">
    <React.StrictMode>
      <UserProvider>
      <KitProvider>
        <App />
      </KitProvider>
      </UserProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
