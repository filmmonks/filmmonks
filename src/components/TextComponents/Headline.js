import React from "react";

const Headline = ({ content, lastWord }) => {
  return (
    <h1 className="headline capitalize lg:mb-8  text-center text-[#0F100B]">
      {content}
      <span className="text-[#F45656]">{lastWord}</span>
    </h1>
  );
};

export default Headline;
