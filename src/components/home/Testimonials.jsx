import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import person1 from "../../assets/testemonials/charlie.png";
import person2 from "../../assets/testemonials/jenny.jpg";
import person3 from "../../assets/testemonials/selene.png";

import TestimonialCard from "../cards/TestimonialCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center gap-16 bg-[#F7FBFF]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-8">
          <div className="w-fit rounded-md bg-[var(--secondary-color)] px-8 py-2">
            <h4 className="font-medium uppercase text-[var(--primary-color)] md:text-lg 2xl:text-xl">
              TESTIMONIALS
            </h4>
          </div>
          <h4 className="text-center text-3xl font-medium text-gray-800 2xl:text-4xl">
            What people say about us?
          </h4>
        </div>

        {/* <Carousel
          responsive={responsive}
          className="w-[90vw]"
          itemClass="pr-10"
        >
          <TestimonialCard
            image={person2}
            name={"Jenny Wilson"}
            place={"From New York, US"}
            comment={
              "“I have been using your services for 3 years. Your service is great, I will continue to use your service.”"
            }
          />
          <TestimonialCard
            image={person1}
            name={"Charlie Johnson"}
            place={"From New York, US"}
            comment={
              "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”"
            }
          />
          <TestimonialCard
            image={person3}
            name={"Selene Strauss"}
            place={"From California, US"}
            comment={
              "“It's clear that customer satisfaction is a priority. I’ll definitely continue using your service for the foreseeable future. Keep up the great work!”"
            }
          />
        </Carousel> */}

        <Carousel
          responsive={responsive}
          className="w-[90vw] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
          itemClass="pr-0 md:pr-10"
        >
          <TestimonialCard
            image={person2}
            name={"Jenny Wilson"}
            place={"From New York, US"}
            comment={
              "“I have been using your services for 3 years. Your service is great, I will continue to use your service.”"
            }
          />
          <TestimonialCard
            image={person1}
            name={"Charlie Johnson"}
            place={"From New York, US"}
            comment={
              "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”"
            }
          />
          <TestimonialCard
            image={person3}
            name={"Selene Strauss"}
            place={"From California, US"}
            comment={
              "“It's clear that customer satisfaction is a priority. I’ll definitely continue using your service for the foreseeable future. Keep up the great work!”"
            }
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
