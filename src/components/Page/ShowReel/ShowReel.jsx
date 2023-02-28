import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const ShowReel = () => {
  return (
    <Stack sx={{background:"white"}}>
      <Typography variant="h1">showreel</Typography>
      <img
        style={{ width: "100%", height: "100vh" }}
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
        alt=""
      />
    </Stack>
  );
};

export default ShowReel;
