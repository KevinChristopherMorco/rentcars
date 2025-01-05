import React from "react";
import FeaturedCard from "../cards/FeaturedCard";
import bmw from "../../assets/cars/bmw.png";
import audi from "../../assets/cars/audi-r8.png";
import lamborghini from "../../assets/cars/lamborghini.png";
import jaguar from "../../assets/cars/jaguar-xe.png";

const FeaturedCars = () => {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col items-center gap-8">
        <div className="w-fit rounded-md bg-[var(--secondary-color)] px-8 py-2">
          <h4 className="font-medium uppercase text-[var(--primary-color)] md:text-lg 2xl:text-xl">
            POPULAR RENTAL DEALS
          </h4>
        </div>
        <h4 className="text-center text-3xl font-medium text-gray-800 2xl:text-4xl">
          Most popular cars rental deals
        </h4>
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-4 2xl:gap-10">
        <FeaturedCard
          model={"Jaguar XE L P250"}
          carImage={jaguar}
          starcount={"4.8"}
          reviewcount={"2.436"}
          passengercount={"4 Passengers"}
          autospec={"Auto"}
          airconspec={"Air Conditioned"}
          doorspec={"4 Doors"}
          price={"1,800"}
        />
        <FeaturedCard
          model={"Audi R8"}
          carImage={audi}
          starcount={"4.6"}
          reviewcount={"1.936"}
          passengercount={"2 Passengers"}
          autospec={"Auto"}
          airconspec={"Air Conditioned"}
          doorspec={"2 Doors"}
          price={"2,100"}
        />
        <FeaturedCard
          model={"BMW M3"}
          carImage={bmw}
          starcount={"4.5"}
          reviewcount={"2.036"}
          passengercount={"4 Passengers"}
          autospec={"Auto"}
          airconspec={"Air Conditioned"}
          doorspec={"4 Doors"}
          price={"1,600"}
        />
        <FeaturedCard
          model={"Lamborghini Huracan"}
          carImage={lamborghini}
          starcount={"4.3"}
          reviewcount={"2.236"}
          passengercount={"2 Passengers"}
          autospec={"Auto"}
          airconspec={"Air Conditioned"}
          doorspec={"2 Doors"}
          price={"2,300"}
        />
      </div>
    </section>
  );
};

export default FeaturedCars;
