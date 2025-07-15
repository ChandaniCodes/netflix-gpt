import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_LOGO } from "../utils/constant";
import { ValidateFormData } from "../utils/formValidate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  // const fullName = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleFormValidation = () => {
    // validate the form - email, password
    const message = ValidateFormData(
      // fullName.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message !== null) return;

    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
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
              // ref={fullName}
              // required
              type="text"
              placeholder="Full Name"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
          )}
          <input
            ref={email}
            type="email"
            // required
            placeholder="Email Address"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            ref={password}
            type="password"
            // required
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          {errorMessage && (
            <p className="text-red-600 text-xs">{errorMessage}</p>
          )}
          <button
            onSubmit={(e) => e.preventDefault()}
            type="button"
            onClick={handleFormValidation}
            className="w-full p-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-400" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to netflix ? Sign Up Now"
              : "Already Registered Sign In Now"}
          </p>
          {/* <span className="text-gray-600">
            {isSignInForm ? "New to netflix ? " : "Already Registered "}
          </span>
          <button
            className="text-white "
            type="button"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? " Sign Up Now" : " Sign In Now"}
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
