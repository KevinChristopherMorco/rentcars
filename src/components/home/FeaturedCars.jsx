import React from "react";
import FeaturedCard from "../cards/FeaturedCard";
import bmw from "../../assets/cars/bmw.png";
import audi from "../../assets/cars/audi-r8.png";
import lamborghini from "../../assets/cars/lamborghini.png";
import jaguar from "../../assets/cars/jaguar-xe.png";

const FeaturedCars = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        <FeaturedCard
          model={"Jaguar XE L P250"}
          carImage={jaguar}
          starcount={"4.8"}
          reviewcount={"2.436"}
          passengercount={"4 Passengers"}
          autospec={"Auto"}
          airconspec={"Air Conditioning"}
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
          airconspec={"Air Conditioning"}
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
          airconspec={"Air Conditioning"}
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
          airconspec={"Air Conditioning"}
          doorspec={"2 Doors"}
          price={"2,300"}
        />
      </div>
    </section>
  );
};

export default FeaturedCars;
