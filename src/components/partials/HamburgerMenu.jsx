import React, { useEffect } from "react";
import { RiCloseFill } from "@remixicon/react";

import NavbarList from "../list/NavbarList";
import SignUp from "../buttons/SignUp";
import SignIn from "../buttons/SignIn";

import logo from "../../assets/logo/frame.png";

const HamburgerMenu = ({ isOpen, isDelayed, handleMenuToggle }) => {
  const handleClose = () => {
    handleMenuToggle();
  };

  return (
    <div
      className={`fixed right-0 top-0 z-[1000] h-screen w-full bg-black bg-opacity-50`}
    >
      <div
        className={`${isOpen && !isDelayed ? "animate-slide-in-right" : "animate-slide-in-left"} fixed right-0 flex h-full w-[80%] flex-col gap-6 bg-white p-5`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <img src={logo} alt="" className="2xl:h-[3rem] 2xl:w-[3rem]" />
              <h5 className="text-lg font-semibold text-[var(--primary-color)] xl:text-xl 2xl:text-2xl">
                RENTCARS
              </h5>
            </div>
            <div className="cursor-pointer" onClick={handleClose}>
              <RiCloseFill />
            </div>
          </div>
          <div className="-mx-5 border-b border-[var(--primary-color)]" />
        </div>
        <div className="flex h-full flex-col justify-between">
          <ul className="flex flex-col gap-5 text-lg">
            <NavbarList item={"Become a renter"} />
            <NavbarList item={"Rental deals"} />
            <NavbarList item={"How it works"} />
            <NavbarList item={"Why choose us"} />
          </ul>
          <div className="flex flex-col gap-5">
            <SignUp />
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
