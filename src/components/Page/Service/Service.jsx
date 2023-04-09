import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";
import { BiVideoRecording } from "react-icons/bi";
const Service = () => {
  //
  return (
    <div className="container">
      <Headline content="service" lastWord="s" />
      <Content
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero alias non
        adipisci odio nulla iure, sed consectetur explicabo similique facere."
      ></Content>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-7 gap-y-6 ">
        {servicesData.map((data) => (
          <div key={data._id} className="relative">
            <img
              className=""
              style={{ filter: "brightness(30%)" }}
              src={data.image}
              alt=""
            />
            <p className="text-5xl">{data.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

const servicesData = [
  {
    _id: 1,
    image: "https://i.ibb.co/SBHv8tK/Rectangle-25.png",
    title: "video",
    icon: <BiVideoRecording />,
  },
  {
    _id: 1,
    image: "https://i.ibb.co/SBHv8tK/Rectangle-25.png",
    title: "video",
    icon: <BiVideoRecording />,
  },
  {
    _id: 1,
    image: "https://i.ibb.co/SBHv8tK/Rectangle-25.png",
    title: "video",
    icon: <BiVideoRecording />,
  },
  {
    _id: 1,
    image: "https://i.ibb.co/SBHv8tK/Rectangle-25.png",
    title: "video",
    icon: <BiVideoRecording />,
  },
  {
    _id: 1,
    image: "https://i.ibb.co/SBHv8tK/Rectangle-25.png",
    title: "video",
    icon: <BiVideoRecording />,
  },
  {
    _id: 1,
    image: "https://i.ibb.co/SBHv8tK/Rectangle-25.png",
    title: "video",
    icon: <BiVideoRecording />,
  },
];
