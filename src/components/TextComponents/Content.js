import React from "react";
import { Fade } from "react-reveal";
const Content = ({ content }) => {
  return (
    <Fade left>
      <p className="text-[#B19B9B] text-center lg:w-[715px] md:w-[515px] w-[380px] xs:w-[260px] mx-auto mb-8">
        {content}
      </p>
    </Fade>
  );
};

export default Content;
