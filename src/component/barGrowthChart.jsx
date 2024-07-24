import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const data = [
  { name: 'y1', value: 1000 },
  { name: 'y2', value: 2000 },
  { name: 'y3', value: 3000 },
  { name: 'y4', value: 4000 },
  { name: 'y5', value: 5000 },
];

const MyBarChart = () => {
  return (
    <div>
      <div className="flex justify-center mb-2 w-full gap-2 px-9">
        <div className="flex flex-col flex-1 bg-black text-white rounded-xl">
          <label htmlFor="" className='pl-4 pt-4 text-[12px]'>Initial Amount</label>
          <input
            type="text"
            className="w-full px-6 py-1 border-black border rounded-b-xl bg-black focus:outline-none text-[20px] font-bold"
            placeholder="$ 770"
          />
        </div>
        <div className="flex-1 bg-[#04cbf8] rounded-xl">
          <label className="block text-gray-700 text-[12px]">
            Target return
          </label>
          <input
            type="text"
            className="w-full px-6 py-4 border-[#04cbf8] border rounded-xl focus:outline-none bg-[#04cbf8] text-[#6791E2] text-[20px] font-bold"
            placeholder="11.9%"
            value="11.9%"
            readOnly
          />
        </div>
      </div>

      <BarChart
        width={620}
        height={562}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <defs>
          {data.map((entry, index) => (
            <linearGradient id={`colorUv${index}`} key={index} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#04cbf8" stopOpacity={1} />
              <stop offset="65%" stopColor="#04cbf8" stopOpacity={1} />
              <stop offset="65%" stopColor="black" stopOpacity={1} />
              <stop offset="100%" stopColor="black" stopOpacity={1} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid 
          strokeDasharray="3 0"
          vertical={false} 
        />
        <XAxis dataKey="name" tick={false} />
        <YAxis 
          ticks={[0, 1000, 2000, 3000, 4000, 5000]} 
          domain={[0, 5000]}
          tickCount={6}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#colorUv${index})`} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

export default MyBarChart;
