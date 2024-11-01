// AuthCallback.jsx or AuthCallback.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the authorization code from the URL parameters
    const params = new URLSearchParams(window.location.search);
    const authCode = params.get("code");

    if (authCode) {
      // Send the authorization code to your backend for token exchange
      fetch("/api/auth/google/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: authCode }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response, like storing tokens or user info
          console.log("Authenticated!", data);
          navigate("/"); // Redirect to home or another page
        })
        .catch((error) => console.error("Error during authentication", error));
    }
  }, [navigate]);

  return <div>Authenticating...</div>;
}

export default AuthCallback;
