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
    <div className="w-[1440px] h-[1002px] bg-[#EAEBEC] py-[120px] pl-[120px]">
      <div className="w-[1200px] h-[112px] mb-[48px] flex justify-between pb-[48px]">
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
        <div
          className={`w-[684px] h-[508px] -mx-[10rem] bg-white overflow-visible ${
            animating ? "animate-zoomIn" : ""
          }`}
        >
          <div className=" relative overflow-visible    ">
            <img
              src={line}
              alt="Rectangle"
              className=" absolute overflow-visible size-60 top-[-100px] left-[-100px] bg-black "
            />
          </div>
        </div>
        <div
          className={`w-[684px] h-[508px] bg-red-400 ${
            animating ? "animate-zoomIn" : ""
          }`}
        ></div>
      </Carousel>
      <div className="mt-4 text-center">
        <span className="text-3xl font-sora">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
}

export default About;
