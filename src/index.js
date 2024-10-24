import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css"
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthContextProvider from "./component/AuthContextProvider";
// import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-hgnhighbjz0261i6.us.auth0.com"
  clientId="QOqW473RXhP3CaPBumArZA8iwqSf1Qpw"
  redirectUri={window.location.origin}
  >
    <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
  </Auth0Provider>
);
