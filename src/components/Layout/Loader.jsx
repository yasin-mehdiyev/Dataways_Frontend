import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ isLoad }) => {
  return (
    <div className="loader__wrapper">
      <ClipLoader color={"#fff"} loading={isLoad} size={200} />
    </div>
  );
};

export default Loader;
