import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

const Team = () => {
  return (
    <div className="" style={{ height: "100vh" }}>
      <img src="https://i.ibb.co/d4ndNdd/Rectangle-79.png" alt="" />
      <div
        style={{ marginTop: "-172px" }}
        className="grid grid-cols-3 mx-44 gap-20"
      >
        <div >
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i.ibb.co/Lxbj87n/Ellipse-7.png"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://i.ibb.co/Lxbj87n/Ellipse-7.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://i.ibb.co/Lxbj87n/Ellipse-7.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Team;
