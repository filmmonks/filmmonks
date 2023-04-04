import React from "react";

const ShowReel = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/VCHrmF9/showreel-back.png')] bg-cover bg-center h-screen pt-12 ">
      <h1 className="headline capitalize  text-[#FFF8F8] text-center mb-5">
        showReel
      </h1>
      <div>
        <p style={{ position: "absolute", left: "50px" }}>filmmonks</p>
        <p style={{ position: "absolute", left: "50%",color:"red"}}>youtube</p>
        <img
          className="w-[850px] mx-auto"
          src="https://i.ibb.co/MfSK7fD/showreel.png"
          alt=""
        />{" "}
      </div>
    </div>
  );
};

export default ShowReel;
