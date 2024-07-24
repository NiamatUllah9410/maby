
import React from "react";

import MyBarChart from "./barGrowthChart";



export default function PermiumSub () {


    return(

        <div className="w-full max-w-[1160px] lg:flex m-auto mb-8 mx-auto">
            <div className="bg-[#EBF9FC] flex flex-col p-4 w-full lg:m-auto">
                <div className="flex justify-center text-center">
                    <h2 className="text-black font-semibold text-[20px] py-6">Selection of two models</h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center mb-4 w-full ">
                  <button className="px-3 py-4 bg-black text-[12px] md:text-[16px] text-white rounded-xl mr-2 flex-1">
                    Premium Subscription (ROI)
                  </button>
                  <button className="px-6 py-4 border border-1 text-[12px] md:text-[16px] border-[#ccc] text-gray-700 rounded-xl font-medium flex-1">
                    Past Moby Stock Picks
                  </button>
                </div>

                <div className="flex flex-col md:flex-row justify-center mb-2 w-full gap-2 pt-4">
                    <div className="flex flex-col flex-1 ">
                    <label htmlFor="" className="text-[12px] md:text-[16px] py-2 px-3">Initial Amount</label>
                    <input
                       type="text"
                       className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl bg-none focus:outline-none bg-[#EBF9FC] text-[14px] md:text-[16px] Lg:text-[20px] font-bold"
                       placeholder="$ 770"
                        />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700 text-[12px] md:text-[16px] py-2 px-3">
                        Target return
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl  focus:outline-none bg-[#C8F2FB] text-[#6791E2] text-[14px] md:text-[16px] Lg:text-[20px] font-bold "
                        placeholder="11.9%"
                        value="11.9%"
                        readOnly
                      />
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center mb-2 w-full gap-2 pt-4">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="text-[12px] md:text-[16px] py-2 px-3">S&P 500 Return</label>
                        <input type="text" 
                        className=" w-full px-6 py-4 border-[#04CBF840] border rounded-xl bg-none focus:outline-none bg-[#EBF9FC] text-[14px] md:text-[16px] Lg:text-[20px] font-bold"
                        placeholder="%10"/> 
                    </div>

                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="text-[12px] md:text-[16px] py-2 px-3">Average Return on Premium Plan</label>
                        <input 
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl focus:outline-none bg-[#C8F2FB] text-[#6791E2] text-[14px] md:text-[16px] Lg:text-[20px] font-bold]"
                        placeholder="7 Weeks"
                        />
                    </div>
                </div>
                <div className="w-full pt-4 gap-2">
                  <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex flex-1 flex-col">
                    <label htmlFor="" className="text-[12px] md:text-[16px] py-2 px-3">Term</label>
                    <input 
                    type="text"
                    className="w-full py-4 px-6 border-[#04CBF840] border rounded-xl focus:outline-none bg-[#EBF9FC] text-[#6791E2] text-[14px] md:text-[16px] Lg:text-[20px] font-bold" 
                    placeholder="4"/>
                    </div>

                    <div className="flex flex-col flex-1">
                    <label htmlFor="" className="text-[12px] md:text-[16px] py-2 px-3">Projected Annual Fees</label>
                    <input 
                    type="text"
                    className="w-full py-4 px-6 border-[#04CBF840] border rounded-xl focus:outline-none bg-[#EBF9FC] text-[#6791E2] text-[14px] md:text-[16px] Lg:text-[20px] font-bold" 
                    placeholder="$ 200"/>
                    </div>
                    <div className="hidden lg:flex justify-center items-center gap-2 pt-4">
                    <p className="bg-red-400 py-4 px-7 text-[20px] font-semibold rounded-xl">$</p>
                    <p className="bg-red-400 py-4 px-7 text-[20px] font-semibold rounded-xl">%</p>
                    </div>
                </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center mb-2 w-full gap-2 pt-4">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="text-[12px] md:text-[16px] py-2 px-3">Additional contributions</label>
                        <input type="text" 
                        className=" w-full px-6 py-4 border-[#04CBF840] border rounded-xl bg-none focus:outline-none bg-[#EBF9FC] text-[14px] md:text-[16px] Lg:text-[20px] font-bold"
                        placeholder="$100"/> 
                    </div>

                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="text-[12px] md:text-[16px] py-2 px-3">Frequency</label>
                        <input 
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl focus:outline-none bg-[#C8F2FB] text-[#6791E2] text-[14px] md:text-[16px] Lg:text-[20px] font-bold]"
                        placeholder="Weekly"
                        />
                    </div>
                </div>
                
            </div>

            <div>
              {/* <MyBarChart/> */}
            </div>
        </div>
    )}