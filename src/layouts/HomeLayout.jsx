import React from "react";
import { Outlet } from "react-router-dom";

import useToggleHamburger from "../hooks/useToggleHamburger";

import HamburgerMenu from "../components/partials/HamburgerMenu";
import Header from "../components/partials/Header";

const HomeLayout = () => {
  const { isOpen, handleMenuToggle } = useToggleHamburger();
  return (
    <div className="flex grow p-5 lg:px-14 2xl:px-72">
      <Header handleMenuToggle={handleMenuToggle} />
      <main className="mt-20 flex grow flex-col gap-20">
        <Outlet />
      </main>
      {isOpen && <HamburgerMenu handleMenuToggle={handleMenuToggle} />}
    </div>
  );
};

export default HomeLayout;
