import React from "react";
import { Outlet } from "react-router-dom";

import useToggleHamburger from "../hooks/useToggleHamburger";

import HamburgerMenu from "../components/partials/HamburgerMenu";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

const HomeLayout = () => {
  const { isOpen, isDelayed, handleMenuToggle } = useToggleHamburger();
  console.log(isOpen && !isDelayed);
  return (
    <>
      <div className="flex grow p-5 lg:px-14 2xl:px-60">
        <Header handleMenuToggle={handleMenuToggle} />
        <main className="mt-20 flex grow flex-col gap-20">
          <Outlet />
        </main>
        {isOpen && (
          <HamburgerMenu
            isDelayed={isDelayed}
            isOpen={isOpen}
            handleMenuToggle={handleMenuToggle}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
