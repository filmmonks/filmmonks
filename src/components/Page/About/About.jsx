import React from "react";
import "./About.css";
import Headline from "../../TextComponents/Headline";
import { Fade } from "react-reveal";
import styled from "styled-components";
import img1 from "../../../Assets/About/about1.png";
import img2 from "../../../Assets/About/about2.jpg";
import img3 from "../../../Assets/About/about3.jpg";
import img4 from "../../../Assets/About/about4.jpg";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="bg-[#0F100B] lg:flex block justify-between items-center lg:gap-4 md:gap-4 lg:h-screen py-4 lg:py-0 "
      >
        <Wrapper className="lg:w-[50%] w-[100%]">
          <div className="lg:mx-24 mx-8 md:mx-16 my-8 text-[#FFF8F8] ">
            <Headline
              style={{ color: "white", textAlign: "left" }}
              content="about u"
              lastWord="s"
            />

            <Fade left>
              <p className="lg:content-2 md:content-md content-sm xs:content-xs pb-6">
                Film Monks is a production house that specializes in the
                development and production of a wide range of visual mediums,
                including fiction and non-fiction cinema online video content,
                television commercials event videography and photography, music
                videos, and promotional materials
              </p>
              <p className="lg:content-2 md:content-md content-sm xs:content-xs">
                we place an emphasis on contemporary storylines and story
                telling with a focus on aesthetics. We strive to create
                cinematic experiences that entertain and provoke thought while
                keeping in mind the emotions, arguments, traditions nature, and
                crises that are university accessible to our audiences. We aim
                to produce visually stunning and impactful content for our
                clients.
              </p>
            </Fade>
          </div>
        </Wrapper>

        <div className="lg:block hidden md:block lg:w-[50%] mt-44">
          {" "}
          <Fade right>
            <div
              style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
              className=" lg:mx-24 mx-8 md:mx-16 my-8 grid grid-cols-2 gap-x-10 gap-y-5"
            >
              {itemData.map((item) => (
                <img
                  style={{
                    width: `${item.width}`,
                    marginTop: `${item.marginTop}`,
                  }}
                  key={item.title}
                  src={item.img}
                  alt=""
                />
              ))}
            </div>
          </Fade>
        </div>
        {/* mobile device */}
        <div className="lg:hidden block md:hidden">
          {" "}
          <Fade right>
            <div
              style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
              className=" lg:mx-24 mx-8 md:mx-16 my-8 grid grid-cols-2"
            >
              {itemData1.map((item) => (
                <img
                  style={{
                    width: `${item.width}`,
                    height: `${item.height}`,
                    marginLeft: `${item.marginLeft}`,
                    marginTop: `${item.marginTop}`,
                    zIndex: `${item.zIndex}`,
                  }}
                  key={item.title}
                  src={item.img}
                  alt=""
                />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

const Wrapper = styled.div``;

export default About;

const itemData = [
  {
    img: img1,
    title: "1",
    width: "235px",
  },
  {
    img: img2,
    title: "2",
    width: "300px",
  },
  {
    img: img3,
    title: "1",
    width: "300px",
  },
  {
    img: img4,
    title: "2",
    width: "235px",
    marginTop: "25px",
  },
];

const itemData1 = [
  {
    img: img1,
    title: "1",
    width: "116px",
  },
  {
    img: img2,
    title: "2",
    width: "130px",
  },
  {
    img: img3,
    title: "1",
    width: "130px",
  },
  {
    img: img4,
    title: "2",
    width: "116px",
    marginTop: "20px",
    marginLeft: "15px",
  },
];
