import React from "react";
// import banner from "../../../Assets/Banner/final hero section.png";
// import mobileBannar from "../../../Assets/Banner/mobileBannar.png";
// import tabBanner from "../../../Assets/Banner/hero section.png";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import useGet from "../../../hooks/useGet";

const Banner = () => {
  const url = "https://filmmonks-server.onrender.com/upload";
  const { dataSource } = useGet(url);

  const lastElement = dataSource.slice(-1)[0];

  const pathnames = lastElement?.path?.map(({ pathname }) => pathname);
  return (
    <>
      <div className="relative">
        {pathnames?.slice(2, 3)?.map((data) => (
          <img
            className=" h-screen w-[100%] hidden lg:block "
            src={`https://filmmonks-server.onrender.com/home/` + data}
            alt="banner"
          />
        ))}
        {pathnames?.slice(1, 2)?.map((data) => (
          <img
            className=" h-screen w-[100%] hidden md:block lg:hidden "
            src={`https://filmmonks-server.onrender.com/home/` + data}
            alt="banner"
          />
        ))}

        {pathnames?.slice(0, 1)?.map((data) => (
          <img
            className=" h-[60vh] w-[100%] lg:hidden md:hidden block"
            src={`https://filmmonks-server.onrender.com/home/` + data}
            alt="banner"
          />
        ))}
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

