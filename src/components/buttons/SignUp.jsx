import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Link
      to={"/page"}
      className="flex items-center justify-center rounded-lg bg-[var(--primary-color)] px-5 py-2 text-white transition-colors hover:bg-[--primary-hover-color] xl:px-10"
    >
      Sign up
    </Link>
  );
};

export default SignUp;
