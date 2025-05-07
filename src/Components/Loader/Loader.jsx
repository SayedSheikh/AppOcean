import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-115px)]">
      <span className="loading loading-bars text-primary loading-xl"></span>
    </div>
  );
};

export default Loader;
