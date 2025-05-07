import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./SLider.css";
import { Link } from "react-router";

const Slider = ({ trendingPromise }) => {
  const trendingData = use(trendingPromise);

  // console.log(trendingData);
  return (
    <div className="h-[500px] max-w-[1200px] w-11/12 mx-auto rounded-[8px] shadow-primary shadow-sm z-[4]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        cssMode={true}
        mousewheel={true}
        modules={[Pagination, Mousewheel, Autoplay]}
        className="mySwiper h-full">
        {trendingData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                backgroundImage: `linear-gradient(-330deg, rgba(10, 10, 10,.80) 0%, rgba(17, 17, 17, 0.00) 100%), url(${item.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-full p-[20px] md:p-[80px] lg:p-[100px] flex rounded-[8px]">
              <div className="relative text-white self-center space-y-[10px]">
                <h1 className="font-bold md:text-3xl text-2xl lg:text-5xl">
                  {item.name}
                </h1>
                <p className="semi-bold text-balance text-base md:text-lg lg:text-xl mb-[10px] mt-[20px]">
                  {item.features[0]}
                </p>

                <Link
                  to={`app/${item.id}`}
                  className="relative inline-block px-4 py-2 font-medium group active:translate-y-[1px] transition-transform duration-100  z-10">
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#F471B5] group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-[#F471B5] group-hover:border-none "></span>
                  <span className="relative text-black group-hover:text-white flex items-center ">
                    <MdOutlineKeyboardArrowRight size={30} /> See Details
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
