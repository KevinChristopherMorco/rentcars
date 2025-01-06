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
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="w-fit rounded-md bg-[var(--secondary-color)] px-8 py-2">
        <h4 className="font-medium uppercase text-[var(--primary-color)] md:text-lg 2xl:text-xl">
          How it works
        </h4>
      </div>
      <h4 className="text-center text-3xl font-medium text-gray-800 2xl:text-4xl">
        Rent with following 3 working steps
      </h4>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:flex-nowrap">
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
      <div className="flex flex-col items-center gap-8 text-center">
        <h4 className="text-lg font-medium text-gray-700 2xl:text-xl">
          As Seen & Trusted by Leading Brands
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 lg:gap-x-10 xl:justify-between 2xl:gap-x-24">
          <img
            src={honda}
            alt=""
            className="h-[50px] w-[155px] 2xl:h-[60px] 2xl:w-[165px]"
          />
          <img
            src={volvo}
            alt=""
            className="h-[50px] w-[155px] 2xl:h-[60px] 2xl:w-[165px]"
          />
          <img
            src={jaguar}
            alt=""
            className="h-[40px] w-[155px] 2xl:h-[50px] 2xl:w-[165px]"
          />
          <img
            src={audi}
            alt=""
            className="h-[50px] w-[155px] 2xl:h-[60px] 2xl:w-[165px]"
          />
          <img
            src={acura}
            alt=""
            className="h-[50px] w-[155px] 2xl:h-[60px] 2xl:w-[165px]"
          />
          <img src={nissan} alt="" className="h-[120px] w-[155px]" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
