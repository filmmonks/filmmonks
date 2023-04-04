import React from "react";

const Headline = ({ content, lastWord }) => {
  return (
    <h1 className="headline capitalize lg:mb-12 text-center">
      {content}
      <span className="text-[#F45656]">{lastWord}</span>
    </h1>
  );
};

export default Headline;
