import React from "react";
import { Link } from "react-router-dom";
import guy from "../img/guy.png";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 overflow-y-hidden px-10">
      <div className="container flex justify-around h-full mx-auto">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/*pre-title*/}
          <div className="flex items-center font-semibold uppercase">
            <div className="w-10 h-[2px] bg-orange-700 mr-2"></div>New Trend
          </div>
          {/*title*/}
          <h1 className="text-[70px] text-zinc-700 font-light leading-[1.1] mb-4">
            WINTER SALE STYLISH <br />
            <span className="font-semibold text-zinc-900">MEN</span>
          </h1>
          <Link
            to={"/E-commerce-prototype/"}
            className="self-start font-semibold uppercase border-b-2 border-black "
          >
            Discover more
          </Link>
        </div>

        {/* image */}
        <div className="hidden lg:block ">
          <img className="max-w-[650px]" src={guy} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
