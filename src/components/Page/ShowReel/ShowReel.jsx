import React from "react";
import Headline from "../../TextComponents/Headline";
import { IoLogoYoutube } from "react-icons/io";
const ShowReel = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/t3gPjNT/Background-Image.jpg')] bg-cover bg-center h-screen pt-12 ">
      <Headline content="ShowReel" style={{ color: "white" }} />
      {/* <h1 className="headline capitalize  text-[#FFF8F8] text-center mb-5">
        showReel
      </h1> */}
      <div>
        <p style={{ position: "absolute", left: "50px" }}>filmmonks</p>
        <p
          className="text-3xl"
          style={{ position: "absolute", left: "50%", color: "red" }}
        >
          <IoLogoYoutube />
        </p>
        {/* <video src={video} autoPlay loop muted /> */}
        <img
          className="w-[850px] mx-auto"
          src="https://i.ibb.co/MfSK7fD/showreel.png"
          alt=""
        />{" "}
      </div>
    </div>
  );
};

export default ShowReel;
