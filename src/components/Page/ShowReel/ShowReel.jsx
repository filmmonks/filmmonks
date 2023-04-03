import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const ShowReel = () => {
  return (
    <Stack sx={{ background: "white" }}>
      <Typography
        variant="h3"
        style={{
          position: "absolute",
          marginLeft: "42%",
          zIndex: "20",
        }}
      >
        showreel
      </Typography>
      <img
        style={{ width: "100%", height: "100vh", position: "relative" }}
        src="https://i.ibb.co/VCHrmF9/showreel-back.png"
        alt=""
      />
      <img
        style={{
          width: "1000px",
          height: "450px",
          position: "absolute",
          marginTop: "100px",
          marginLeft: "17%",
        }}
        src="https://i.ibb.co/MfSK7fD/showreel.png"
        alt=""
      />{" "}
    </Stack>
  );
};

export default ShowReel;
