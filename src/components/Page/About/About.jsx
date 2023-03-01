import { ImageList, ImageListItem, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./About.css";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const About = () => {
  return (
    <div className="about container">
      <Stack sx={{ color: "white", width: "50%" }}>
        <Typography variant="h1">about</Typography>
        <Typography variant="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis fugiat
          dolorum cumque earum inventore pariatur ipsum. Dolor eum at nobis
          beatae alias delectus dolore vero, quaerat quis magnam eligendi neque
          repellendus illum quidem eos ullam molestias autem deserunt nam iste?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cumque
          at laboriosam repellat aliquid, error nemo harum deserunt non adipisci
          dolor maiores dicta ratione quibusdam excepturi sunt unde. Fuga facere
          sed perspiciatis officiis id harum! Maxime ratione itaque iure alias.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          soluta ab saepe ipsam quas ducimus minima necessitatibus rem qui
          laborum libero eligendi cum odit rerum officia quibusdam nemo iusto.
          Atque totam consectetur in ad corrupti blanditiis non odit dolor ut?
        </Typography>
      </Stack>
      <ImageList
      
        sx={{ width:"50%", height: "87vh", rowGap:"0" }}
        variant="quilted" 
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default About;
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    rows: 1,
    cols: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
];
