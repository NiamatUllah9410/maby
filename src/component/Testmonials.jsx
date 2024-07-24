import React from "react";
import TestimonialsCard from "./ui/TestimonialsCard";
import CollegeInvestor from '../assets/college-investor-logo-black 1.png';
import Star from '../assets/Frame 483.png';
import Monkey from '../assets/modest_money_logo 1.png';
import WellStreet from '../assets/logo 1.png';

export default function Testimonials() {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-[18px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-bold text-center mt-16 mb-10">
        Testimonials that speak louder than words
      </h2>

      <hr className="text-[#fff] opacity-10 m-auto max-w-[1160px] pb-10" />

      <div className="flex flex-col lg:flex-row justify-center max-w-[1160px] gap-3 m-auto">
        <TestimonialsCard
          image={CollegeInvestor}
          rating={Star}
          title="Moby Finance Review: Jargon Free Investment Research"
          description="Moby gives you a leg up by providing access to top-tier investing research that is broken down into understandable formats. For active investors looking for a jargon-free platform, Moby might be the right fit."
        />
        <TestimonialsCard
          image={WellStreet}
          rating={Star}
          title="Motley Fool vs Moby: Which Stock Picking Service is Better?"
          description="Each of them has a different investing approach, but every stock picking service has the same goal: Outperformance. To that end, Motley Fool has been almost unbeatable for over 20 years (more on this below). But Moby has its own track record..."
        />
        <TestimonialsCard
          image={Monkey}
          rating={Star}
          title="Moby Invest App Review 2024"
          description="Moby App is more than just a market research tool; it’s an educational platform that empowers investors with the knowledge and insights needed to make informed decisions. Crafted with a mobile-first approach, Moby brings the expertise of Wall Street to your fingertips, offering comprehensive tools for a successful investing journey."
        />
      </div>
    </div>
  );
}
