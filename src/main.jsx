import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from "./store";
import { Provider } from "react-redux";
import './index.css';

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
