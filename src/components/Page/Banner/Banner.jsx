import React from "react";
import banner from "../../../Assets/Banner/final hero section.png";
import mobileBannar from "../../../Assets/Banner/mobileBannar.png";

const Banner = () => {
  return (
    <>
      <img
        className=" h-screen w-[100%] hidden lg:block "
        src={banner}
        alt="banner"
      />
      <img
        className=" h-screen w-[100%] lg:hidden block"
        src={mobileBannar}
        alt="banner"
      />
    </>
  );
};
export default Banner;
