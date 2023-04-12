import React from "react";
import Headline from "../../TextComponents/Headline";
import img1 from "../../../Assets/Timeline/img1.png";
import { Bounce } from "react-reveal";
const Timeline = () => {
  return (
    <div className="bg-[#000000] lg:pt-8 lg:pb-36 py-3 md:py-6">
      <Headline
        style={{ color: "white" }}
        content="Work TimeLin"
        lastWord="e"
      />
      <Bounce left>
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16  border-b-2 border-red-50 pt-16">
          <img className="xl:mr-auto" src={img1} alt="" />
          <div className="text-left mt-10">
            <p className="text-3xl">article</p>
            <p>description</p>
            <p
              style={{ textAlign: "justify" }}
              className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8"
            >
              A small-town struggling woman searches for her missing brother who
              guided and implemented confidence within herself to be
              independent. While revolving around her she learns about the
              complex socio-political instances and the substantial uncertainty
              in it.
            </p>
          </div>
        </div>
      </Bounce>
      <Bounce right>
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16  border-b-2 border-red-50 pt-16">
          <div className="text-left mt-10">
            <p className="text-3xl">article</p>
            <p>description</p>
            <p
              style={{ textAlign: "justify" }}
              className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8"
            >
              A small-town struggling woman searches for her missing brother who
              guided and implemented confidence within herself to be
              independent. While revolving around her she learns about the
              complex socio-political instances and the substantial uncertainty
              in it.
            </p>
          </div>
          <img className="xl:ml-auto " src={img1} alt="" />
        </div>
      </Bounce>
      <Bounce left>
        {" "}
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:mx-48 mx-8 md:mx-16  border-b-2 border-red-50 pt-16">
          <img className="" src={img1} alt="" />
          <div className="text-left mt-10">
            <p className="text-3xl">article</p>
            <p>description</p>
            <p
              style={{ textAlign: "justify" }}
              className="lg:content-2 md:content-md content-sm xs:content-xs text-justify mb-8"
            >
              A small-town struggling woman searches for her missing brother who
              guided and implemented confidence within herself to be
              independent. While revolving around her she learns about the
              complex socio-political instances and the substantial uncertainty
              in it.
            </p>
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Timeline;
