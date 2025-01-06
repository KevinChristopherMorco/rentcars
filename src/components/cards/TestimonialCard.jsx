import React from "react";
import star from "../../assets/testemonials/star.png";

const TestimonialCard = ({ image, name, place, comment }) => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white shadow-lg xl:grid xl:grid-cols-2 xl:pr-2">
      <img
        src={image}
        alt=""
        className="h-[300px] w-full rounded-xl xl:h-[400px] xl:w-[400px] 2xl:h-[450px] 2xl:w-[450px]"
      />
      <div className="flex flex-col justify-center gap-10 p-4 md:gap-2 md:px-5 md:py-8 lg:gap-10 xl:gap-16">
        <div className="flex flex-col gap-6 xl:gap-8">
          <div className="flex items-end gap-2 font-medium text-gray-800">
            <p className="text-4xl leading-[1] xl:text-5xl xl:leading-[2.5rem]">
              5.0
            </p>
            <p className="">stars</p>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
              return <img key={index} src={star} alt="" />;
            })}
          </div>

          <p className="h-[6rem] md:h-[10rem] lg:h-[5rem] 2xl:text-lg">
            {comment}
          </p>
        </div>
        <div>
          <p className="text-[1.5rem] font-medium">{name}</p>
          <p className="text-sm text-gray-500">{place}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
