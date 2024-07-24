import React from "react";
import PremiumIcon from "../assets/Icon.png";
import StarIcon from "../assets/Star.png";
import HeroSectionGif from "../assets/bce1c32a299b71d7799034de851fd32e.gif"
import CNBCLogo from "../assets/CNBC_logo 2.png";
import FoxLogo from "../assets/fox-ar21 1.png";
import MarkeetLogo from "../assets/marketwatch-ar21 1.png";
import UsaLogo from "../assets/2012_USA_Today_logo 1.png"
import NBClogo from "../assets/NBC_logo 1.png";
import CBSlogo from "../assets/CBS_logo 1.png";

export default function HeroSection() {
  return (
    <div className="bg-[#212121] w-full flex flex-col font-rethink">
      <div className="flex flex-col justify-center text-center">
        <h2 className="flex justify-center text-center w-full text-[18px] sm:text-[30px] md:text-[40px] lg:text-[48px] text-white font-bold leading-none">
          Become a smarter <br /> investor in just 5 minutes
        </h2>
        <h4 className="text-[#ccc] flex text-center justify-center text-[8px] sm:text-[12px] md:text-[16px] py-3 pt-5 px-2 leading-none">
          Moby gives you exclusive stock picks on market updates the matter.
          <br /> Keep it simple, all in one app.
        </h4>
        <div className="flex flex-col justify-center m-auto mt-6">
          <button className="flex py-2 md:py-3 px-2 md:px-4 bg-[#04cbf8] rounded-2xl hover:bg-[#467794]">
            <p className="text-[12px] md:text-[16px]">Get started with Moby Premium Today</p>
            <img src={PremiumIcon} alt="ICon" className="px-1w-3 w-4 md:w-10 md:px-2"/>
          </button>
        <p className="py-2 text-[#ccc] flex justify-center text-center text-[12px] md:text-[16px]">30-day money back gurantee</p>
        </div>
        <div className="mx-auto my-4">
          <img src={HeroSectionGif} alt="heroimg" />
        </div>
        <div className="flex bg-[#04cbf8] w-[120px] md:w-[180px] gap:1 md:gap-2 justify-center mx-auto mb-2 py-1 md:py-2 px-3 md:px-6 rounded-3xl">
          <img src={StarIcon} alt="staricon" className="w-3 md:w-5"/>
          <img src={StarIcon} alt="staricon" className="w-3 md:w-5"/>
          <img src={StarIcon} alt="staricon" className="w-3 md:w-5"/>
          <img src={StarIcon} alt="staricon" className="w-3 md:w-5"/>
          <img src={StarIcon} alt="staricon" className="w-3 md:w-5"/>
        </div>
          <p className="flex justify-center text-center text-[12px] md:text-[16px] text-[#ccc] leading-none">Over 1,000 5-star reviews on iOS App <br/> Store and Google</p>
      <div className="flex justify-center items-center w-full gap-6 lg:gap-8 pt-12 pb-9">
        <hr className="z-50 text-[#fff] font-bold w-full opacity-10"/>
        <p className="w-[160px] sm:w-[200px] bg-[#212121] text-center flex justify-center text-white text-[12px] sm:text-[16px]">Partners</p>
        <hr className="z-50 text-[#fff] w-full opacity-10"/>
      </div>

      <div className="flex flex-wrap justify-center items-center mx-auto gap-8 lg:gap-16 pb-8 w-full px-4">
        <img src={CNBCLogo} alt="cnblogo" className="w-[40px]lgd:w-[80px] md:w-[60px] h-[30px] lg:h-[60px] md:h-[40px]"/>
        <img src={FoxLogo} alt="foxLogo" className="w-[40px] lg:w-[120px] md:w-[60px] h-[30px] lg:h-[60px] md:h-[40px]"/>
        <img src={MarkeetLogo} alt="markeet" className="w-[40px] lg:w-[150px] md:w-[60px] h-[30px] lg:h-[75px] md:h-[40px]"/>
        <img src={UsaLogo} alt="usaLogo" className="w-[40px] lg:w-[120px] md:w-[60px] h-[30px] lg:h-[60px] md:h-[40px]"/>
        <img src={NBClogo} alt="nbcLogo" className="w-[40px] lg:w-[80px] md:w-[60px] h-[30px] lg:h-[60px] md:h-[40px]"/>
        <img src={CBSlogo} alt="cbsLogo" className="w-[40px] lg:w-[100px] md:w-[60px] h-[20px] lg:h-[40px] md:h-[40px]"/>

      </div>
      </div>
    </div>
  );
}
