import React from "react";
import { FaStar } from "react-icons/fa";

const CategoryAppCard = () => {
  return (
    <div className="flex gap-[13px] bg-[#39455f6d] rounded-[8px] px-[15px] py-[10px] items-center">
      <div>
        <img
          className="bg-white w-[123px] rounded-[8px]"
          src={"/logo.png"}
          alt=""
        />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-[#CDD0D4] font-bold text-[14px]">
          Ashpalt 9 : Legends
        </p>
        <div className="flex items-center gap-1 text-orange-400 mt-[3px]">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              size={10}
              key={i}
              className={i < 4 ? "" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-300 font-semibold text-[10px]">
            ({4})
          </span>
        </div>
        <p className="text-[12px] font-semibold "> Downloads : 100000000</p>
        <p className="bg-[#171f2bd3] text-white text-[11px] w-fit px-[15px] py-[5px] rounded-[5px] self-end cursor-pointer mt-[5px]">
          Free
        </p>
      </div>
    </div>
  );
};

export default CategoryAppCard;
