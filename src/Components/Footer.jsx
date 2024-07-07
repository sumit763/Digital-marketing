import React from "react";
{
}
function Footer() {
  return (
    <footer className="  bg-[#EAEBEC] w-[1440px] h-[392px] p-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0 w-[291px] h-[232px] ">
            <div className="flex items-center mb-4">
              <img
                src="src/assets/MainLgo.svg"
                alt="PixelZen Logo"
                className="mr-2"
              />
              <h1 className="text-2xl font-bold">PIXELZEN</h1>
            </div>
            <p className="text-sm text-gray-600">
              Digicomp is a company that specializes in providing digital
              marketing services, has more than 10 years of experience making it
              the best and will continue to develop until now.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/twitter.svg" alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-28 -mt-10 font-santosi font-medium mr-6 ">
            <div>
              <h2 className="text-lg font-semibold mb-4">Special Links</h2>
              <ul className="text-sm text-gray-600 space-y-3">
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Best Features</a>
                </li>
                <li>
                  <a href="#">Premium Member</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Company</h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Office Map</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Platform</h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Software Tools</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
                <li>
                  <a href="#">Brand Product</a>
                </li>
                <li>
                  <a href="#">Get The App</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Company</h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Office Map</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/** All rights reserved */}
        <div className="text-center text-[16px] font-santosi text-gray-600  bg-[#ffece4] w-[1440px] h-[54px] flex justify-center items-center -ml-[7rem] mt-[3.5rem]">
          <div>
            <h3>©2023 PixelZen All rights reserved</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
