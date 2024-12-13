import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home";
import MainLayOut from "../Layouts/MainlayOut";
import Registration from "../Page/Registration";
import Login from "../Page/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/jobs",
        element: <div>Job page</div>,
      },
      {
        path: "/applications",
        element: <div>My applications page</div>,
      },
      {
        path: "/jobPost",
        element: <div>My Job Post page</div>,
      },
    ],
  },
]);

export default router;
