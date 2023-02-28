import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <Stack sx={{color:"white", width:"50%"}}>
        <Typography variant="h1" >about</Typography>
        <Typography variant="p" >
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
      <img
        style={{ width: "50%", height: "100vh" }}
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
        alt=""
      />
    </div>
  );
};

export default About;
