import React from "react";

import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <CirclesWithBar
            height="100"
            width="100"
            color="#f45656"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
