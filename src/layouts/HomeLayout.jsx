import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/partials/Header";

const HomeLayout = () => {
  return (
    <div className="p-5 flex grow lg:px-20">
      <Header />
      <main className="grow flex flex-col gap-20 mt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
