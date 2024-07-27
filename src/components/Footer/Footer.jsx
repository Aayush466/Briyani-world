import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Briyani Point
            </h1>
           <h5>
           Nothing brings people together like good food.
           </h5>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Mumbai, Maharashtra</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 8806424938</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                 Legal 
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Term&Condition </li>
                  <li className="cursor-pointer">Cookie Policy</li>
                  <li className="cursor-pointer">Privacy Policy</li>
                  <li className="cursor-pointer">Investor Relation </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us 
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Help & Support </li>
                  <li className="cursor-pointer">Parter with us </li>
                  <li className="cursor-pointer">Ride with us </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  We Deliver To
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Mumbai</li>
                  <li className="cursor-pointer">Thane </li>
                  <li className="cursor-pointer">Mira-Bhyander</li>
                  <li className="cursor-pointer">vasai-virar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Aayush Shah
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;