import React from "react";
import banner from "../../../Assets/Banner/final hero section.png";
import mobileBannar from "../../../Assets/Banner/mobileBannar.png";
import tabBanner from "../../../Assets/Banner/hero section.png";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          className=" h-screen w-[100%] hidden lg:block "
          src={banner}
          alt="banner"
        />
        <img
          className=" h-screen w-[100%] hidden md:block lg:hidden "
          src={tabBanner}
          alt="banner"
        />
        <img
          className=" h-[60vh] w-[100%] lg:hidden md:hidden block"
          src={mobileBannar}
          alt="banner"
        />
      </div>

      <div
        style={{
          top: "45%",
          right: "1%",
        }}
        className="absolute hidden lg:flex md:flex"
      >
        <SocialMedia />
      </div>
    </>
  );
};
export default Banner;
const data = [

];
