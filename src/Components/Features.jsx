import React from "react";
import bg1 from "../assets/FeatureBottom.svg";
import bg2 from "../assets/FeatureTop.svg";
import icon from "../assets/icon.svg";
import btnicon from "../assets/btnlogo.svg";
const Features = () => {
  return (
    <div className="  max-w-full h-[1370px]  flex justify-center items-center ">
      <div className="w-[1280px] h-[1209px] bg-[#DBDCDD]  flex ">
        {/** Background  Image Two */}
        <div
          className="w-[526px] h-[526px] "
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left ", // Positions of each image
            backgroundSize: "500px 500px ",
          }}
        >
          <h1 className="font-sora text-[48px]   ml-20 -mr-[18rem] mt-[4.5rem]">
            The Best Features We Present
          </h1>
          <div className="grid grid-cols-2 gap-4 place-content-center w-[1136px] h-[909px]  ml-[72px] mt-[72px]">
            <div className=" w-[552px] h-[438.5px] bg-white rounded-3xl">
              <div className="mt-[4rem] ml-[48px]">
                <img src={icon} alt="icon" />
              </div>
              <div className="mt-[1rem] ml-[48px]  font-santosi">
                <h1 className="text-[32px] text-[#363B45]">
                  Best Technology Tools
                </h1>
                <p className="text-[16px] mr-[2.2rem] text-[#010101]">
                  It's easier to develop a business with the latest modern
                  technology tools that we have it can give your business the
                  opportunity to grow bigger
                </p>
              </div>
              <button className="m-8 ml-[3rem] p-2 px-6 border text-black rounded-full flex text-[16px] font-santosi hover:shadow-2xl">
                <span className="mt-[5px]">Know More</span>
                <img
                  src={btnicon}
                  alt="logo"
                  className=" ml-4 -mr-3 -mt-1 size-12 "
                />
              </button>
            </div>
            <div className=" w-[552px] h-[438.5px] bg-white rounded-3xl">
              <div className="mt-[4rem] ml-[48px]">
                <img src={icon} alt="icon" />
              </div>
              <div className="mt-[1rem] ml-[48px]  font-santosi">
                <h1 className="text-[32px] text-[#363B45]">
                  Fast & Responsive Result
                </h1>
                <p className="text-[16px] mr-[2.2rem] text-[#010101]">
                  We guarenteen the impact of our work can be seen quicky and
                  precisely of our business strategy and great team that work
                  professionally
                </p>
              </div>
              <button className="m-8 ml-[3rem] p-2 px-6 border text-black rounded-full flex text-[16px] font-santosi hover:shadow-2xl">
                <span className="mt-[5px]">Know More</span>
                <img
                  src={btnicon}
                  alt="logo"
                  className=" ml-4 -mr-3 -mt-1 size-12 "
                />
              </button>
            </div>
            <div className=" w-[552px] h-[438.5px] bg-white rounded-3xl">
              <div className="mt-[4rem] ml-[48px]">
                <img src={icon} alt="icon" />
              </div>
              <div className="mt-[1rem] ml-[48px]  font-santosi">
                <h1 className="text-[32px] text-[#363B45]">
                  More Flexible Pricing
                </h1>
                <p className="text-[16px] mr-[2.2rem] text-[#010101]">
                  The price offers we provide rend to be more flexible you can
                  choose according to your needs,you don't have to choose a
                  particular package
                </p>
              </div>
              <button className="m-8 ml-[3rem] p-2 px-6 border text-black rounded-full flex text-[16px] font-santosi hover:shadow-2xl">
                <span className="mt-[5px]">Know More</span>
                <img
                  src={btnicon}
                  alt="logo"
                  className=" ml-4 -mr-3 -mt-1 size-12 "
                />
              </button>
            </div>
            <div className=" w-[552px] h-[438.5px] bg-white rounded-3xl">
              <div className="mt-[4rem] ml-[48px]">
                <img src={icon} alt="icon" />
              </div>
              <div className="mt-[1rem] ml-[48px]  font-santosi">
                <h1 className="text-[32px] text-[#363B45]">
                  Data Security Guarantee
                </h1>
                <p className="text-[16px] mr-[2.2rem] text-[#010101]">
                  We will manage your business and company data security wisely
                  and guarenteed to be safe from outside parties, without any
                  fraud from our side
                </p>
              </div>
              <button className="m-8 ml-[3rem] p-2 px-6 border text-black rounded-full flex text-[16px] font-santosi hover:shadow-2xl">
                <span className="mt-[5px]">Know More</span>
                <img
                  src={btnicon}
                  alt="logo"
                  className=" ml-4 -mr-3 -mt-1 size-12 "
                />
              </button>
            </div>
          </div>
        </div>
        {/** Background  Image Two */}
        <div
          className="w-[526px] h-[526px] ml-[13.9rem] mt-[42.4rem] "
          style={{
            backgroundImage: ` url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right ", // Positions of each image
            backgroundSize: "  550px 550px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Features;
