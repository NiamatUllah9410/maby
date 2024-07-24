import React from "react";

export default function StockChart() {
  return (
    <div className="bg-[#EBF9FC] p-8">
      <div className="pb-10 ">
        <h1 className="text-center py-1 text-[18px] sm:text-[30px] md:text-[40px] lg:text-[48px] text-[#01111D] font-bold pb-8">
          As of Closing Prices for the Month of March
        </h1>
        <hr className="text-[#ccc] m-auto max-w-[1160px] pb-6" />

        <div className="m-auto max-w-[1160px] overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">Year of Picks</th>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">Start Range</th>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">End Range</th>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">Stock Picks</th>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">Average Return</th>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">Return vs SP500</th>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">Picks with Return 0%</th>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">% Profitable</th>
                <th className="px-3 py-2 text-center text-[12px] lg:text-[14px] font-medium text-gray-500 uppercase tracking-wider">Max % Return</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap">2023 Picks</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap">1/1/2023</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap">12/31/2023</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap">140</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap bg-[#C8F2FB] rounded-xl">30.1%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap bg-[#C8F2FB] rounded-xl">9.9%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap">103</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap">74%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[16px] whitespace-nowrap">523.7%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">2022 Picks</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">1/1/2022</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">12/31/2022</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">67</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap bg-[#C8F2FB] rounded-xl">35.5%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap bg-[#C8F2FB] rounded-xl">7.1%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">52</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">78%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">609.9%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">2021 Picks</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">1/1/2021</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">12/31/2021</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">104</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap bg-[#C8F2FB] rounded-xl">28.2%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap bg-[#C8F2FB] rounded-xl">6.7%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">63</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">61%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">611.5%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">2020 Picks</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">1/1/2020</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">12/31/2020</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">78</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap bg-[#C8F2FB] rounded-xl">85.6%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap bg-[#C8F2FB] rounded-xl">26.4%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">59</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">76%</td>
                <td className="px-3 py-2 text-center text-[12px] lg:text-[14px] whitespace-nowrap">9.9%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">Since 2020</td>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">1/1/2016</td>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">12/31/2023</td>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">389</td>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">41.7%</td>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">11.9%</td>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">277</td>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">71%</td>
                <td className="px-3 py-2 whitespace-nowrap text-center text-[12px] lg:text-[14px] text-white bg-[#04cbf8] rounded-xl">991.4%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
