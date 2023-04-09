import React from "react";
import "./About.css";
import Headline from "../../TextComponents/Headline";
import Pulse from "react-reveal/Pulse";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div className="bg-[#0F100B] grid grid-cols-2 gap-16">
      <div className="container text-[#FFF8F8]">
        <Headline style={{ color: "white" }} content="about u" lastWord="s" />

        <Fade left>
          <p className="content-2">
            FILM MONKS is a production house that specializes in the development
            and production of a wide range of visual mediums, including fiction
            and non-fiction cinema,onlinevideo content,television commercials,
            event videographyand photography, music videos, and promotional
            materials.
            <p className="lg:my-8">
              We place an emphasis on contemporary storylines and storytelling
              with a focus on aesthetics. We strive to create cinematic
              experiences that entertain and provoke thought, while keeping in
              mind the emotions, arguments, traditions, nature, and crises that
              are universally accessible to our audiences.
            </p>
            We aim to produce visually stunning and impactful content for our
            clients
          </p>
        </Fade>
        <Pulse>
          <img
            style={{
              width: "400px",
              marginLeft: " 210px",
              marginTop: "-164px",
              transform: "rotate(94deg)",
            }}
            src="https://i.ibb.co/brJbQz8/world.png"
            alt=""
          />
        </Pulse>
      </div>

      <Fade right>
        <div className="grid lg:grid-cols-2 w-[700px]">
          {itemData.map((item) => (
            <img
              className={`row-span-${item.rows} col-span-${item.cols} w-${[
                item.width,
              ]}`}
              key={item.title}
              src={item.img}
              style={{
                marginTop:
                  item.title === "4"
                    ? "-60px"
                    : item.title === "5"
                    ? "-19px"
                    : "0px",
              }}
              alt=""
            />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default About;
const itemData = [
  {
    img: "https://i.ibb.co/r2B2Pfr/Rectangle-6.png",
    title: "1",
    rows: 0,
    cols: 1,
    width: "371px",
  },
  {
    img: "https://i.ibb.co/tCVV5bn/Rectangle-7.png",
    title: "2",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://i.ibb.co/DWbJ7hg/Rectangle-9.png",
    title: "3",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://i.ibb.co/6FP9x1Z/Rectangle-8.png",
    title: "4",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://i.ibb.co/Mh5bkbT/Rectangle-11.png",
    title: "5",
    rows: 2,
    cols: 1.5,
  },
  {
    img: "https://i.ibb.co/LnGYs9f/Rectangle-10.png",
    title: "6",
    author: "@arwinneil",
    rows: 2,
    cols: 1,
  },
];
