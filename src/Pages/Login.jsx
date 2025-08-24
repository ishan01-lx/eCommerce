import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-700 to-purple-800 px-4">
      {/* Card */}
      <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl w-full max-w-sm sm:max-w-md shadow-lg">
        
        {/* Back to Home */}
        <Link
          to="/"
          className="block text-sm text-gray-400 mb-6 cursor-pointer hover:text-gray-200"
        >
          ← Back to Home
        </Link>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mb-6 text-sm sm:text-base">
          Sign in to your account to continue
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        {/* Sign in button */}
        <button className="w-full bg-gradient-to-r from-purple-300 to-purple-600  hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-200 transition-colors duration-500 py-3 rounded-lg font-semibold hover:opacity-90 text-sm sm:text-base">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-700" />
          <span className="px-2 text-gray-500 text-xs sm:text-sm">
            OR CONTINUE WITH
          </span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Social buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="flex-1 bg-gray-800 py-3 rounded-lg hover:bg-gray-700 text-sm sm:text-base flex items-center justify-center gap-4">
            <BsGoogle></BsGoogle>
            Google
          </button>
          <button className="flex-1 bg-gray-800 py-3 rounded-lg hover:bg-gray-700 text-sm sm:text-base flex items-center justify-center gap-4">
            <BsFacebook></BsFacebook>
            Facebook
          </button>
        </div>

        {/* Footer links */}
        <div className="text-center mt-6 text-xs sm:text-sm text-gray-400">
          <p className="cursor-pointer hover:text-gray-200">
            Forgot your password?
          </p>
          <p className="mt-2">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-400 cursor-pointer hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
