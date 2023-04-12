import React from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";

const Production = () => {
  return (
    <div>
      <Headline content="Complete Film Productio" lastWord="n" />
      <Content content="Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit sapien ornare morbin dd we  can understand the fact po of film  " />
      <div style={{ height: "313px" }} className="bg-[#F45656]"></div>
      <div
        style={{ marginTop: "-240px", marginBottom: "200px" }}
        className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1"
      >
        <div className="card">
          <img src="https://i.ibb.co/FsQ7cvt/Rectangle-194.png" alt="" />
          <p className="text-center my-4">Pre Production </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/FsQ7cvt/Rectangle-194.png" alt="" />
          <p className="text-center my-4">Pre Production </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/FsQ7cvt/Rectangle-194.png" alt="" />
          <p className="text-center my-4">Pre Production </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/FsQ7cvt/Rectangle-194.png" alt="" />
          <p className="text-center my-4">Pre Production </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        {" "}
        <div className="border border-[#F35659] mb-3 w-[40%]"></div>
        <div className="border border-[#F35659] mb-3 w-[40%]"></div>
      </div>
    </div>
  );
};

export default Production;
