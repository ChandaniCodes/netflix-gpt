import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_LOGO } from "../utils/Constant";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={LOGIN_LOGO}
        alt="login_logo"
      />
      <Header />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form className="bg-black bg-opacity-70 p-8 rounded-md space-y-5 text-white w-80">
          <div className=" text-white font-semibold text-2xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </div>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full p-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <span className="text-gray-600">New to netflix ? </span>
          <button
            className="text-white "
            type="button"
            onClick={toggleSignInForm}
          >
            Sign Up Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
