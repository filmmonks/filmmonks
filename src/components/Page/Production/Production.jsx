import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

const Production = () => {
  return (
    <div>
      <h1>Complete Film Production</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit sapien
        ornare morbin dd we can understand the fact po of film{" "}
      </p>
      <div style={{ height: "313px" }} className="bg-[#F45656]"></div>
      <div
        style={{ marginTop: "-240px" }}
        className="grid grid-cols-3 mx-44 gap-20"
      >
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/FsQ7cvt/Rectangle-194.png"
              alt="green iguana"
            />
          </CardActionArea>
          <h5>Pre Production </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/FsQ7cvt/Rectangle-194.png"
              alt="green iguana"
            />
          </CardActionArea>
          <h5>Pre Production </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/FsQ7cvt/Rectangle-194.png"
              alt="green iguana"
            />
          </CardActionArea>
          <h5>Pre Production </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Production;
