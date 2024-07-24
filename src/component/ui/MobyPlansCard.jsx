import React from 'react';

export default function MobyPlanCheck({ image, title, titleColor, rating, text1, text2, bgcolor, divBorder, children, ratingBg, textcolor, width, imgBgColor, bgRounded, buttomText, isYearly }) {
  return (
    <div className="rounded-3xl p-5 shadow-md" style={{ backgroundColor: bgcolor, border: divBorder, color: textcolor, width: width }}>
      <div className="flex flex-col h-full">
        <div className=''>
      <img src={image} alt={title} className="object-cover rounded-full bg-blue-400 p-2" style={{ backgroundColor: imgBgColor, borderRadius: bgRounded }} />
      </div>
        <div className="flex justify-between items-center text-white mb-1 mt-4">
          <h2 className="text-[14px] md:text-[20px] font-bold" style={{color: titleColor}}>{title}</h2>
          <p className=" px-2 py-1 rounded-full text-[12px] md:text-[16px]" style={{background: ratingBg}}>{rating}</p>
        </div>
        <div className="">
         
          <ul className="list-disc list-inside mt-2">
            <li className="pt-1 text-[12px] md:text-[16px]">{text1}</li>
            <li className="pt-3 text-[12px] md:text-[16px]">{text2}</li>
            {children}
          </ul>
        </div>
        <div className="mt-auto">
          <button className="text-center text-[12px] md:text-[16px] text-white font-semibold bg-[#373737] rounded-lg leading-none w-full mt-4 py-5">{buttomText}</button>
          {isYearly && (
            
                <div className="flex justify-center items-center flex-col mt-4">
                  <p className='text-center opacity-40 text-[13px] pt-2'>$175 on purchase at discount, with money back guarantee for first 30 days</p>
                  <p className='text-center text-[14px] py-2'>Exclusive 25% discount on purchase</p>
                </div>
              
          )}
        </div>
      </div>
    </div>
  );
}
