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

const Service = () => {
  //
  return (
    <div className="container">
       <Headline content="service" lastWord="s" />
      <p className="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero alias non
        adipisci odio nulla iure, sed consectetur explicabo similique facere.
      </p>
      <div className="grid grid-cols-3">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/fCj4XBf/Rectangle-30.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/fCj4XBf/Rectangle-30.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/fCj4XBf/Rectangle-30.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/fCj4XBf/Rectangle-30.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/fCj4XBf/Rectangle-30.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/fCj4XBf/Rectangle-30.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Service;
