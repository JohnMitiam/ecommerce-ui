import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import axios from "./api/axios";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";

axios.interceptors.request.use((request) => {
  console.log(request);
  request.headers.channelName = "Kozuki Oden eCommerce";
  return request;
});

axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
