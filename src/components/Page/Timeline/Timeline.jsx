import React from "react";
import Headline from "../../TextComponents/Headline";
import { Bounce } from "react-reveal";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Timeline = () => {
  return (
    <WrapperTimeLine className="bg-[#000000] lg:pt-8 lg:pb-36 py-3 md:py-6">
      <Headline
        style={{ color: "white" }}
        content="Work TimeLin"
        lastWord="e"
      />

      <div className="lg:block hidden md:block">
        <Bounce left>
          <Link
            to="/article"
            className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16  border-b-2 border-red-50 pt-16"
          >
            <img
              className="xl:mr-auto w-[450px]"
              src="https://i.ibb.co/XWRbWXY/jpg-20230414-045047-0000.jpg"
              alt=""
            />
            <div className="text-left mt-10">
              <h4 className="text-3xl">article</h4>
              <p>description</p>
              <p
                style={{ textAlign: "justify" }}
                className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8"
              >
                A small-town struggling woman searches for her missing brother
                who guided and implemented confidence within herself to be
                independent. While revolving around her she learns about the
                complex socio-political instances and the substantial
                uncertainty in it.
              </p>
            </div>
          </Link>
        </Bounce>
        <Bounce right>
          <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16  border-b-2 border-red-50 pt-16">
            <div className="text-left mt-10">
              <h4 className="text-3xl">article</h4>
              <p>description</p>
              <p
                style={{ textAlign: "justify" }}
                className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8"
              >
                A small-town struggling woman searches for her missing brother
                who guided and implemented confidence within herself to be
                independent. While revolving around her she learns about the
                complex socio-political instances and the substantial
                uncertainty in it.
              </p>
            </div>
            <img
              className="xl:ml-auto w-[450px]"
              src="https://i.ibb.co/6FFPLx2/IMG-20230414-045241.jpg"
              alt=""
            />
          </div>
        </Bounce>
        <Bounce left>
          {" "}
          <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16  border-b-2 border-red-50 pt-16">
            <img
              className="w-[450px]"
              src="https://i.ibb.co/3TbKVnP/IMG-20230414-045927.jpg"
              alt=""
            />
            <div className="text-left mt-10">
              <h4 className="text-3xl">article</h4>
              <p>description</p>
              <p
                style={{ textAlign: "justify" }}
                className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8"
              >
                A small-town struggling woman searches for her missing brother
                who guided and implemented confidence within herself to be
                independent. While revolving around her she learns about the
                complex socio-political instances and the substantial
                uncertainty in it.
              </p>
            </div>
          </div>
        </Bounce>
      </div>
      <div className="lg:hidden block md:hidden mb-10">
        {timelineData.map((data) => (
          <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-16 md:mx-16   border-red-50 ">
            <img
              className="xl:ml-auto w-[450px] timeline-image"
              src="https://i.ibb.co/6FFPLx2/IMG-20230414-045241.jpg"
              alt=""
            />
            <div className="text-left mt-10">
              <h4 className="text-3xl">article</h4>
              <p>description</p>
              <p
                style={{ textAlign: "justify" }}
                className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8"
              >
                A small-town struggling woman searches for her missing brother
                who guided and implemented confidence within herself to be
                independent. While revolving around her she learns about the
                complex socio-political instances and the substantial
                uncertainty in it.
              </p>
            </div>
          </div>
        ))}
      </div>
    </WrapperTimeLine>
  );
};

export default Timeline;

export const WrapperTimeLine = styled.div`
  h4 {
    font-size: 30px;
    @media only screen and (max-width: 440px) {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
  }
  p {
    @media only screen and (max-width: 440px) {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 27px;
      /* identical to box height, or 225% */
    }
  }
  .timeline-image {
    @media only screen and (max-width: 440px) {
      margin-top: 25px;
    }
  }
`;
const timelineData = [
  {
    id: 1,
    title: "Article 25",
    type: "Short Film",
    logline:
      "A small-town struggling woman searches for her missing brother who guided and implemented confidence within herself to be independent. While revolving around her she learns about the complex socio-political instances and the substantial uncertainty in it.",
  },
  {
    id: 2,
    title: "Article 25",
    type: "Short Film",
    logline:
      "A small-town struggling woman searches for her missing brother who guided and implemented confidence within herself to be independent. While revolving around her she learns about the complex socio-political instances and the substantial uncertainty in it.",
  },
  {
    id: 2,
    title: "Article 25",
    type: "Short Film",
    logline:
      "A small-town struggling woman searches for her missing brother who guided and implemented confidence within herself to be independent. While revolving around her she learns about the complex socio-political instances and the substantial uncertainty in it.",
  },
];
