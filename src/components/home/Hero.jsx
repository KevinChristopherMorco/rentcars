import React from "react";

import store from "../../assets/astore.png";
import calendar from "../../assets/calendars.png";
import car from "../../assets/car.png";
import frame from "../../assets/frame.png";
import play from "../../assets/gplay.png";
import line from "../../assets/line.png";
import location from "../../assets/location.png";

const Hero = () => {
  return (
    <section className="h-full grid gap-12 relative md:grid-cols-2 md:items-center md:gap-y-0 xl:items-start ">
      <div className="flex flex-col gap-8 xl:w-[80%] xl:my-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h4 className="text-4xl font-semibold xl:text-5xl">
              Find, book and rent a car{" "}
              <span className="text-[var(--primary-color)] relative inline-block">
                Easily
                <img
                  src={line}
                  alt=""
                  className="absolute top-full left-0 mt-2"
                />
              </span>
            </h4>

            <p className="text-gray-500">
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="">
              <img src={play} alt="" />
            </a>
            <a href="">
              <img src={store} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:row-start-2 md:flex-row md:col-span-2 lg:gap-x-8 md:shadow-lg md:p-5 md:mx-auto md:w-fit lg:w-full lg:justify-between">
        <div className="flex flex-col gap-4 md:gap-x-2 md:flex-row lg:justify-between lg:w-[70%]">
          <div className="flex items-center gap-4">
            <img src={location} alt="" className="w-8 h-8" />
            <div className="flex flex-col">
              <p className="font-semibold">Location</p>
              <p className="text-sm text-gray-500">Search your location</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={calendar} alt="" className="w-8 h-8" />
            <div className="flex flex-col">
              <p className="font-semibold">Pickup date</p>
              <p className="text-sm text-gray-500">Choose an available date</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={calendar} alt="" className="w-8 h-8" />
            <div className="flex flex-col">
              <p className="font-semibold">Return date</p>
              <p className="text-sm text-gray-500">Choose a return date</p>
            </div>
          </div>
        </div>
        <button className="cursor-pointer bg-[var(--primary-color)] p-2 rounded-lg text-white font-medium md:px-10 md:py-1">
          Search
        </button>
      </div>
      <div className="-mx-5 relative flex flex-col md:justify-center md:items-center lg:-mr-28">
        <img
          src={frame}
          alt=""
          className="h-[350px] w-[90%] absolute top-0 md:top-[10%] right-0 md:h-[400px] md:w-[85%]"
        />
        <img
          src={car}
          alt=""
          className="my-14 z-[10] w-full md:h-[300px] xl:h-[450px]"
        />
      </div>
    </section>
  );
};

export default Hero;
