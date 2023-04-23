import React from "react";
import Headline from "../../TextComponents/Headline";
import { IoLogoYoutube } from "react-icons/io";
import video from "../../../Assets/Film Monks Showreel 2023 (2).mp4";
import { useState } from "react";
const ShowReel = () => {
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    console.log(play);
  };
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
          <IoLogoYoutube onClick={() => handleClick(setPlay(!play))} />
        </p>
        <video className="w-[850px] mx-auto" controls src={video} />
      </div>
    </div>
  );
};

export default ShowReel;
