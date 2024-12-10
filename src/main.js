import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme.js";

import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
