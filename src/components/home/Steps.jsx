import React from "react";

import Stepcard from "../cards/Stepcard";
import tick from "../../assets/location-tick.png";
import calendar from "../../assets/calendar.png";
import cars from "../../assets/cars.png";

import honda from "../../assets/brands/honda.png";
import jaguar from "../../assets/brands/jaguar.png";
import volvo from "../../assets/brands/volvo.png";
import audi from "../../assets/brands/audi.png";
import acura from "../../assets/brands/acura.png";
import nissan from "../../assets/brands/nissan.png";
const Steps = () => {
  return (
    <section className="flex flex-col gap-8 justify-center items-center">
      <div className="px-8 py-2 w-fit bg-[var(--secondary-color)] rounded-md">
        <h4 className="uppercase text-[var(--primary-color)] font-semibold md:text-lg">
          How it works
        </h4>
      </div>
      <h4 className="font-medium text-3xl text-center text-gray-800">
        Rent with following 3 working steps
      </h4>
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 items-center md:flex-nowrap">
        <Stepcard
          image={tick}
          text={"Choose location"}
          subtext={"Choose your and find your best car"}
        />
        <Stepcard
          image={calendar}
          text={"Pick-up date"}
          subtext={"Select your pick up date and time to book your car"}
        />
        <Stepcard
          image={cars}
          text={"Book your car"}
          subtext={"Book your car and we will deliver it directly to you"}
        />
      </div>
      <div className="flex flex-col text-center items-center gap-8">
        <h4 className="font-medium text-gray-700 text-lg">
          As Seen & Trusted by Leading Brands
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 xl:gap-x-10">
          <img src={honda} alt="" className="w-[155px] h-[50px]" />
          <img src={volvo} alt="" className="w-[155px] h-[50px]" />
          <img src={jaguar} alt="" className="w-[155px] h-[40px]" />
          <img src={audi} alt="" className="w-[155px] h-[50px]" />
          <img src={acura} alt="" className="w-[155px] h-[50px]" />
          <img src={nissan} alt="" className="w-[155px] h-[120px]" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
