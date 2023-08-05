import React from "react";
import Headline from "../../TextComponents/Headline";

import img1 from "../../../Assets/MonksGalary/galary1 (2).png";
import img2 from "../../../Assets/MonksGalary/galary2 (1).png";
import img3 from "../../../Assets/MonksGalary/galary3 (1).png";
import img4 from "../../../Assets/MonksGalary/galary4 (1).png";
import img5 from "../../../Assets/MonksGalary/galary5 (1).png";
import img6 from "../../../Assets/MonksGalary/galary2 (1).png";
import "./PhotoGalary.css";
import styled from "styled-components";
import Content from "../../TextComponents/Content";
import { Link } from "react-router-dom";
import useGet from "../../../hooks/useGet";
const PhotoGalary = () => {
  const url = "https://filmmonks-server.onrender.com/api/monks-galary";
  const { dataSource } = useGet(url);

  return (
    <div id="monks-gallery">
      <PhotoGalaryWrapper>
        <div className="lg:pt-8 mb-12">
          <Headline content=" Monks Galler" lastWord="y" />
          <div className="hidden lg:block md:hidden">
            {" "}
            <Content content="We capture our moments and showcase them here." />
            <div className="">
              <div className="xl:flex xl:justify-between lg:grid grid-cols-3 xl:gap-10 lg:gap-5 xl:mx-28 lg:mx-20 ">
                {dataSource.slice(0, 6).map((data) => (
                  <div className="xl:w-[320px] lg:w-auto mx-auto">
                    <img
                      src={
                        `https://filmmonks-server.onrender.com/monks/` +
                        data?.image
                      }
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <button className="mt-16 mx-auto desktop-btn">
                <Link to="/monks-galary" className="hover:no-underline">
                  see more
                </Link>
              </button>
            </div>
          </div>
          {/* // mobile device */}
          <p
            className="-mt-4 mb-2 text-[#B19B9B] lg:hidden md:hidden block"
            style={{ fontSize: "12px" }}
          >
            We capture our moments and showcase them here.
          </p>
          <div className="lg:hidden block mx-auto mb-6">
            {dataSource.slice(0, 1).map((data) => (
              <img
                className="mt-6 w-[320px] mx-auto"
                src={
                  `https://filmmonks-server.onrender.com/monks/` + data?.image
                }
                alt=""
              />
            ))}

            <button className="mt-6">
              <Link to="/monks-galary" className="hover:no-underline">
                {" "}
                <span>see more</span>
              </Link>
            </button>
          </div>
        </div>
      </PhotoGalaryWrapper>
    </div>
  );
};
export const galleryData = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
];
export const PhotoGalaryWrapper = styled.div`
  .desktop-btn {
    height: 59px;
    width: 157px;
    left: 891px;
    top: 7996px;
    border-radius: 2px;
    padding: 16px 32px 16px 32px;
  }
  .desktop-btn > a {
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.005em;
    text-align: left;
    color: #ffffff;
  }
  button {
    width: 88px;
    height: 43px;
    left: 150px;
    top: 4643px;

    background: #f45656;
    border-radius: 2px;
  }
  button > a > span {
    width: 56px;
    height: 27px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 27px;
    /* identical to box height, or 225% */

    letter-spacing: 0.005em;

    color: #ffffff;
  }
`;
export default PhotoGalary;
