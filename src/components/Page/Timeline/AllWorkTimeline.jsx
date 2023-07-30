import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import useGet from "../../../hooks/useGet";

const AllWorkTimeline = () => {
  let [loading, setLoading] = useState(true);
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
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  console.log(reversedArray);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div setLoading="false" className="pt-24 ">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:gird-cols-2 grid-cols-1">
            {reversedArray.splice(3).map((data) => (
              <div className="rounded-lg shadow-md xl:p-16 lg:p-12 p-4 md:p-12xl:m-16 lg:m-12 md:m-12 m-4 bg-white">
                <img
                  style={{
                    width: "350px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src={
                    `https://filmmonks-server.onrender.com/timeline/` +
                    data?.image
                  }
                  alt={data?.headline}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{data?.headline}</h2>
                  <p className="text-gray-600">{data?.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllWorkTimeline;
