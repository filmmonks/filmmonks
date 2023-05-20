import React from "react";
import "./About.css";
import Headline from "../../TextComponents/Headline";
import { Fade } from "react-reveal";
import styled from "styled-components";
import img1 from "../../../Assets/About/img1.png";
import img2 from "../../../Assets/About/img2.png";
import img3 from "../../../Assets/About/img3.png";
import img4 from "../../../Assets/About/img4.png";
import img5 from "../../../Assets/About/img5.png";
import img6 from "../../../Assets/About/img6.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="bg-[#0F100B] grid lg:grid-cols-2  md:grid-cols-1 grid-cols-1 lg:gap-4 md:gap-4 "
      >
        <Wrapper>
          <div className="lg:mx-24 mx-8 md:mx-16 my-8 text-[#FFF8F8]">
            <Headline
              style={{ color: "white" }}
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


        <div className="lg:block hidden md:block">
          {" "}
          <Fade right>
            <div
              style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
              className=" lg:mx-24 mx-8 md:mx-16 my-8 grid grid-cols-2"
            >
              {itemData.map((item) => (
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
    rows: 1,
    cols: 2,
    width: "263px",
    height: "173px",
    marginLeft: "50%",
    marginTop: "10px",
  },
  {
    img: img2,
    title: "2",
    rows: 1,
    cols: 1,
    width: "263px",
    height: "229px",
    marginTop: "70%",
    // marginLeft: "-6px",
  },
  {
    img: img5,
    title: "3",
    rows: 1,
    cols: 1,
    width: "263px",
    height: "229px",
    marginTop: "-87%",
    // marginLeft: "0px",
    zIndex: 4,
  },

  {
    img: img4,
    title: "4",
    rows: 2,
    cols: 1.5,
    width: "263px",
    height: "173px",
    // marginTop: "1px",
    marginLeft: "-50%",
    zIndex: 3,
  },
];


const itemData1 = [
  {
    img: img1,
    title: "1",
    rows: 1,
    cols: 2,
    width: "171px",
    height: "171px",

    marginTop: "10px",
  },
  {
    img: img2,
    title: "2",
    rows: 1,
    cols: 1,
    width: "171px",
    height: "171px",
    marginTop: "43%",
    // marginLeft: "-6px",
  },
  {
    img: img5,
    title: "3",
    rows: 1,
    cols: 1,
    width: "171px",
    height: "171px",
    marginTop: "-36%",
    // marginLeft: "0px",
    zIndex: 4,
  },

  {
    img: img4,
    title: "4",
    rows: 2,
    cols: 1.5,
    width: "171px",
    height: "171px",
    // marginTop: "1px",

    zIndex: 3,
  },
];
