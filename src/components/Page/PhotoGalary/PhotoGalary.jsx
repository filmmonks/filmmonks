import React from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";
import img1 from "../../../Assets/MonksGalary/img1.png";
import img2 from "../../../Assets/MonksGalary/img2.png";
import img3 from "../../../Assets/MonksGalary/img3.png";
import img4 from "../../../Assets/MonksGalary/img4.png";
import img5 from "../../../Assets/MonksGalary/img5.png";
import "./PhotoGalary.css";
const PhotoGalary = () => {
  return (
    <div className="my-12">
      <Headline content=" Monks Galler" lastWord="y" />
      <Content content="Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit sapien ornare morbin dd we  can understand the fact po of film  " />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-44 ">
        <img className="photo-gallery" src={img1} alt="" />
        <img className="mt-16 photo-gallery" src={img2} alt="" />
        <img className=" mt-32 photo-gallery" src={img3} alt="" />
        <img className="-mt-32 photo-gallery" src={img4} alt="" />
        <img className="-mt-16 photo-gallery" src={img5} alt="" />
        <img className=" photo-gallery" src={img5} alt="" />
      </div>
    </div>
  );
};

export default PhotoGalary;
