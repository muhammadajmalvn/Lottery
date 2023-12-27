import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'; // Make sure to import GoogleOAuthProvider
import axios from 'axios';
import { decodeJwt } from 'jose';

const GoogleComp = () => {
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const payload = credential ? decodeJwt(credential) : undefined;
      if (payload) {
        const response = await axios.get('http://localhost:5000/google', {
          headers: {
            Authorization: `Bearer ${credential}`,
          },
        });
        const user = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        window.location = '/'; // Redirect the user to the home page
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GoogleOAuthProvider>
      <div className="App d-flex justify-content-center">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={console.error}
          useOneTap
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleComp;
