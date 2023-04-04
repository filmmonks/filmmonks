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
      <div className="container text-[#FFF8F8]">
        <h1 className="headline capitalize lg:mb-12">
          about u<span className="text-[#F45656]">s</span>
        </h1>
        <p className="content-2">
          FILM MONKS is a production house that specializes in the development
          and production of a wide range of visual mediums, including fiction
          and non-fiction cinema,onlinevideo content,television commercials,
          event videographyand photography, music videos, and promotional
          materials.
          <p className="lg:my-8">
            We place an emphasis on contemporary storylines and storytelling
            with a focus on aesthetics. We strive to create cinematic
            experiences that entertain and provoke thought, while keeping in
            mind the emotions, arguments, traditions, nature, and crises that
            are universally accessible to our audiences.
          </p>
          We aim to produce visually stunning and impactful content for our
          clients
        </p>

        <img
          style={{
            width: "400px",
            marginLeft: " 210px",
            marginTop: "-164px",
            transform: "rotate(94deg)",
        
          }}
          src="https://i.ibb.co/brJbQz8/world.png"
          alt=""
        />
      </div>
      <div className="mt-32 mb-20">
        {" "}
        <ImageList
          sx={{ width: "70%", height: "100vh", rowGap: "0" }}
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
                style={
                  item.title === "Coffee"
                    ? { marginTop: "-60px" }
                    : { marginTop: "0px" }
                }
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
    img: "https://i.ibb.co/r2B2Pfr/Rectangle-6.png",
    title: "Breakfast",
    rows: 2,
    cols: 3,
  },
  {
    img: "https://i.ibb.co/tCVV5bn/Rectangle-7.png",
    title: "Burger",
    rows: 1.5,
    cols: 1,
  },
  {
    img: "https://i.ibb.co/DWbJ7hg/Rectangle-9.png",
    title: "Camera",
    rows: 1.25,
    cols: 3,
  },
  {
    img: "https://i.ibb.co/6FP9x1Z/Rectangle-8.png",
    title: "Coffee",
    rows: 1.75,
    cols: 1,
  },
  {
    img: "https://i.ibb.co/Mh5bkbT/Rectangle-11.png",
    title: "Hats",
    rows: 1,
    cols: 2,
  },
  {
    img: "https://i.ibb.co/LnGYs9f/Rectangle-10.png",
    title: "Honey",
    author: "@arwinneil",
    rows: 1,
    cols: 2,
  },
];
