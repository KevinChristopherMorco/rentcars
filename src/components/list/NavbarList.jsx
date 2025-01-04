import React from "react";

const NavbarList = ({ item }) => {
  return (
    <li className="cursor-pointer text-gray-700 transition-colors hover:text-[var(--primary-color)]">
      {item}
    </li>
  );
};

export default NavbarList;
