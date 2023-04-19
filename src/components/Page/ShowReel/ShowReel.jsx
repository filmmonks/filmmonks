import React from "react";
import Headline from "../../TextComponents/Headline";
import { IoLogoYoutube } from "react-icons/io";
import video from "../../../Assets/Film Monks Showreel 2023 (2).mp4";
const ShowReel = () => {
  return (
    <div
      style={{ boxShadow: " 0px 8px 8px rgba(0, 0, 0, 0.3)" }}
      className="bg-[url('https://i.ibb.co/t3gPjNT/Background-Image.jpg')] bg-cover bg-center h-screen pt-4 pb-4 relative"
    >
      <Headline
        content="ShowReel"
        style={{ color: "white", marginTop: "50px" }}
      />

      <div>
        <p
          className="text-3xl"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            color: "red",
          }}
        >
          <IoLogoYoutube />
        </p>
        {/* <video className="w-[850px] mx-auto" autoPlay loop src={video} /> */}
        <img
          className="lg:w-[850px] lg:h-[425px] md:w-[550px] md:h-[225px] xs:w-[300px] xs:h-[150px] mx-auto"
          src="https://i.ibb.co/MfSK7fD/showreel.png"
          alt=""
        />{" "}
      </div>
    </div>
  );
};

export default ShowReel;
