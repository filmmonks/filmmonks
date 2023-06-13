import React from "react";
import Headline from "../../TextComponents/Headline";
import { Bounce } from "react-reveal";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import { PhotoGalaryWrapper } from "../PhotoGalary/PhotoGalary";
const Timeline = () => {
  return (
    <WrapperTimeLine
      id="work"
      className="bg-[#000000] lg:pt-8 lg:pb-16 py-3 md:py-6 relative"
    >
      <Headline
        style={{ color: "white" }}
        content="Work TimeLin"
        lastWord="e"
      />

      <div className="lg:block hidden md:hidden">
        {timelineData.slice(0, 1).map((data) => (
          <Bounce delay={500} left>
            <Link
              to="/article25"
              className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16 border-t-2 hover:no-underline border-b-2 border-red-50 "
            >
              <img className="xl:mr-auto image-width" src={data?.img} alt="" />
              <div className="text-left mt-10">
                <h4 className="margin-left-h4 ">{data?.title}</h4>
                <p className="margin-left-h4">{data?.type}</p>
                <p
                  style={{ textAlign: "justify" }}
                  className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8 margin-left-h4"
                >
                  {data?.logline}
                </p>
              </div>
            </Link>
          </Bounce>
        ))}

        {timelineData.slice(1, 2).map((data) => (
          <Bounce delay={500} right>
            <Link
              to="/balancing-art"
              className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16 hover:no-underline  border-b-2 border-[#FFF8F8] pt-16"
            >
              <div className="text-left mt-10">
                <h4 className="text-3xl ">{data?.title}</h4>
                <p>{data?.type}</p>
                <p
                  style={{ textAlign: "justify" }}
                  className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8 logline"
                >
                  {data?.logline}
                </p>
              </div>
              <img className="xl:ml-auto image-width" src={data?.img} alt="" />
            </Link>
          </Bounce>
        ))}

        {timelineData.slice(2, 3).map((data) => (
          <Bounce delay={500} left>
            {" "}
            <Link
              to="/silver-jublie"
              className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16 border-b-2  hover:no-underline pt-16"
            >
              <img className="image-width " src={data?.img} alt="" />
              <div className="text-left mt-3">
                <h4 className="text-3xl mb-3 margin-left-h4 ">{data?.title}</h4>
                <p className="margin-left-h4">{data?.type}</p>
                <p
                  style={{ textAlign: "justify" }}
                  className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8 margin-left-h4"
                >
                  {data?.logline}
                </p>
              </div>
            </Link>
          </Bounce>
        ))}
        <PhotoGalaryWrapper>
          {" "}
          <button className="mt-24 mb-8 mx-auto desktop-btn">
            <Link to="/work-timeline" className="hover:no-underline ">
              see more
            </Link>
          </button>
        </PhotoGalaryWrapper>
      </div>

      {/* // mobile device */}
      <div className="lg:hidden block md:block mb-10">
        {/* {timelineData.map((data) => (
          <Link
            to="/article25"
            className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-16 md:mx-16 hover:no-underline  border-red-50 "
          >
            <img
              className="xl:ml-auto w-[450px] timeline-image"
              src={data?.img}
              alt=""
            />
            <div className="text-left mt-10">
              <h4>{data?.title}</h4>
              <p>{data?.type}</p>
              <p
                style={{ textAlign: "justify" }}
                className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8"
              >
                {data?.logline}
              </p>
            </div>
          </Link>
        ))} */}
        {timelineData.slice(0, 1).map((data) => (
          <Link
            to="/article25"
            className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-16 md:mx-16 hover:no-underline border-t-2  border-b-2 border-[#FFF8F8] "
          >
            <img
              className="xl:ml-auto w-[450px] timeline-image"
              src={data?.img}
              alt=""
            />
            <div className="text-left mt-10">
              <h4>{data?.title}</h4>
              <p>{data?.type}</p>
              <p
                style={{ textAlign: "justify" }}
                className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8 logline"
              >
                {data?.logline}
              </p>
            </div>
          </Link>
        ))}
        {timelineData.slice(1, 2).map((data) => (
          <Link
            to="/balancing-art"
            className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-16 md:mx-16 hover:no-underline border-b-2 border-[#FFF8F8]  "
          >
            <img
              className="xl:ml-auto w-[450px] timeline-image"
              src={data?.img}
              alt=""
            />
            <div className="text-left mt-10">
              <h4>{data?.title}</h4>
              <p>{data?.type}</p>
              <p
                style={{ textAlign: "justify" }}
                className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-12 logline"
              >
                {data?.logline}
              </p>
            </div>
          </Link>
        ))}
        {timelineData.slice(2, 3).map((data) => (
          <Link
            to="/silver-jublie"
            className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-16 md:mx-16 hover:no-underline  border-red-50 "
          >
            <img
              className="xl:ml-auto w-[450px] timeline-image"
              src={data?.img}
              alt=""
            />
            <div className="text-left mt-10">
              <h4>{data?.title}</h4>
              <p>{data?.type}</p>
              <p
                style={{ textAlign: "justify" }}
                className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8 logline"
              >
                {data?.logline}
              </p>
            </div>
          </Link>
        ))}

        <PhotoGalaryWrapper>
          <button className="mt-6">
            <Link to="/work-timeline" className="hover:no-underline">
              {" "}
              <span>see more</span>
            </Link>
          </button>
        </PhotoGalaryWrapper>
      </div>

      <div
        style={{
          top: "30%",
          right: "1%",
        }}
        className="absolute hidden lg:flex md:flex items-center justify-center"
      >
        <SocialMedia />
      </div>
    </WrapperTimeLine>
  );
};

export default Timeline;

export const WrapperTimeLine = styled.div`
  h4 {
    font-size: 30px;
    color: #fff8f8;
    margin-bottom: 27px;
    @media only screen and (min-width: 1280px) and (max-width: 1400px) {
      font-size: 24px;
    }

    @media only screen and (max-width: 440px) {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
    }
  }
  p {
    margin-bottom: 10px;
    @media only screen and (min-width: 1280px) and (max-width: 1400px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 440px) {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 27px;
    }
  }
  .logline {
    @media only screen and (max-width: 1023px) {
      margin-bottom: 32px;
    }
  }
  .timeline-image {
    @media only screen and (max-width: 440px) {
      margin-top: 0px;
    }
    @media only screen and (max-width: 440px) {
      margin-bottom: 32px;
    }
  }

  .image-width {
    width: 480px;
  }
  .logline {
    width: auto;
    @media only screen and (min-width: 1280px) and (max-width: 1400px) {
      width: 410px;
    }
  }
  .margin-left-h4 {
    @media only screen and (min-width: 1280px) and (max-width: 1400px) {
      margin-left: 40px;
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
    img: "https://i.ibb.co/BqLC7Bk/Rectangle-267-1.png",
  },
  {
    id: 2,
    title: "Balancing Acts",
    type: "Documentary",
    logline:
      "A portrayal of how women from different professions and social classes balance their lives between professions and other activities in our society.",
    img: "https://i.ibb.co/3TbKVnP/IMG-20230414-045927.jpg",
  },
  {
    id: 3,
    title: "Silver Jubilee Events",
    type: "Compiled Project (Promotional video, documentary & event documentation)",
    logline:
      "A compiled project of promotional video, documentary and event documentation video for the Department of Fisheries of Dhaka University on their Silver Jubilee events.",
    img: "https://i.ibb.co/6FFPLx2/IMG-20230414-045241.jpg",
  },
];
