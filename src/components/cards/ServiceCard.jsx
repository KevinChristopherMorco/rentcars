import React from "react";

const ServiceCard = ({ image, text, subtext }) => {
  return (
    <div className="grid grid-cols-[1fr_3fr] items-center gap-x-5 md:grid-cols-[1fr_7fr] lg:md:grid-cols-[2fr_7fr] xl:md:grid-cols-[1fr_7fr]">
      <div className="flex h-[4.5rem] w-fit items-center justify-center rounded-xl bg-[var(--secondary-color)] p-5 2xl:h-[5rem]">
        <img src={image} alt="" className="h-10 w-10" />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="font-medium text-gray-800 2xl:text-xl">{text}</h4>
        <h5 className="text-sm text-gray-500 2xl:text-lg">{subtext}</h5>
      </div>
    </div>
  );
};

export default ServiceCard;
