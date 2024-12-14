import Lottie from "react-lottie";
import registrationLottieData from "../assets/lottieFiles/registrationLottie.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const Registration = () => {
  const { createUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  // this function is required to use <Lottie>
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registrationLottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // handle registration from data
  const handleFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Basic validation for password
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!passwordValidation.test(password)) {
      alert(
        "Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Registration successful!");
        form.reset();
        logout();
        navigate("/login");
      })
      .catch((error) => {
        console.error("Registration failed:", error.message);
        alert("Registration failed. Please check your details and try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex md:max-w-4xl">
        {/* Lottie Animation */}
        <div className="hidden md:block md:w-1/2">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

        {/* Registration Form */}
        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Register</h2>
          <form onSubmit={handleFormData}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
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
                required
                name="password"
                className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
