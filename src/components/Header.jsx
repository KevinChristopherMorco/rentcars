import React from "react";
import { RiMenuFill } from "@remixicon/react";
import logo from "../assets/logo/Frame.png";

const Header = () => {
  return (
    <nav className="p-5 flex justify-between items-center">
      <div className="flex gap-x-4 items-center">
        <img src={logo} alt="" />
        <h5 className="text-[var(--primary-color)] font-semibold text-lg">
          RENTCARS
        </h5>
      </div>
      <div>
        <RiMenuFill />
      </div>
    </nav>
  );
};

export default Header;
