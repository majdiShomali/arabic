import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const GoogleSignInButton = () => {
  const responseGoogle = async (response) => {
    try {
      const { tokenId } = response;

      // Make a POST request to your backend route (/api/auth/google) with the authorization code
      const res = await axios.post("http://localhost:3000/api/auth/google", {
        authorizationCode: tokenId,
      });

      // Handle the response from the backend
      console.log(res.data); // Modify this part to update the UI or perform necessary actions
    } catch (error) {
      console.error("Google Sign-In error:", error);
      // Handle error scenario
    }
  };

  return (
    <GoogleLogin
      clientId="53740620878-u4ej58ai4a48tt4u0htuc736fbnodbvr.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleSignInButton;
