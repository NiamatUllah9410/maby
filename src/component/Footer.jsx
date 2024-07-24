import React from "react";


export default function Footer() {

    return(
    <div className="w-full bg-[#111827] text-white">
        <hr className="w-fll text-[#fff] opacity-10"/>
        <div className="flex flex-col sm:flex-row px-10 justify-between max-w-[1170px] mx-auto py-4 gap-2 sm:px-2 lg:px-0">
        <div><p className="text-[#ccc] text-sm">© 2024 Moby. All right reserved.</p></div>
        <div><p className="text-[#ccc] text-sm">Privacy Policy</p></div>
        <div><p className="text-[#ccc] text-sm">Terms of Service</p></div>
        </div>
    </div>

)
}