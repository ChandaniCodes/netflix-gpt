import React from "react";
import { HEADER_LOGO } from "../utils/Constant";

const Header = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 ">
      <img className="w-40 m-8" src={HEADER_LOGO} alt="header_logo" />
    </div>
  );
};

export default Header;
