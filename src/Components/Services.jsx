import React from "react";
import btnicon from "../assets/btnlogo.svg";
import img1 from "../assets/Rectangle 15img1.svg";

const Services = () => {
  return (
    <div className="w-[1440px] h-[2797px]  flex flex-col  mt-0 ">
      {/* M upper container */}
      <div className="flex justify-between   w-[1200px] h-[140px] mx-[120px] mt-[120px] mb-[80px] ">
        <div className=" mr-[20rem]">
          <h1 className="text-[48px] font-sora">
            We Just Offer The Best Services
          </h1>
        </div>
        <div>
          <h3 className="text-[16px] font-santosi">
            We present the best digital marketing sevices carried out
            professionally
          </h3>
          <button className="p-1 px-3 mt-6  border text-black rounded-full flex text-[16px] font-santosi">
            <span className="mt-[5px] text-[16px]">Know More</span>
            <img
              src={btnicon}
              alt="logo"
              className=" ml-2 -mr-1 -mt-[1.6px] size-12 "
            />
          </button>
        </div>
      </div>
      {/*  M bottom container  */}
      <div className=" w-[1200] h-[2352] mx-[120px]  mb-[80px] ">
        <div className="w-[1200px] h-[558px]  mb-[40px] flex justify-between items-center ">
          <div className="flex justify-center items-center m-[80px] w-[563px] h-[398px] bg-[#EAEBEC] border-[#F2F2F2] ">
            <div>
              <img src={img1} alt="" className="w-[379px] h-[474px]" />
            </div>
          </div>
          <div className="w-[397px] h-[288px]  m-[80px] ml-0">
            <div>
              <h1 className="font-sora text-[32px] font-semibold text-[#363B45] mr-20">
                Consutant Business Strategy
              </h1>
            </div>
            <div>
              <p className="font-santosi text-[16px] text-[#010101]">
                We provide the best solution for your business planning so that
                it can help it can help increase your business to be more
                advanced in the market reach and your company's income
              </p>
            </div>
            <button className="p-1 px-3 mt-6  border text-black rounded-full flex text-[16px] font-santosi">
              <span className="mt-[5px] text-[16px]">Know More</span>
              <img
                src={btnicon}
                alt="logo"
                className=" ml-2 -mr-1 -mt-[1.6px] size-12 "
              />
            </button>
          </div>
        </div>
        <div className="w-[1200px] h-[558px]   mb-[40px] flex flex-row-reverse justify-between items-center ">
          <div className="flex justify-center items-center m-[80px] w-[563px] h-[398px] bg-[#ffece4] border-[#F2F2F2] shadow-sm ">
            <div>
              <img src={img1} alt="" className="w-[379px] h-[474px]" />
            </div>
          </div>
          <div className="w-[397px] h-[288px]  m-[80px] mr-0">
            <div>
              <h1 className="font-sora text-[32px] font-semibold text-[#363B45] mr-20">
                Gooogle Ads Management
              </h1>
            </div>
            <div>
              <p className="font-santosi text-[16px] text-[#010101]">
                Help manage ads on Google service to further maximize the
                potential reach of customers who can be targeted and make them
                more interested in the products
              </p>
            </div>
            <button className="p-1 px-3 mt-6  border text-black rounded-full flex text-[16px] font-santosi">
              <span className="mt-[5px] text-[16px]">Read more</span>
              <img
                src={btnicon}
                alt="logo"
                className=" ml-2 -mr-1 -mt-[1.6px] size-12 "
              />
            </button>
          </div>
        </div>
        <div className="w-[1200px] h-[558px]  mb-[40px] flex justify-between items-center ">
          <div className="flex justify-center items-center m-[80px] w-[563px] h-[398px] bg-[#EAEBEC] border-[#F2F2F2] ">
            <div>
              <img src={img1} alt="" className="w-[379px] h-[474px]" />
            </div>
          </div>
          <div className="w-[397px] h-[288px]  m-[80px] ml-0">
            <div>
              <h1 className="font-sora text-[32px] font-semibold text-[#363B45] mr-20">
                Research & Discovery
              </h1>
            </div>
            <div>
              <p className="font-santosi text-[16px] text-[#010101]">
                Conduct in-depth and detailed searches and observations to
                obtain as much information as possible and with high accuracy
                required by our customer business needs
              </p>
            </div>
            <button className="p-1 px-3 mt-6  border text-black rounded-full flex text-[16px] font-santosi">
              <span className="mt-[5px] text-[16px]">Read more</span>
              <img
                src={btnicon}
                alt="logo"
                className=" ml-2 -mr-1 -mt-[1.6px] size-12 "
              />
            </button>
          </div>
        </div>
        <div className="w-[1200px] h-[558px]  mb-[40px] flex flex-row-reverse justify-between items-center ">
          <div className="flex justify-center items-center m-[80px] w-[563px] h-[398px] bg-[#ffece4] border-[#F2F2F2] ">
            <div>
              <img src={img1} alt="" className="w-[379px] h-[474px]" />
            </div>
          </div>
          <div className="w-[397px] h-[288px]  m-[80px] mr-0">
            <div>
              <h1 className="font-sora text-[32px] font-semibold text-[#363B45] mr-20">
                Social Media Marketing
              </h1>
            </div>
            <div>
              <p className="font-santosi text-[16px] text-[#010101]">
                More interesting with services on social media for your
                business, because we will manage your business professional
                account and make that attracts more consumers
              </p>
            </div>
            <button className="p-1 px-3 mt-6  border text-black rounded-full flex text-[16px] font-santosi">
              <span className="mt-[5px] text-[16px]">Read more</span>
              <img
                src={btnicon}
                alt="logo"
                className=" ml-2 -mr-1 -mt-[1.6px] size-12 "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
