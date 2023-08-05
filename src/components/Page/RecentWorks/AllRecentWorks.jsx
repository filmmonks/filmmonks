import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { Wrapper } from "./RecentWorks";
import useGet from "../../../hooks/useGet";

const AllRecentWorks = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const url = "https://filmmonks-server.onrender.com/api/work-timeline";
  const { dataSource } = useGet(url);
  function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      // Swap elements at start and end positions
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      // Move the pointers towards the center
      start++;
      end--;
    }

    return arr;
  }
  const dataSourceArray = [...dataSource];
  const reversedArray = reverseArray(dataSourceArray);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper
          style={{
            backgroundImage: "none",
            backgroundColor: "rgb(15 12 14)",
            marginBottom: "0px",
          }}
          className="pt-44 "
        >
          <div className="flex flex-wrap justify-between mx-12 lg:gap-6 gap-y-12 lg:mb-12 pb-8 all-recent-works">
            {reversedArray.map((data) => (
              <>
                {data?.videoLink && (
                  <div className="mx-auto">
                    <iframe
                      className="video-size"
                      src={data.videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                )}
              </>
            ))}
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default AllRecentWorks;
