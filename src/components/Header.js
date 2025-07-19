import React, { useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { HEADER_LOGO } from "../utils/constantUrl.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign up & sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
      }
    });
    //  unsubscription will called on unmount
    return () => unsubscribe();
  }, []);
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
