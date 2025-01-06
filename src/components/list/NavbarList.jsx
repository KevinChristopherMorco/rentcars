import React from "react";
import { Link } from "react-router-dom";

const NavbarList = ({ item }) => {
  return (
    <li className="cursor-pointer text-gray-700 transition-colors hover:text-[var(--primary-color)]">
      <Link to="/page">{item}</Link>
    </li>
  );
};

export default NavbarList;
