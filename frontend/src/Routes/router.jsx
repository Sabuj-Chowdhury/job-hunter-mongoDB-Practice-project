import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home";
import MainLayOut from "../Layouts/MainlayOut";
import Registration from "../Page/Registration";
import Login from "../Page/Login";
import JobDetails from "../Components/JobDetails";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../Page/AllJobs";
import ApplyJob from "../Page/ApplyJob";
import MyApplications from "../Page/MyApplications";
import PostJob from "../Page/PostJob";
import MyPostedJobs from "../Page/MyPostedJobs";

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
        path: "/job-details/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_url}/job-details/${params.id}`),
      },
      {
        path: "/jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/apply-job/:id",
        element: (
          <PrivateRoute>
            <ApplyJob></ApplyJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/applications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },

      {
        path: "/jobPost",
        element: (
          <PrivateRoute>
            <PostJob></PostJob>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
