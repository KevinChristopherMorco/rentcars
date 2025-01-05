import { RiMenuFill } from "@remixicon/react";
import React from "react";
import logo from "../../assets/logo/Frame.png";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import NavbarList from "../list/NavbarList";
import SignUp from "../buttons/SignUp";
import SignIn from "../buttons/SignIn";

const Header = ({ handleMenuToggle }) => {
  const { isSmallScreen, isLargeScreen } = useScreenResponsiveness();

  return (
    <>
      {isSmallScreen && (
        <nav className="fixed right-0 top-0 z-[999] flex w-full items-center justify-between bg-[var(--background-color)] p-5 lg:px-14 2xl:px-60">
          <div className="flex items-center gap-x-4">
            <img src={logo} alt="" className="2xl:h-[3rem] 2xl:w-[3rem]" />
            <h5 className="text-lg font-semibold text-[var(--primary-color)] xl:text-xl 2xl:text-2xl">
              RENTCARS
            </h5>
          </div>
          <div onClick={handleMenuToggle}>
            <RiMenuFill />
          </div>
        </nav>
      )}

      {isLargeScreen && (
        <nav className="fixed right-0 top-0 z-[999] flex w-full items-center justify-between bg-[var(--background-color)] p-5 lg:px-14 2xl:px-60">
          <div className="flex items-center gap-x-4">
            <img src={logo} alt="" className="2xl:h-[3rem] 2xl:w-[3rem]" />
            <h5 className="text-lg font-semibold text-[var(--primary-color)] xl:text-xl 2xl:text-2xl">
              RENTCARS
            </h5>
          </div>
          <ul className="flex items-center gap-4 xl:gap-14">
            <NavbarList item={"Become a renter"} />
            <NavbarList item={"Rental deals"} />
            <NavbarList item={"How it works"} />
            <NavbarList item={"Why choose us"} />
          </ul>
          <div className="flex items-center">
            <SignIn />
            <SignUp />
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
