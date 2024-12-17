import axios from "axios";

// axios instance
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_url}`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;
