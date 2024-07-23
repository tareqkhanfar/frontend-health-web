import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './login/Login';
import HeaderMain from './mainpage/component/Header';
import MedicalHome from './mainpage/medicalhome';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MedicalHome/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
