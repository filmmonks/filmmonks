import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import "./About.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
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
    <div className="bg-[#0F100B] grid grid-cols-2 gap-16">
      <div className="container">
        <h1>about</h1>
        <h5>
          FILM MONKS is a production house that specializes in the development
          and production of a wide range of visual mediums, including fiction
          and non-fiction cinema,onlinevideo content,television commercials,
          event videographyand photography, music videos, and promotional
          materials.
          <br />
          We place an emphasis on contemporary storylines and storytelling with
          a focus on aesthetics. We strive to create cinematic experiences that
          entertain and provoke thought, while keeping in mind the emotions,
          arguments, traditions, nature, and crises that are universally
          accessible to our audiences.
          <br />
          We aim to produce visually stunning and impactful content for our
          clients
        </h5>

        <img
          style={{
            width: "400px",
            marginLeft: "auto",
            marginTop: "-164px",
            transform: "rotate(120deg)",
          }}
          src="https://i.ibb.co/brJbQz8/world.png"
          alt=""
        />
      </div>
      <div>
        {" "}
        <ImageList
          sx={{ width: "70%", height: "70vh", rowGap: "0" }}
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
