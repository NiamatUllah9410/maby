import React from "react";
import ArrowIcon from '../../assets/arrow-narrow-up-right.png'; 

export default function TestimonialsCard({ image, rating, title, description }) {
  return (
    <div className="w-full lg:w-1/3 rounded-3xl p-8 bg-[#3d3d3d] relative">
      <img src={image} alt="Logo" className="pt-5 w-20 md:w-28 lg:w-32 w-" />
      <div className="flex items-center mb-4">
        <div className="flex justify-between w-full">
          <img src={rating} alt="rating" className="w-22 h-5 py-1 my-1" />
          <span className="text-white text-[12px] md-text[16px] font-bold rounded-full px-4 py-2 bg-[#5c5c5c]">4.1/5</span>
        </div>
      </div>
      <hr className="text-[#fff] opacity-10 m-auto pb-10" />
      <p className="mb-4 text-16px sm:text-[20px] md:text-[20px] lg:text-[24px]  font-bold leading-none">{title}</p>
      <p className="text-[12px] lg:text-[16px] pb-10">{description}</p>
      <div className="flex gap-2 absolute bottom-6 cursor-pointer">
        <p className="text-[#04cbf8] text-[12px] lg:text-[16px] inline-block">Read all</p>
        <img src={ArrowIcon} className="text-[12px] md:text-[16px]" alt="Arrow Icon" />
      </div>
    </div>
  );
}

