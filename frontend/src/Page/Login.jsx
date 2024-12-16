import Lottie from "react-lottie";
import loginLottieData from "../assets/lottieFiles/loginLottie.json";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";

const Login = () => {
  const { emailPasswordLogin, createGoogleLogIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  // redirect to last  location
  const previousLocation = location.state || "/";

  // this is required for <Lottie>
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginLottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // login form data function

  const handleLoginData = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    emailPasswordLogin(email, password)
      .then((result) => {
        console.log(result.user.email);
        const user = { email: email };
        axios.post(`${import.meta.env.VITE_url}/jwt`, user).then((data) => {
          console.log(data.data);
        });
        navigate(previousLocation);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    createGoogleLogIn()
      .then(() => {
        navigate(previousLocation);
      })
      .catch((error) => {});
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex md:max-w-4xl">
        {/* Lottie Animation */}
        <div className="hidden md:block md:w-1/2">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

        {/* Login Form */}
        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
          <form onSubmit={handleLoginData}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mb-4"
            >
              Login
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Or sign in with</p>

            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              <FaGoogle className="mr-2" size={20} /> Sign in with Google
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
