import React from "react";
import Headline from "../../TextComponents/Headline";

import video from "../../../Assets/Film Monks Showreel 2023 (2).mp4";
import { useState } from "react";
import styled from "styled-components";
const ShowReel = () => {
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    console.log(play);
  };
  return (
    <Wrapper>
      {" "}
      <div
        style={{ boxShadow: " 0px 8px 8px rgba(0, 0, 0, 0.3)" }}
        className="bg-[url('https://i.ibb.co/t3gPjNT/Background-Image.jpg')] bg-cover bg-center lg:h-screen pt-4 pb-4 "
      >
        <Headline
          content="ShowReel"
          style={{ color: "white", marginTop: "50px" }}
        />

        <div className="flex justify-center ">
          <div>
            {" "}
            <iframe
              className="showReel-video"
              src="https://www.youtube.com/embed/i0E1WlJqtRM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  .showReel-video {
    width: 800px;
    height: 75vh;
    @media only screen and (max-width: 440px) {
      width: 300px;
      height: 40vh;
      margin-bottom: 20px;
    }
  }
`;
export default ShowReel;
