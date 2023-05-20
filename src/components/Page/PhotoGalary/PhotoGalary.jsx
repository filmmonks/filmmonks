import React from "react";
import Headline from "../../TextComponents/Headline";

import img1 from "../../../Assets/MonksGalary/img1.png";
import img2 from "../../../Assets/MonksGalary/img2.png";
import img3 from "../../../Assets/MonksGalary/img3.png";
import img4 from "../../../Assets/MonksGalary/img4.png";
import img5 from "../../../Assets/MonksGalary/img5.png";
import "./PhotoGalary.css";
import styled from "styled-components";
const PhotoGalary = () => {
  return (
    <PhotoGalaryWrapper>
      <div id="monks-gallery" className="my-12 ">
        <Headline content=" Monks Galler" lastWord="y" />
        <div className="hidden lg:block ">
          {" "}
          <div class="grid grid-cols-2 gap-4">
            <div class=""></div>
            <div class="lg:w-[300px] -ml-[150px]">
              Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
              sapien ornare morbin dd we can understand the fact po of film{" "}
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:mx-56 ">
            <img className="photo-gallery" src={img1} alt="" />
            <img className="mt-16 photo-gallery" src={img2} alt="" />
            <img className=" mt-32 photo-gallery" src={img3} alt="" />
            <img className="-mt-32 photo-gallery" src={img4} alt="" />
            <img className="-mt-16 photo-gallery" src={img5} alt="" />
            <img className=" photo-gallery" src={img5} alt="" />
          </div>
        </div>
        <div className="lg:hidden block mx-8 mb-6">
          <img className="mt-6" src={img1} alt="" />
          <button className="mt-6">
            <span>see more</span>
          </button>
        </div>
      </div>
    </PhotoGalaryWrapper>
  );
};
const galleryData = [
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
];
export const PhotoGalaryWrapper = styled.div`
  button {
    width: 88px;
    height: 43px;
    left: 150px;
    top: 4643px;

    background: #f45656;
    border-radius: 2px;
  }
  button > span {
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
