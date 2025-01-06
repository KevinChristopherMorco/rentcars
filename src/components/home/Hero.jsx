import React from "react";

import store from "../../assets/astore.png";
import calendar from "../../assets/calendars.png";
import car from "../../assets/car.png";
import frame from "../../assets/frame.png";
import play from "../../assets/gplay.png";
import line from "../../assets/line.png";
import location from "../../assets/location.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative grid h-full gap-12 md:grid-cols-2 md:items-center md:gap-y-0 xl:items-start">
      <div className="flex flex-col gap-8 xl:my-14 xl:w-[80%] 2xl:w-[80%]">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-6">
            <h4 className="text-4xl font-semibold xl:text-5xl 2xl:text-6xl">
              Find, book and rent a car{" "}
              <span className="relative inline-block text-[var(--primary-color)]">
                Easily
                <img
                  src={line}
                  alt=""
                  className="absolute left-0 top-full mt-2"
                />
              </span>
            </h4>

            <p className="text-gray-800 2xl:text-xl">
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="">
              <img src={play} alt="" className="2xl:w-[12rem]" />
            </a>
            <a href="">
              <img src={store} alt="" className="2xl:w-[12rem]" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:col-span-2 md:row-start-2 md:mx-auto md:w-fit md:flex-row md:p-5 md:shadow-lg lg:w-full lg:justify-between lg:gap-x-8">
        <div className="flex flex-col gap-4 md:flex-row md:gap-x-2 lg:w-[70%] lg:justify-between 2xl:w-[75%]">
          <div className="flex items-center gap-4">
            <img src={location} alt="" className="h-8 w-8" />
            <div className="flex flex-col">
              <p className="font-medium 2xl:text-xl">Location</p>
              <p className="text-sm text-gray-500 2xl:text-base">
                Search your location
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={calendar} alt="" className="h-8 w-8" />
            <div className="flex flex-col">
              <p className="font-medium 2xl:text-xl">Pickup date</p>
              <p className="text-sm text-gray-500 2xl:text-base">
                Choose an available date
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={calendar} alt="" className="h-8 w-8" />
            <div className="flex flex-col">
              <p className="font-medium 2xl:text-xl">Return date</p>
              <p className="text-sm text-gray-500 2xl:text-base">
                Choose a return date
              </p>
            </div>
          </div>
        </div>
        <Link
          to={"/page"}
          className="flex cursor-pointer items-center justify-center rounded-lg bg-[var(--primary-color)] p-2 font-medium text-white transition-colors hover:bg-[--primary-hover-color] md:px-10 md:py-1 2xl:text-lg"
        >
          Search
        </Link>
      </div>
      <div className="relative -mx-5 flex flex-col md:items-center md:justify-center lg:-mr-20 2xl:-mr-72">
        <img
          src={frame}
          alt=""
          className="absolute right-0 top-0 z-[999] h-[350px] w-[90%] md:top-[10%] md:h-[400px] md:w-[85%] xl:-top-20 xl:h-[600px] 2xl:h-[700px] 2xl:w-[70%]"
        />
        <img
          src={car}
          alt=""
          className="z-[10] my-14 w-full md:h-[300px] xl:h-[450px] 2xl:h-[550px]"
        />
      </div>
    </section>
  );
};

export default Hero;
