import React from "react";
import reviewImg from "../../assets/success-review.png";
import UserImg from "../../assets/success-staffs.png";
import CountUp from "react-countup";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaAppStore } from "react-icons/fa";

const Information = () => {
  return (
    <div className="max-w-[1200px] w-11/12 mx-auto mb-[80px]">
      <h1 className="font-extrabold text-[40px] text-[#fff] text-center mb-[16px]">
        We Provide Best Apps
      </h1>
      <p className="text-[#CDD0D4] text-center mb-[32px]">
        Our platform brings you a curated collection of high-quality apps across
        diverse categories — all reviewed, rated, and ready to install with just
        a click.
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-[24px] justify-center">
        <div className="py-[40px] px-[48px] bg-[#4b6ebc84] flex flex-col rounded-[16px]">
          {/* <img className="w-[64px]" src={reviewImg} alt="" /> */}
          <PiDownloadSimpleBold size={50} className="text-primary" />
          <h1 className="text-[44px] lg:text-[52px] font-extrabold text-[#fff]">
            <CountUp duration={5} end={199} enableScrollSpy></CountUp>+
          </h1>
          <p className="text-[#CDD0D4] text-[24px] font-semibold">
            Total Downloads
          </p>
        </div>
        <div className="py-[40px] px-[48px] bg-[#4b6ebc84] flex flex-col rounded-[16px]">
          <img className="w-[64px]" src={reviewImg} alt="" />
          <h1 className="text-[44px] lg:text-[52px] font-extrabold text-[#ffffff]">
            <CountUp duration={5} end={467} enableScrollSpy></CountUp>+
          </h1>
          <p className="text-[#CDD0D4] text-[24px] font-semibold">
            Total Reviews
          </p>
        </div>
        <div className="py-[40px] px-[48px] bg-[#4b6ebc84] flex flex-col rounded-[16px]">
          <img className="w-[64px]" src={UserImg} alt="" />
          <h1 className="text-[44px] lg:text-[52px] font-extrabold text-[#fff]">
            <CountUp duration={5} end={1900} enableScrollSpy></CountUp>+
          </h1>
          <p className="text-[#CDD0D4] text-[24px] font-semibold">Users</p>
        </div>
        <div className="py-[40px] px-[48px] bg-[#4b6ebc84] flex flex-col rounded-[16px]">
          <FaAppStore size={60} className="text-[#818CF8]" />
          <h1 className="text-[44px] lg:text-[52px] font-extrabold text-[#fff]">
            <CountUp duration={5} end={300} enableScrollSpy></CountUp>+
          </h1>
          <p className="text-[#CDD0D4] text-[24px] font-semibold">Total Apps</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
