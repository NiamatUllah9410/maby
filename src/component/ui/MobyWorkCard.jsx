// MobyWorkCard.jsx
import React from "react";
import Iphone1 from "../../assets/Frame 523.png";
import Iphone2 from '../../assets/iPhone 14 Pro Space Black Mockup.png';
import Iphone3 from '../../assets/iPhone 14 Pro Space Black Mockup (1).png';

export default function MobyWorkCard({ step, title, description, children }) {
  return (
    <div className="bg-[#EBF9FC] px-6 pt-6 rounded-3xl flex flex-1 flex-col items-center gap-3 relative min-h-[750px] sm:min-h-[674px] lg:min-h-[730px] w-full ">
      <h1 className="rounded-full bg-[#04cbf8] py-2 px-5 w-6 flex justify-center">
        {step}
      </h1>
      <p className="font-bold text-[14px] md:text-[20px]">{title}</p>
      <p className="text-[14px] md:text-[16px] ">{description}</p>
      {children}
      <div className="absolute bottom-0">
        {step === '1' && <img src={Iphone1} alt="Iphone 1" />}
        {step === '2' && <img src={Iphone2} alt="Iphone 2" />}
        {step === '3' && <img src={Iphone3} alt="Iphone 3" />}
      </div>
    </div>
  );
};
