import React from "react";
import btnicon from "../assets/btnlogo.svg";

const Contact = () => {
  return (
    <div className="  w-[1440px] h-[956px] p-[120px]">
      <div className=" w-[1200px] h-[124px] mb-[80px] flex justify-between">
        <div className=" w-[468px] h-[104px]">
          <h1 className=" font-sora font-medium text-[48px] text-black text-start leading-[1] -mr-10 ">
            Let's See A Selection Of Our Work
          </h1>
        </div>
        <div className=" w-[384px] h-[124px] ">
          <div className=" w-[384px] h-[44px] mb-[24px]">
            <p className=" font-santosi font-normal text-[16px] text-[#010101]">
              {" "}
              Here are some examples of your work that can be used as a
              reference for the quality we produce
            </p>
          </div>
          <button className="m-8 ml-1 p-2 px-6 pb-1 border text-black rounded-full flex text-[16px] font-santosi hover:shadow-2xl">
            <span className="mt-[5px]">Read more</span>
            <img
              src={btnicon}
              alt="logo"
              className=" ml-4 -mr-3 -mt-1 size-12 "
            />
          </button>
        </div>
      </div>
      <div className=" w-[1200px] h-[512px] ">
        <div className="flex">
          <div className=" w-[373.33px] h-[512px] mr-[40px] group">
            <div className=" w-[373.33px] h-[336px] bg-[#f8f4f4] relative group-hover:rounded-br-[2rem] ">
              <button className=" p-2 px-6 pb-1 border text-black rounded-full flex text-[16px] font-santosi absolute right-3 bottom-3 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="mt-[5px]">Read more</span>
                <img
                  src={btnicon}
                  alt="logo"
                  className=" ml-4 -mr-3 -mt-1 size-12 "
                />
              </button>
            </div>
            <div className=" w-[373.33px] h-[176px] ">
              <div className=" h-[38px]">
                <h2 className=" font-santosi text-[32px] font-medium mt-[15px] ">
                  Business Progress
                </h2>
              </div>
              <div className=" h-[66px] ">
                <p className=" font-santosi text-[16px] mt-[15px] leading-[1.1] text-[#9c9a9a] ">
                  {" "}
                  Tracking and monitoring the business that is being developed
                  with a predetermined strategy to see result in real time and
                  accurately{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[373.33px] h-[512px] mr-[40px] group">
            <div className=" w-[373.33px] h-[336px] bg-[#f8f4f4] relative group-hover:rounded-br-[2rem] ">
              <button className=" p-2 px-6 pb-1 border text-black rounded-full flex text-[16px] font-santosi absolute right-3 bottom-3 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="mt-[5px]">Read more</span>
                <img
                  src={btnicon}
                  alt="logo"
                  className=" ml-4 -mr-3 -mt-1 size-12 "
                />
              </button>
            </div>
            <div className=" w-[373.33px] h-[176px] ">
              <div className=" h-[38px]">
                <h2 className=" font-santosi text-[32px] font-medium mt-[15px] ">
                  Digital Advertising
                </h2>
              </div>
              <div className=" h-[66px] ">
                <p className=" font-santosi text-[16px] mt-[15px] leading-[1.1] text-[#9c9a9a] ">
                  See how the result of the digital ads that you create and
                  broadcast to attract more attention from potential customer
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[373.33px] h-[512px] mr-[40px] group">
            <div className=" w-[373.33px] h-[336px] bg-[#f8f4f4] relative group-hover:rounded-br-[2rem] ">
              <button className=" p-2 px-6 pb-1 border text-black rounded-full flex text-[16px] font-santosi absolute right-3 bottom-3 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="mt-[5px]">Read more</span>
                <img
                  src={btnicon}
                  alt="logo"
                  className=" ml-4 -mr-3 -mt-1 size-12 "
                />
              </button>
            </div>
            <div className=" w-[373.33px] h-[176px] ">
              <div className=" h-[38px]">
                <h2 className=" font-santosi text-[32px] font-medium mt-[15px] ">
                  Company Data Recap
                </h2>
              </div>
              <div className=" h-[66px] ">
                <p className=" font-santosi text-[16px] mt-[15px] leading-[1.1] text-[#9c9a9a] ">
                  Recapitulate to make the company's business documents more
                  presentable and informative with many interesting features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
