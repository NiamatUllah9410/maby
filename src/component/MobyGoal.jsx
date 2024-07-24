import React from "react";

export default function() {

    return(
        <div className="flex  md:flex-row flex-col  justify-between w-full max-w-[1160px] mx-auto lg:px-0 px-2 pb-12">
            <div className="md:w-[550px] w-full pb-4 lg:px-1 px-3">
                <p className="flex flex-col text-blue-800 text-[14px] lg:text-[16px]">Moby Premium At $200/year</p>
                <h2 className="text-start font-semibold lg:font-bold text-[12px] sm:text-[20] md:text-[28px] lg:text-[32px] pt-2 pb-6">Moby's goal is to<br/> outperform the market.</h2>
                <button className="md:py-3 py-2 px-4 text-center bg-[#04cbf8] rounded-lg text-[16px] leading-none">Try Premium today</button>
            </div>

            <div className="md:w-[520px] w-full">
                <p className="text-start text-[14px] lg:text-[16px] text-[#504f4f] px-3">
                As Moby stock picks are beating the S&P 500 by more than 11.9% each year, over the past 4 consecutive years, each new trade alert comes with a short but thorough report on what makes our picks a good investment opportunity.
                </p>
                <p className="text-start py-2 text-[14px] lg:text-[16px] text-[#504f4f] px-3"> We keep it simple. 3 new stock picks per week.</p>
            </div>
        </div>
    )
}