import React from "react";
import "./About.css";
import Headline from "../../TextComponents/Headline";
import { Fade } from "react-reveal";
import styled from "styled-components";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia"; // Import your SocialMedia component
import useGet from "../../../hooks/useGet";

const About = () => {
  const url = "https://filmmonks-server.onrender.com/api/about";
  const { dataSource } = useGet(url);

  const splitTextAtFirstFullStop = (text) => {
    const firstFullStopIndex = text?.indexOf(".");
    if (firstFullStopIndex === -1) {
      return [text];
    }
    return [
      text?.slice(0, firstFullStopIndex + 1),
      text?.slice(firstFullStopIndex + 2),
    ];
  };

  const chunks = splitTextAtFirstFullStop(dataSource[0]?.description);

  return (
    <>
      <div
        id="about"
        className="bg-[#0F100B] xl:flex lg:block md:block block justify-between items-center lg:gap-4 md:gap-4 xl:h-screen py-4 xl:py-0 "
      >
        <Wrapper className="xl:w-[70%] lg:w-[100%] md:w-[100%] w-[100%]">
          <div className="xl:mx-24 lg:mx-16 mx-8 md:mx-16 my-8 text-[#FFF8F8] ">
            <Headline
              style={{ color: "white", textAlign: "left" }}
              content="about u"
              lastWord="s"
            />

            <Fade left>
              {chunks?.map((data) => (
                <p className="lg:content-2 md:content-md content-sm xs:content-xs pb-6">
                  {data}
                </p>
              ))}
            </Fade>
          </div>
        </Wrapper>

        <div className="xl:block lg:block hidden lg:w-[50%] mt-44 mx-auto">
          <Fade right>
            <div
              style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
              className="lg:mx-24 mx-8 md:mx-16 my-8 grid md:grid-cols-2 grid-cols-2  gap-x-10 gap-y-5"
            >
              {dataSource[0]?.imageArr?.map((item) => (
                <img
                  style={{
                    width: `${item.width}`,
                    marginTop: `${item.marginTop}`,
                  }}
                  key={item?.title}
                  src={
                    `https://filmmonks-server.onrender.com/about/` +
                    item?.pathname
                  }
                  alt=""
                />
              ))}
            </div>
          </Fade>
        </div>
        {/* mobile device */}
        <div className="lg:hidden block md:block">
          <Fade right>
            <div
              style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
              className="lg:mx-24 mx-8 md:mx-16 my-8 grid grid-cols-2 gap-7"
            >
              {dataSource[0]?.imageArr?.map((item) => (
                <img
                  key={item?.title}
                  src={
                    `https://filmmonks-server.onrender.com/about/` +
                    item?.pathname
                  }
                  alt=""
                />
              ))}
            </div>
          </Fade>
        </div>

        {/* Add SocialMedia component */}
        <div
          style={{ width: "5%" }}
          className="hidden xl:flex lg:hidden md:hidden items-center justify-center pr-5"
        >
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

const Wrapper = styled.div``;

export default About;
