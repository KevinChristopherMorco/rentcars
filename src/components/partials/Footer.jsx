import React from "react";

import store from "../../assets/astore.png";
import call from "../../assets/footer/call.png";
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import location from "../../assets/footer/location.png";
import sms from "../../assets/footer/sms.png";
import youtube from "../../assets/footer/youtube.png";
import play from "../../assets/gplay.png";
import logo from "../../assets/logo/frame-logo.png";
import mockup from "../../assets/mockup.png";

import getCurrentDate from "../../helpers/getCurrentDate";

const FooterList = ({ text }) => {
  return <h4 className="text-sm text-[#D6D6D6] xl:text-lg">{text}</h4>;
};

const FooterHeading = ({ title }) => {
  return (
    <h3 className="text-lg font-medium text-[#D6D6D6] 2xl:text-2xl">{title}</h3>
  );
};

const Footer = () => {
  const { currentYear } = getCurrentDate();
  return (
    <footer className="flex flex-col">
      <div className="relative flex flex-col gap-10 p-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-14 2xl:gap-x-20 2xl:px-60">
        <div className="mb-[20rem] flex flex-col gap-5 md:mb-0 md:py-20">
          <div className="w-fit rounded-md bg-[var(--secondary-color)] px-8 py-2">
            <h4 className="font-medium uppercase text-[var(--primary-color)] md:text-lg 2xl:text-xl">
              Download
            </h4>
          </div>
          <div className="flex flex-col gap-4 xl:gap-6">
            <h3 className="text-3xl font-semibold xl:text-5xl xl:leading-[1.15] 2xl:w-[80%]">
              Download Rentcars App for{" "}
              <span className="text-[var(--primary-color)]">FREE</span>{" "}
            </h3>
            <h4 className="text-gray-500 xl:text-xl">
              For faster, easier booking and exclusive deals.
            </h4>
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
        <div className="absolute -bottom-1 left-[50%] w-[90%] -translate-x-[50%] md:col-start-2 md:justify-self-center 2xl:left-[55%]">
          <img
            src={mockup}
            alt=""
            className="md:h-[24rem] 2xl:h-[28rem] 2xl:w-[70%]"
          />
        </div>
      </div>

      <div className="z-[999] flex flex-col gap-10 bg-[var(--footer-color)] px-5 py-12 md:grid md:grid-cols-2 lg:px-14 xl:grid-cols-[1fr_4fr] xl:gap-x-52 xl:gap-y-32 2xl:px-60">
        <div className="col-span-2 flex flex-col gap-5 md:col-start-1 md:row-start-1 xl:col-span-1 xl:gap-10">
          <div className="flex items-center gap-x-4">
            <img
              src={logo}
              alt=""
              className="h-[2rem] w-[2rem] 2xl:h-[3rem] 2xl:w-[3rem]"
            />
            <h5 className="text-lg font-semibold text-white xl:text-xl 2xl:text-2xl">
              RENTCARS
            </h5>
          </div>
          <div className="flex flex-col gap-4 xl:gap-8">
            <div className="flex items-center gap-x-3">
              <img
                src={location}
                alt=""
                className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
              />
              <FooterList text={"25566 Hc 1, Glenallen, Alaska, 99588, USA"} />
            </div>
            <div className="flex items-center gap-x-3">
              <img
                src={call}
                alt=""
                className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
              />
              <FooterList text={"+603 4784 273 12"} />
            </div>
            <div className="flex items-center gap-x-3">
              <img
                src={sms}
                alt=""
                className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
              />
              <FooterList text={"rentcars@gmail.com"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:col-start-2 md:row-start-1 md:grid md:grid-cols-2 xl:grid-cols-4 xl:gap-x-20">
          <div className="flex flex-col gap-5">
            <FooterHeading title={"Our Product"} />
            <div className="flex flex-col gap-2 xl:gap-3">
              <FooterList text={"Career"} />
              <FooterList text={"Car"} />
              <FooterList text={"Packages"} />
              <FooterList text={"Features"} />
              <FooterList text={"Priceline"} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <FooterHeading title={"Resources"} />
            <div className="flex flex-col gap-2 xl:gap-3">
              <FooterList text={"Download"} />
              <FooterList text={"Help Centre"} />
              <FooterList text={"Guides"} />
              <FooterList text={"Partner Network"} />
              <FooterList text={"Cruises"} />
              <FooterList text={"Developer"} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <FooterHeading title={"About Rentcars"} />
            <div className="flex flex-col gap-2 xl:gap-3">
              <FooterList text={"Why choose us"} />
              <FooterList text={"Our Story"} />
              <FooterList text={"Investor Relations"} />
              <FooterList text={"Press Center"} />
              <FooterList text={"Advertise"} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <FooterHeading title={"Follow Us"} />
            <div className="flex items-center gap-4">
              <img
                src={facebook}
                alt=""
                className="h-7 w-7 cursor-pointer xl:h-8 xl:w-8"
              />
              <img
                src={instagram}
                alt=""
                className="h-7 w-7 cursor-pointer xl:h-8 xl:w-8"
              />
              <img
                src={youtube}
                alt=""
                className="h-7 w-7 cursor-pointer xl:h-8 xl:w-8"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-10 text-sm text-[#D6D6D6] xl:col-start-1 xl:row-start-2 xl:text-lg">
          <hr />
          <p>Copyright {currentYear} ・ Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
