import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Balance from "../pages/Balance/Balance";
import CreditCards from "../pages/CreditCards/CreditCards";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Settings from "../pages/Settings/Settings";
import SignUp from "../pages/SignUp/SignUp";
import Supports from "../pages/Supports/Supports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "credit-card",
        element: <CreditCards />,
      },
      {
        path: "balance",
        element: <Balance />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "support",
        element: <Supports />,
      },
    ],
  },
]);
