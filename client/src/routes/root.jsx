import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Admin/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  
  {
    path: "/admin/dashboard",
    element: <Dashboard />
  }
]);

export default Router;
