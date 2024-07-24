// MobyWork.jsx
import React from "react";
import MobyWorkCard from "./ui/MobyWorkCard";

export default function MobyWork() {
  return (
    <div className="bg-white">
      <div className="flex justify-center flex-col items-center mb-20">
        <h1 className="text-[18px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-bold pt-10 pb-6">How Moby Works</h1>

        <div className="flex flex-col lg:flex-row justify-between gap-3 text-center max-w-[1160px] w-full flex-wrap">
          <MobyWorkCard
            step="1"
            title="Access Daily Market Reports"
            description="Gain insight to daily market updates with exclusive news articles, company updates, and easy research so you can understand what’s happening in the markets and how you can trade with easy to understand reports."
          />

          <MobyWorkCard
            step="2"
            title="Hand Picked Stock Picks for You"
            description="Moby took expert analysts from institutions like Morgan Stanley and Goldman Sachs and paired them with journalists who know how to distill complex financial jargon into easily-comprehensible and actionable advice."
          >
            <div className="flex flex-col sm:flex-row gap-3 text-[14px] font-medium">
              <div className="bg-[#caeaf1] rounded-lg p-2 lg:p-4 text-center flex-1 leading-none">
                <p className="text-[12px] md:text-[16px]">
                  Moby’s stock picks are beating the S&P500 by more than 11.9%
                  over the past 4 consectutive years*
                </p>
              </div>
              <div className="bg-[#caeaf1] rounded-lg p-6 text-center flex-1 leading-none">
                <p>
                  Moby stock picks are profitable at least 71% of the time*
                </p>
              </div>
            </div>
          </MobyWorkCard>

          <MobyWorkCard
            step="3"
            title="Build a Better Portfolio"
            description="Moby also provides several model portfolios so you can get started investing right away (without waiting for new stock picks to come out)."
          >
            <div className="flex flex-col gap-1 text-[14px] w-full">
              <p className="bg-[#E0F401] rounded-full px-4 py-2 font-medium">
                Over 7+ addtional features
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <p className="bg-[#9E00FF] rounded-full px-4 py-2 flex-1">
                  Crypto Screener
                </p>
                <p className=" bg-[#04cbf8] rounded-full px-4 py-2 flex-1">
                  Model Portfolio's
                </p>
              </div>
              <p className="bg-[#D34444] rounded-full px-4 py-2">
                Political Trade Tracking
              </p>
              <p className=" bg-[#04cbf8] rounded-full px-4 py-2">
                Economic Calendar
              </p>
            </div>
          </MobyWorkCard>
        </div>
      </div>
    </div>
  );
};
