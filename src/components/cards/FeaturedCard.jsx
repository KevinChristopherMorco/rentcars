import React from "react";
import star from "../../assets/star.png";
import user from "../../assets/user.png";
import auto from "../../assets/auto.png";
import aircon from "../../assets/aircon.png";
import doors from "../../assets/doors.png";
import rightArrow from "../../assets/arrow-right.png";

const Carspecs = ({ image, spec }) => {
  return (
    <div className="flex items-center gap-1 text-gray-500">
      <img src={image} alt="" />
      <p className="text-sm">{spec}</p>
    </div>
  );
};

const FeaturedCard = ({
  model,
  carImage,
  starcount,
  reviewcount,
  passengercount,
  autospec,
  airconspec,
  doorspec,
  price,
}) => {
  return (
    <div className="rounded-xl p-4 shadow-md xl:w-[95%]">
      <img src={carImage} alt="" className="w-full md:h-[8rem]" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold">{model}</p>
          <div className="flex items-center gap-2">
            <img src={star} alt="" />
            <p className="font-medium">
              {starcount}{" "}
              <span className="font-light text-gray-500">
                ({reviewcount} reviews)
              </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-4 md:gap-x-2 lg:grid-cols-[2fr_1fr] lg:gap-x-0">
          <Carspecs image={user} spec={passengercount} />
          <Carspecs image={auto} spec={autospec} />
          <Carspecs image={aircon} spec={airconspec} />
          <Carspecs image={doors} spec={doorspec} />
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-500">Price</p>
            <p className="text-gray-500">
              <span className="font-bold text-black">${price}</span> /day
            </p>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--primary-color)] px-5 py-3 text-white">
            Rent Now <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
