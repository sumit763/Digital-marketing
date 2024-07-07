import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import line from "../assets/Rline.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const totalSlides = 10; // Update this number based on the total slides

  useEffect(() => {
    setAnimating(true);
    const timeoutId = setTimeout(() => setAnimating(false), 250); // Match the animation duration
    return () => clearTimeout(timeoutId);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="  w-[1440px] h-[1002px] bg-[#EAEBEC] py-[120px] pl-[120px] ">
      {/** Heading and Swipe button */}
      <div className="w-[1200px] h-[112px]  pl-8 flex justify-between ">
        <div className="text-[48px] font-sora font-medium">
          What Our Clients Say :
        </div>
        <div className="flex">
          <div className="size-[64px] cursor-pointer" onClick={handlePrev}>
            <img src={leftArrow} alt="Previous" />
          </div>
          <div className="size-[64px] cursor-pointer" onClick={handleNext}>
            <img src={rightArrow} alt="Next" />
          </div>
        </div>
      </div>
      <Carousel
        selectedItem={currentSlide}
        onChange={handleSlideChange}
        infiniteLoop={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={false}
        emulateTouch={false}
        autoPlay={false}
        className=" relative"
      >
        {/*** Slide 1 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 2 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 3 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 4 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 5 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 6 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 7 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 8 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 9 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
        {/** slide 10 */}
        <div
          className={`w-[684px] h-[508px] pl-8 pt-8 relative ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <img
            src={line}
            alt="Rectangle"
            className="absolute  max-w-36 top-0 left-0"
          />
          <div className="h-full  bg-white py-[72px] px-[56px]  ">
            <div className="text-start w-[572px] h-[66px]">
              <h1 className="text-[32px] font-medium text-[#010101] font-santosi">
                "Business development in our company is growing exponentially
              </h1>

              <p className=" mt-5 text-[16px] font-santosi font-normal text-[#9c9a9a] ">
                Business development in our company is growing exponentially
                with the help of digital marketing services digicomp,we are
                happy with this collaboration,the funds will continue in the
                next project"
              </p>
            </div>
            <hr class="w-[67px] h-1 mx-auto my-4 bg-gray-100  dark:bg-[#F3690C] mt-[10rem] -ml-[2px]" />
            <div className="w-[572px] h-[88px] flex justify-between mt-[48px] mb-[72px]">
              <div className=" pt-[42px] text-start">
                <h3 className="font-santosi text-[16px] text-[#010101] font-medium ">
                  Skibidi Totoro
                </h3>
                <h3 className="font-medium font-santosi text-[16px] text-[#9c9a9a]">
                  Ceo Kobara Company
                </h3>
              </div>
              <div className="w-[110px] h-[150px] bg-[#D9D9D9] -mt-16 mr-4"></div>
            </div>
          </div>
        </div>
      </Carousel>
      {/** numbering */}
      <div className="mt-4 w-[1200px] h-[36px] float-end text-end mr-24">
        <span className="text-3xl font-sora text-black">
          {currentSlide + 1}/
        </span>
        <span className=" text-2xl text-gray-500">{totalSlides}</span>
      </div>
    </div>
  );
}

export default About;
