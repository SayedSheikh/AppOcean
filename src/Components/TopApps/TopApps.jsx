import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import TopCard from "../TopCard";

const TopApps = ({ apps }) => {
  const [topApps, setTopApps] = useState(apps);

  useEffect(() => {
    const Apps = [...apps].sort((a, b) => b.rating - a.rating).slice(0, 5);
    setTopApps(Apps);
  }, [apps]);
  return (
    <div className="max-w-[1200px] mx-auto w-11/12 my-[80px]">
      <h1 className="mb-[30px] font-bold text-[30px] text-white">
        Trending Apps
      </h1>
      <div className="grid grid-cols-12 md:grid-rows-12 gap-[15px] md:h-[500px]">
        <div className="md:col-span-4 col-span-12 md:row-span-12 shadow-sm shadow-primary rounded-[10px]">
          <TopCard key={topApps[0].id} item={topApps[0]}></TopCard>
        </div>

        {topApps.map((item, indx) => {
          if (indx !== 0) {
            return (
              <div
                key={item.id}
                className="md:col-span-4 md:row-span-6 col-span-12 shadow-sm shadow-primary rounded-[10px]">
                <TopCard item={item}></TopCard>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TopApps;
