import React from "react";
import { Fade } from "react-reveal";
const Content = ({ content }) => {
  return (
    <Fade left>
      <p className="text-[#B19B9B] text-center w-[715px] mx-auto mb-8">
        {content}
      </p>
    </Fade>
  );
};

export default Content;
