import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import Headline from "../../TextComponents/Headline";

const Team = () => {
  return (
    <div
      className="bg-[url('https://i.ibb.co/d4ndNdd/Rectangle-79.png')] bg-cover bg-center h-[50vh]
    pt-12"
    >
      <Headline content="Meet The Tea" lastWord="m" />
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel expedita
        quo molestias quod amet consequatur molestiae veniam suscipit,
        reprehenderit assumenda!
      </p>
      {/* <div
        style={{ marginTop: "-172px" }}
        className="grid grid-cols-3 mx-44 gap-20"
      >
        <div>
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
      </div> */}
    </div>
  );
};

export default Team;
