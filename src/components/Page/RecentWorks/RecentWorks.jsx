import React from "react";
import Headline from "../../TextComponents/Headline";
import styled from "styled-components";
import useGet from "../../../hooks/useGet";
import { PhotoGalaryWrapper } from "../PhotoGalary/PhotoGalary";
import { Link } from "react-router-dom";
import bg from "../../../Assets/MonksGalary/bg.jpg";
const RecentWorks = () => {
  const url = "https://filmmonks-server.onrender.com/api/work-timeline";
  const { dataSource } = useGet(url);
  function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      // Swap elements at start and end positions
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      // Move the pointers towards the center
      start++;
      end--;
    }

    return arr;
  }
  const dataSourceArray = [...dataSource];
  const reversedArray = reverseArray(dataSourceArray);
  return (
    <Wrapper className="">
      <div style={{ marginLeft: "auto" }} className="recent-width">
        <div
          className=""
          style={{
            marginTop: "120px",
            paddingTop: "30px",
            marginLeft: "auto",
            textAlign: "right",
            color: "white",
          }}
        >
          {" "}
          <Headline
            style={{ color: "white" }}
            content="Our Recent Work"
            lastWord="s"
          />
        </div>
        <div className="flex flex-wrap justify-center  lg:gap-6 gap-y-12 lg:mb-12 mb-8 lg:pt-8 lg:pb-4">
          {reversedArray.splice(0, 4).map((data) => (
            <>
              {data?.videoLink && (
                <div className="">
                  <iframe
                    className="video-size"
                    src={data.videoLink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
            </>
          ))}
        </div>
        <PhotoGalaryWrapper className="lg:block md:block hidden ">
          {" "}
          <button className="mt-0 mb-16  desktop-btn">
            <Link to="/recent-works" className="hover:no-underline ">
              see more
            </Link>
          </button>
        </PhotoGalaryWrapper>
      </div>

      <PhotoGalaryWrapper className="lg:hidden md:hidden block">
        <button className="mb-6">
          <Link to="/recent-works" className="hover:no-underline">
            {" "}
            <span>see more</span>
          </Link>
        </button>
      </PhotoGalaryWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  .recent-width {
    width: 60%;
    @media screen and (max-width: 1300px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    background-image: none;
    background-color: rgb(15 12 14);
  }
  margin-bottom: 150px;

  .video-size {
    width: 320px;
    height: 215px;
    margin-left: 20px;

    @media only screen and (max-width: 1199px) and (min-width: 1027px) {
      width: 250px;
    }
    @media only screen and (min-width: 765px) and (max-width: 1026px) {
      width: auto;
    }
    @media screen and (max-width: 440px) {
      width: 320px;
      height: 215px;
    }
    @media screen and (max-width: 376px) {
      width: 280px;
      height: 215px;
    }

    @media screen and (max-width: 440px) {
      width: 320px;
      height: 215px;
    }
    @media screen and (max-width: 376px) {
      width: 280px;
      height: 215px;
    }
    @media screen and (max-width: 321px) {
      width: 230px;
      height: 215px;
    }
  }
`;
export default RecentWorks;

const itemData = [
  {
    videoLink: "https://www.youtube.com/embed/gx2G1mfMpVM",
    title: "Breakfast",
  },
  {
    videoLink: "https://www.youtube.com/embed/uN1C1d8AlyQ",
    title: "Burger",
  },
  {
    videoLink: "https://www.youtube.com/embed/uqep8ajOiMU",
    title: "Camera",
  },
];
