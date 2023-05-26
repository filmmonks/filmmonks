import React from "react";
import { Zoom } from "react-reveal";
import styled from "styled-components";

const Headline = ({ content, lastWord, style }) => {
  return (
    <HeadlineWrapper>
      <Zoom>
        <h1
          style={style}
          className="headline capitalize lg:mb-8   text-center text-[#0F100B]"
        >
          {content}
          <span className="text-[#F45656]">{lastWord}</span>
        </h1>
      </Zoom>
    </HeadlineWrapper>
  );
};

export const HeadlineWrapper = styled.div`
  .headline {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    @media only screen and (max-width: 440px) {
      font-size: 18px;
    }
  }
  h1 {
    margin-top: 80px;
    margin-bottom: 50px;
    @media only screen and (max-width: 440px) {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
`;
export default Headline;
