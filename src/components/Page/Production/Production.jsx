import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import Headline from "../../TextComponents/Headline";

const Production = () => {
  return (
    <div>
      <Headline content="Complete Film Productio" lastWord="n" />
      <p>
        Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit sapien
        ornare morbin dd we can understand the fact po of film{" "}
      </p>
      <div style={{ height: "313px" }} className="bg-[#F45656]"></div>
      <div
        style={{ marginTop: "-240px", marginBottom: "250px", }}
        className="grid grid-cols-3 mx-44 gap-20 my-24"
      >
        <div className="card">
          <img src="https://i.ibb.co/FsQ7cvt/Rectangle-194.png" alt="" />
          <p className="text-center my-4">Pre Production </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/FsQ7cvt/Rectangle-194.png" alt="" />
          <p className="text-center my-4">Pre Production </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/FsQ7cvt/Rectangle-194.png" alt="" />
          <p className="text-center my-4">Pre Production </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Production;
