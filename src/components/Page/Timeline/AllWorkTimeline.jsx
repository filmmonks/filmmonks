import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";

const AllWorkTimeline = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div setLoading="false" className="pt-36 h-screen">
          <h1>coming soon</h1>
        </div>
      )}
    </>
  );
};

export default AllWorkTimeline;
