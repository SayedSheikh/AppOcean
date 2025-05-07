import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const BestGames = ({ games }) => {
  const [topGames, setTopGames] = useState(games);
  const navigate = useNavigate();

  useEffect(() => {
    const Games = [...games].sort((a, b) => b.rating - a.rating).slice(0, 6);
    setTopGames(Games);
  }, [games]);
  return (
    <div className="max-w-[1200px] mx-auto w-11/12 my-[80px]">
      <h1 className="mb-[30px] font-bold text-[30px] text-white">
        Top Rated Games
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-[15px]">
        {topGames.map((item) => (
          <div
            onClick={() => navigate(`app/${item.id}`)}
            key={item.id}
            style={{
              backgroundImage: `linear-gradient(-300deg, rgba(1, 1, 1) 0%, rgba(17, 17, 17, 0.00) 100%), url(${item.banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[300px] rounded-[10px] p-[20px] pb-[10px] flex flex-col justify-end space-y-[5px] cursor-pointer hover:scale-[1.05] transition-all hover:border hover:border-primary">
            <p className="max-w-[102px] text-[#CDD0D4] font-bold">
              {item.name}
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
            <p className="text-[13px] font-semibold flex items-center">
              {" "}
              <FaDownload className="inline mr-1"></FaDownload>{" "}
              {item.downloads.toLocaleString()}
            </p>
            <p className="bg-[#1e293b] text-white text-[12px] w-fit px-[15px] py-[5px] rounded-[5px] my-[10px] self-end cursor-pointer">
              Free
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestGames;
