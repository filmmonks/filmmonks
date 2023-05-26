import React from "react";
import { galleryData } from "./PhotoGalary";

const AllPhotosGalary = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:mx-36 gap-10 mx-auto pt-36">
      {galleryData.map((data) => (
        <div className="w-[380px]">
          <img src={data?.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AllPhotosGalary;
