import React from "react";
import { galleryData } from "./PhotoGalary";

const AllPhotosGalary = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:mx-36 lg:gap-10 md:gap-10 gap-10 mx-auto pt-36 pb-12">
      {galleryData.map((data) => (
        <div className="lg:w-[380px] w-[300px] mx-auto">
          <img src={data?.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AllPhotosGalary;
