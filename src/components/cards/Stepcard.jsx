import React from "react";

const Stepcard = ({ text, subtext, image }) => {
  return (
    <div className="flex flex-col gap-3 items-center basis-[45%] text-center min-h-[250px]">
      <div className="w-fit bg-[var(--secondary-color)] p-7 rounded-lg">
        <img src={image} alt="" className="w-12 h-12 2xl:w-14 2xl:h-14" />
      </div>
      <h4 className="font-medium text-gray-800 2xl:text-xl">{text}</h4>
      <h5 className="text-gray-500 text-sm 2xl:text-lg">{subtext}</h5>
    </div>
  );
};

export default Stepcard;
