import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const CategoryAppCard = ({ app }) => {
  const navigation = useNavigate();
  return (
    <div
      onClick={() => navigation(`app/${app.id}`)}
      className="flex gap-[13px] bg-[#39455f6d] rounded-[8px] px-[15px] py-[10px] items-center cursor-pointer hover:scale-[1.04] transition-all">
      <div>
        <img
          className="bg-white w-[123px] h-[80px] object-cover rounded-[8px]"
          src={`${app.banner}`}
          alt=""
        />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-[#CDD0D4] font-bold text-[14px]">{app.name}</p>
        <div className="flex items-center gap-1 text-orange-400 mt-[5px]">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              size={10}
              key={i}
              className={i < Math.floor(app.rating) ? "" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-300 font-semibold text-[10px]">
            ({app.rating})
          </span>
        </div>
        <p className="text-[12px] font-semibold  flex items-center">
          {" "}
          <FaDownload className="inline mr-1"></FaDownload>
          {app.downloads.toLocaleString()}
        </p>
        <p className="bg-[#171f2bd3] text-white text-[11px] w-fit px-[15px] py-[5px] rounded-[5px] self-end cursor-pointer mt-[4px]">
          Free
        </p>
      </div>
    </div>
  );
};

export default CategoryAppCard;
