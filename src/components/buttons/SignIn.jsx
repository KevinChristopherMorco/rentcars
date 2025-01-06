import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Link
      to={"/page"}
      className="flex items-center justify-center px-5 py-2 text-gray-800 transition-colors hover:text-[var(--primary-color)]"
    >
      Sign In
    </Link>
  );
};

export default SignIn;
