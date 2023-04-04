import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Service = () => {
  //
  return (
    <div className="container">
      <h1 className="headline">service</h1>
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
