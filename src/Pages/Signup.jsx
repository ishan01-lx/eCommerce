import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-700 to-purple-800  px-4 py-4">
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
          Create Account
        </h2>
        <p className="text-gray-400 text-center mb-6 text-sm sm:text-base">
          Join Shoppie and start shopping premium products
        </p>

        {/* First + Last Name */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full">
            <label className="block text-sm mb-2">First Name</label>
            <input
              type="text"
              placeholder="Ishan"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm mb-2">Last Name</label>
            <input
              type="text"
              placeholder="Sitaula"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="ishan@example.com"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm text-gray-400">
            I agree to the{" "}
            <span className="text-purple-400 cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-purple-400 cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </span>
        </div>

        {/* Create Account button */}
        <button className="w-full bg-gradient-to-r from-purple-200 to-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-200 transition-colors duration-500 py-3 rounded-lg font-semibold hover:opacity-90 text-sm sm:text-base">
          Create Account
        </button>


        {/* Footer links */}
        <div className="text-center mt-6 text-xs sm:text-sm text-gray-400">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-400 cursor-pointer hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
