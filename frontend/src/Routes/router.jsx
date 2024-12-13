import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home";
import MainLayOut from "../Layouts/MainlayOut";

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
        element: <div>Login page</div>,
      },
      {
        path: "/register",
        element: <div>Register page </div>,
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
