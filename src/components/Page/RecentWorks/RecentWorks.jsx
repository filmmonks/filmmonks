import React from "react";
import Headline from "../../TextComponents/Headline";
import styled from "styled-components";
import useGet from "../../../hooks/useGet";

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
      <Headline content="Our Recent Work" lastWord="s" />
      <div className="flex flex-wrap justify-between lg:mx-24 md:mx-16 mx-12 lg:gap-6 gap-y-12 lg:mb-24 mb-16">
        {reversedArray.map((data) => (
          <>
            {data?.videoLink && (
              <div className="mx-auto">
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .video-size {
    // width: 320px;
    height: 215px;
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
