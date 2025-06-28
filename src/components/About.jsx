import React from "react";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-black mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our brands
        </span>
      </h1>
      <p className="text-gray-500 text-center mb-8 max-w-80">
        Passionate about properties, Dedicated about your vision
      </p>
      <div>
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
      </div>
    </div>
  );
};

export default About;
