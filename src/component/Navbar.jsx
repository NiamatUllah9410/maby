import React from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-[#212121] w-100% flex justify-center items-center pt-8 pb-6 px-5">
      <div className="lg:flex justify-center items-center hidden">
        <img src={Logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
    </nav>
  );
}
