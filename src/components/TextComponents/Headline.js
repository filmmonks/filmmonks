import React from "react";
import { Zoom } from "react-reveal";

const Headline = ({ content, lastWord, style }) => {
  return (
    <Zoom>
      <h1
        style={style}
        className="headline capitalize lg:mb-8  text-center text-[#0F100B]"
      >
        {content}
        <span className="text-[#F45656]">{lastWord}</span>
      </h1>
    </Zoom>
  );
};

export default Headline;
