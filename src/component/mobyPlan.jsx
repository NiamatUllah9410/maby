import React, { useState, useEffect } from 'react';
import MobyPlanCheck from './ui/MobyPlansCard';
import Image1 from '../assets/cryptocurrency-04.png';
import Image2 from '../assets/cryptocurrency-04 (1).png'; // Ensure this is the correct path and name

export default function MobyPlan() {
  const [isYearly, setIsYearly] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left' && isYearly) {
      setIsYearly(false);
    } else if (direction === 'right' && !isYearly) {
      setIsYearly(true);
    }
  };

  return (
    <div className="bg-gray-900 w-full pt-8 pb-20">
      <div className="max-w-[1160px] mx-auto flex flex-col pt-2">
        <h2 className="text-center text-white text-[18px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-bold py-4">Moby Pricing and Plans</h2>
        <div className="flex justify-center items-center mb-6 gap-6 py-4">
          <span className={`mr-2 ${isYearly ? 'opacity-30' : 'opacity-100'} text-white text-[12px] md:text-[16px]`}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#22383d] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
          <span className={`ml-2 ${isYearly ? 'opacity-100' : 'opacity-30'} text-white text-[12px] md:text-[16px]`}>Yearly</span>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          <MobyPlanCheck
            image={Image1}
            title="Start Free Today"
            titleColor="white"
            rating="Free"
            ratingBg="#04cbf8"
            text1="Daily Market updates"
            text2="Newsletter"
            bgcolor=""
            divBorder="1px solid rgba(204, 204, 204, 0.3)"
            width="400px"
            textcolor="white"
            imgBgColor="#04cbf8"
            bgRounded="100%"
            buttomText="Get Started"
          >
          </MobyPlanCheck>
          <MobyPlanCheck
            image={Image2}
            title={isYearly ? "Premium" : "Access Premium"}
            titleColor="black"
            rating={isYearly ? "$175" : "$16.70 per month"}
            ratingBg="#111827"
            text1="Hand Selected Stock Picks"
            text2="Full Access Market Reports"
            bgcolor="#04cbf8"
            width="400px"
            textcolor="black"
            imgBgColor='#212121'
            bgRounded="100%"
            buttomText={isYearly ? "Try it for Free 30 Days" : "Start with Premium"}
            isYearly={isYearly}
          >
            <ul className='list-disc list-inside'>
              <li className='pt-3 text-[12px] md:text-[16px]'>Moby Analyst Team Model Portfolio’s</li>
              <li className='pt-3 text-[12px] md:text-[16px]'>Political Trading Screener ~ Custom Alerts</li>
            </ul>
          </MobyPlanCheck>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => handleArrowClick('left')}
            className={`text-white text-[20px] px-2 pt-8`}
          >
            &lt;
          </button>
          <span className="text-white text-lg font-semibold pt-8">
            {isYearly ? " 2/2 " : " 1/2 "}
          </span>
          <button
            onClick={() => handleArrowClick('right')}
            className={`text-white px-2 pt-8 text-[20px]`}
          >
            &gt;
          </button>
        </div>

        {showButton && (
          <div className="flex justify-center mb-6">
            <button onClick={handleToggle} className="text-center text-[16px] text-white font-semibold bg-blue-500 rounded-lg leading-none w-40 py-2">
              {isYearly ? "Show Monthly" : "Show Yearly"}
            </button>
          </div>
        )}
      </div>

      <hr className='w-[1160px] mx-auto mt-16 opacity-30'/>
    </div>
  );
}
