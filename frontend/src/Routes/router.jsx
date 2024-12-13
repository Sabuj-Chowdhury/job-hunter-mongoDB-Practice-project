import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainlayOut";
import Home from "../Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
