import React from "react";
import Headline from "../../TextComponents/Headline";

// import { useState } from "react";
import styled from "styled-components";
import useGet from "../../../hooks/useGet";
const ShowReel = () => {
  const url = "https://filmmonks-server.onrender.com/api/showreels-link";
  const { dataSource } = useGet(url);
  const latestData = dataSource.slice(-1)[0];
  return (
    <Wrapper>
      {" "}
      <div
        style={{ boxShadow: " 0px 8px 8px rgba(0, 0, 0, 0.3)" }}
        className="bg-[url('https://i.ibb.co/mSQdkpJ/showreel.png')] bg-cover bg-center lg:h-screen pt-4 pb-4 "
      >
        <Headline
          content="ShowRee"
          lastWord="l"
          className="headline-showreel"
          style={{ color: "white", marginTop: "35px" }}
        />

        <div className="flex justify-center ">
          <div className="">
            <iframe
              className="showReel-video"
              src={latestData?.link}
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
    height: 70vh;

    @media only screen and (max-width: 769px) {
      width: 500px;
      height: 60vh;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 440px) {
      width: 300px;
      height: 40vh;
      margin-bottom: 20px;
    }
  }
`;
export default ShowReel;
