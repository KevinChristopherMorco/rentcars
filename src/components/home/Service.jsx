import React from "react";
import ServiceCard from "../cards/ServiceCard";

import wallet from "../../assets/wallet.png";
import usertick from "../../assets/user-tick.png";
import support from "../../assets/24-support.png";
import messages from "../../assets/messages-2.png";

const Service = () => {
  return (
    <section className="grid lg:grid-cols-2">
      <div>Picture</div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-fit rounded-md bg-[var(--secondary-color)] px-8 py-2">
          <h4 className="font-medium uppercase text-[var(--primary-color)] md:text-lg 2xl:text-xl">
            How it works
          </h4>
        </div>
        <h4 className="text-center text-3xl font-medium text-gray-800">
          We offer the best experience with our rental deals
        </h4>
        <div className="flex flex-col gap-5">
          <ServiceCard
            image={wallet}
            text={"Best price guaranteed"}
            subtext={
              "Find a lower price? We’ll refund you 100% of the difference."
            }
          />
          <ServiceCard
            image={usertick}
            text={"Experience driver"}
            subtext={
              "Don’t have driver? Don’t worry, we have many experienced driver for you"
            }
          />
          <ServiceCard
            image={support}
            text={"24 hour car delivery"}
            subtext={
              "Book your car anytime and we will deliver it directly to you."
            }
          />
          <ServiceCard
            image={messages}
            text={"24/7 technical support"}
            subtext={
              "Have a question? Contact Rentcars support any time when you have problem"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;