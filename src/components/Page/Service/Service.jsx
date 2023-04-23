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
import img1 from "../../../Assets/services/1. Cinema.jpg";
import img2 from "../../../Assets/services/2. Documentary.jpg";
import img3 from "../../../Assets/services/3. Music Video.jpg";
import img4 from "../../../Assets/services/4. TVC.jpg";
import img5 from "../../../Assets/services/5. OVC.jpg";
import img6 from "../../../Assets/services/6. Event Documentation.jpg";
import img7 from "../../../Assets/services/7. Promotional Content.jpg";
import img8 from "../../../Assets/services/8. Collaboration.jpg";
import { Slide } from "react-reveal";

const Service = () => {
  return (
    <div id="service" className="lg:mx-24 mx-8 md:mx-16 my-8">
      <Headline content="service" lastWord="s" />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-7">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  mx-auto  gap-x-7 gap-y-6 ">
          <Slide left>
            {servicesData.slice(0, 4).map((data) => (
              <div key={data._id} className="">
                <img
                  className=""
                  style={{
                    filter: "brightness(14%)",
                    width: "409px",
                    height: "231px",
                  }}
                  src={data.image}
                  alt=""
                />
                {/* <small className=""> play</small> */}
              </div>
            ))}
          </Slide>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  mx-auto  gap-x-7 gap-y-6 ">
          <Slide right>
            {servicesData.slice(4, 8).map((data) => (
              <div>
                {" "}
                <div key={data._id}>
                  <img
                    style={{
                      filter: "brightness(14%)",
                      width: "409px",
                      height: "231px",
                      position: "relative",
                    }}
                    src={data.image}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Service;

const servicesData = [
  {
    _id: 1,
    image: img1,
    title: "CINEMA",
    icon: <BiVideoRecording />,
  },
  {
    _id: 2,
    image: img2,
    title: "DOCUMENTARY",
    icon: <BiVideoRecording />,
  },
  {
    _id: 3,
    image: img3,
    title: "MUSIC VIDEO",
    icon: <BiVideoRecording />,
  },
  {
    _id: 4,
    image: img4,
    title: "TVC",
    icon: <BiVideoRecording />,
  },
  {
    _id: 5,
    image: img5,
    title: "OVC",
    icon: <BiVideoRecording />,
  },
  {
    _id: 6,
    image: img6,
    title: "EVENTS DOCUMENTATION",
    icon: <BiVideoRecording />,
  },
  {
    _id: 7,
    image: img7,
    title: "PROMOTIONAL CONTENT",
    icon: <BiVideoRecording />,
  },
  {
    _id: 8,
    image: img8,
    title: "COLLABORATION",
    icon: <BiVideoRecording />,
  },
];
