import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const TopCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`app/${item.id}`)}
      style={{
        backgroundImage: `linear-gradient(-300deg, rgba(1, 1, 1) 0%, rgba(17, 17, 17, 0.00) 100%), url(${item.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full rounded-[10px] p-[20px] pb-[10px] flex flex-col justify-end space-y-[5px] cursor-pointer hover:scale-[1.02] transition-all hover:border-sm hover:border border-primary">
      <p className=" text-[#CDD0D4] font-bold">{item.name}</p>
      <div className="flex items-center gap-1 text-orange-400 mt-[5px]">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            size={12}
            key={i}
            className={i < Math.floor(item.rating) ? "" : "text-gray-300"}
          />
        ))}
        <span className="ml-1 text-gray-300 font-semibold text-[12px]">
          ({item.rating})
        </span>
      </div>
      <p className="text-[12px] font-semibold ">
        {" "}
        Downloads : {item.downloads.toLocaleString()}
      </p>
      <p className="bg-[#1e293b] text-white text-[12px] w-fit px-[15px] py-[5px] rounded-[5px] my-[10px] self-end cursor-pointer">
        Free
      </p>
    </div>
  );
};

export default TopCard;
