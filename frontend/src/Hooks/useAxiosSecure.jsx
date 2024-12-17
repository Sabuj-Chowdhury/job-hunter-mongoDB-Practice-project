import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

// axios instance
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_url}`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error in interceptor", error);
        if (error.status === 401 || error.status === 403) {
          // logout the user
          logout();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);
  return axiosInstance;
};

export default useAxiosSecure;
