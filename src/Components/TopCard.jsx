import React from "react";
import { FaStar } from "react-icons/fa";

const TopCard = ({ item }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(-300deg, rgba(10, 10, 10,.80) 0%, rgba(17, 17, 17, 0.00) 100%), url('https://r4.wallpaperflare.com/wallpaper/214/187/691/video-games-video-game-art-ultrawide-ultra-wide-need-for-speed-heat-hd-wallpaper-dfd5229ceea65cbbc5ec4882f161d4f4.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full rounded-[10px] p-[20px] pb-[10px] flex flex-col justify-end space-y-[5px]">
      <p className="max-w-[90px] text-[#CDD0D4] font-bold">
        Ashpalt 9 : Legends
      </p>
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
