import React from "react";
import CategoryAppCard from "../CategoryAppCard/CategoryAppCard";

const EducationApps = ({ apps }) => {
  return (
    <div className="max-w-[1200px] mx-auto w-11/12 my-[80px]">
      <h1 className="mb-[30px] font-bold text-[30px] text-white">
        Educational apps
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
        {apps.map((item) => (
          <CategoryAppCard key={item.id} app={item}></CategoryAppCard>
        ))}
      </div>
    </div>
  );
};

export default EducationApps;
