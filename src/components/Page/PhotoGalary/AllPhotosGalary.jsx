import React from "react";
import { galleryData } from "./PhotoGalary";
import img1 from "../../../Assets/MonksGalary/AllPhotos/images/8.png";
import img2 from "../../../Assets/MonksGalary/AllPhotos/images/9.png";
import img3 from "../../../Assets/MonksGalary/AllPhotos/images/10.png";
import img4 from "../../../Assets/MonksGalary/AllPhotos/images/11.png";
import img5 from "../../../Assets/MonksGalary/AllPhotos/images/12.png";
import img6 from "../../../Assets/MonksGalary/AllPhotos/images/13.png";
import img7 from "../../../Assets/MonksGalary/AllPhotos/images/14.png";
import img8 from "../../../Assets/MonksGalary/AllPhotos/images/15.png";

const imageData = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 1,
    img: img2,
  },
  {
    id: 1,
    img: img3,
  },
  {
    id: 1,
    img: img4,
  },
  {
    id: 1,
    img: img5,
  },
  {
    id: 1,
    img: img6,
  },
  {
    id: 1,
    img: img7,
  },
  {
    id: 1,
    img: img8,
  },
];
const AllPhotosGalary = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:mx-36 lg:gap-10 md:gap-10 gap-10 mx-auto pt-36 pb-12">
      {imageData.map((data) => (
        <div className="lg:w-[380px] w-[300px] mx-auto">
          <img src={data?.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AllPhotosGalary;
