import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProvider from "./UserContext";
import  KitProvider from "./KitchenContext";
import RecipeProvider from "./RecipeContext"
import  AllContext  from "./AllDataContext";
import UserDataProvider from "./UserDataContext"
import DashboardPendingProvider from "./DashboardPendingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="333455483546-th3a57g0225dll5rmadtsoaqctamb1u5.apps.googleusercontent.com">
    <React.StrictMode>
    {/* <UserDataProvider> */}
    <DashboardPendingProvider>
      <RecipeProvider>
      <UserProvider>
      <KitProvider>
        <AllContext>
          
        <App />
       
        </AllContext>
      </KitProvider>
      </UserProvider>
      </RecipeProvider>
      {/* </UserDataProvider> */}
      </DashboardPendingProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
