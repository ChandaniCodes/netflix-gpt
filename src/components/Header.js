import React from "react";
import { HEADER_LOGO } from "../utils/constant";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const isLoginPage = location.pathname === "/";
  const headerBgClass = isLoginPage
    ? "bg-transparent"
    : "bg-black bg-opacity-50";

  return (
    <div className={`w-full px-6 flex justify-between ${headerBgClass}`}>
      <img className="w-40" src={HEADER_LOGO} alt="header_logo" />
      {user && (
        <div className="flex">
          <img
            className="w-10 mt-3 rounded-full h-10 mr-3"
            src={user?.photoURL}
            alt="user_photo"
          />
          <FaSignOutAlt
            onClick={handleSignOut}
            className="mt-6 text-white text-2xl cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
