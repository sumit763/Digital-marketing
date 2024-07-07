import React from "react";
import bgImg1 from "../assets/HomeBg1.svg";
import bgImg2 from "../assets/HomeBg2.svg";
import btn from "../assets/btn.svg";
import market from "../assets/market.svg";
import overlays from "../assets/overlays.svg";
import startup from "../assets/startup.svg";

const Home = () => {
  return (
    <div className="h-full max-w-full">
      {/* Navbar */}
      <div className=" flex justify-between w-[83rem] pt-12 px-12 ">
        <div className="flex space-x-1 ml-4 ">
          <img src="src/assets/MainLgo.svg" alt="" />
          <h1 className="text-[26.46px] font-bold -mt-1">PIXELZEN</h1>
        </div>
        <nav className="space-x-7 text-black">
          <a
            href="#home"
            id="home"
            className="px-3 py-3 hover:font-semibold hover:border hover:rounded-3xl"
          >
            Home
          </a>
          <a
            href="#services"
            className="px-3 py-3 hover:font-semibold hover:border hover:rounded-3xl"
            id="services"
          >
            Services
          </a>
          <a
            href="#features"
            id="features"
            className="px-3 py-3 hover:font-semibold hover:border hover:rounded-3xl"
          >
            Features
          </a>
          <a
            href="#about"
            id="about"
            className="px-3 py-3 hover:font-semibold hover:border hover:rounded-3xl"
          >
            About Us
          </a>
          <a
            href="#contact"
            id="contact"
            className="px-3 py-3 hover:font-semibold hover:border hover:rounded-3xl"
          >
            Contact Us
          </a>
        </nav>
      </div>
      {/*********  Background Images  *********** */}
      <div className="flex h-screen w-screen">
        {/** Background  Image Two */}
        <div
          className="w-[520px] h-[520px]"
          style={{
            backgroundImage: `url(${bgImg1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left ", // Positions of each image
            backgroundSize: "500px 500px ",
            padding: "0px",
            margin: "-80px 0px 0px 0px",
          }}
        ></div>
        {/** Background  Image Two */}
        <div
          className="w-[550px] h-[550px]"
          style={{
            backgroundImage: ` url(${bgImg2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right ", // Positions of each image
            backgroundSize: "  550px 550px",
            padding: "15px 10px 0px 0px",
            margin: "70px 0px 0px 200px",
          }}
        ></div>
      </div>
      {/** Text and btn */}
      <div className="-mt-[33rem] w-[50rem] h-[34rem]   ">
        <div className="text-[74px] p-28 pl-24 pr-6 leading-[1] font-semibold ">
          <h1>
            We make your business{" "}
            <span className="text-orange-600">interesting</span>
          </h1>
        </div>
        <p className=" -mt-16 ml-24 mr-48 leading-[1.1] text-gray-700">
          Make your business more attractive and unique in the eyes of each of
          your customers reach a wider market and build a better business{" "}
        </p>

        <button className="m-8 ml-[5.6rem] p-2 px-6  bg-[#1D1927] text-white rounded-full flex text-[18px] font-santosi">
          <span className="mt-[5px]">Getting Started</span>
          <img src={btn} alt="logo" className=" ml-4 -mr-3 -mt-1 size-12 " />
        </button>
      </div>
      {/** horizontal lines  */}
      <div>
        {/**  upper line */}
        <div
          className="w-full h-[0.2rem] max-w-[90rem] mx-auto mb-8 mt-7"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(204, 85, 0, 0) 1%, rgba(204, 85, 0, 0.8) 50%, rgba(204, 85, 0, 0) 99%)",
          }}
        ></div>
        {/**  Our Clients  */}
        <div className=" flex justify-between w-[83rem]">
          <div className="ml-12 mt-2 text-[14px] text-[#010101]">
            <h3 className="font-santosi text-[#2e2d2c]">OUR CLIENTS :</h3>
          </div>
          {/** Companies */}
          <div className="flex space-x-5 mr-8 font-santosi">
            <div className="flex space-x-1 text-[22.5px] text-[#adabaa] font-bold  drop-shadow-md">
              <img src={market} alt="" className="" />

              <h3>MarketSavy</h3>
            </div>
            <div className="flex space-x-1 text-[22.5px]  text-[#adabaa] font-bold drop-shadow-sm">
              <img src={startup} alt="" />
              <h3 className="drop-shadow-md">Starsup</h3>
            </div>
            <div className="flex space-x-1 text-[22.5px]  text-[#adabaa] font-thin ">
              <img src={overlays} alt="" />
              <h3 className="drop-shadow-md">overlays</h3>
            </div>
            <div className="flex space-x-1 text-[22.5px] text-[#adabaa] font-bold drop-shadow-md">
              <img src={startup} alt="" />
              <h3>Starsup</h3>
            </div>
          </div>
        </div>
        {/** lower line */}
        <div
          className="w-full h-[0.2rem] max-w-[90rem] mx-auto my-7"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(204, 85, 0, 0) 1%, rgba(204, 85, 0, 0.8) 50%, rgba(204, 85, 0, 0) 99%)",
          }}
        ></div>
      </div>
      {/**  Reviews  **/}
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-[40px] text-orange-500 font-bold ">250+</h1>
          <h4 className="text-[14px] font-santosi text-[#010101]">
            Our Happy Customer
          </h4>
        </div>
        <div>
          <h1 className="text-[40px] text-orange-500 font-bold">100+</h1>
          <h4 className="text-[14px] font-santosi text-[#010101]">
            Best Service Provided
          </h4>
        </div>
        <div>
          <h1 className="text-[40px] text-orange-500 font-bold">570+</h1>
          <h4 className="text-[14px] font-santosi text-[#010101]">
            Product Portfolio Results
          </h4>
        </div>
        <div>
          <h1 className="text-[40px] text-orange-500 font-bold">300+</h1>
          <h4 className="text-[14px] font-santosi text-[#010101]">
            Our Business Partner
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
