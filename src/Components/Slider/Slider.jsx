import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Slider = () => {
  return (
    <div className="h-[500px] max-w-[1200px] w-11/12 mx-auto border">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="mySwiper h-full">
        <SwiperSlide>
          <div className="m-[10px] border"> sayed</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://r4.wallpaperflare.com/wallpaper/214/187/691/video-games-video-game-art-ultrawide-ultra-wide-need-for-speed-heat-hd-wallpaper-dfd5229ceea65cbbc5ec4882f161d4f4.jpg')] w-full h-full bg-cover bg-center -z-10 p-[20px] md:p-[80px] lg:p-[100px] flex">
            <div className="z-10 relative text-white self-center space-y-[10px]">
              <h1 className="font-bold md:text-3xl text-2xl">
                Asphalt 9 : Legends
              </h1>
              <p className="semi-bold text-balance">
                Cross-play, new modes and more
              </p>
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#7C3AED]"></span>
                <span className="relative text-black group-hover:text-white flex items-center ">
                  <MdOutlineKeyboardArrowRight size={30} /> See Details
                </span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
