import React from "react";

const HeroSection = () => {
  return (
    <header className="w-full border-b">
      {/* Top Header */}
      <div className="flex justify-between items-center px-10 py-4 text-sm">
        <p className="text-gray-600">
          A Viren Chheda Group Company.
        </p>

        <div className="flex items-center space-x-6 text-gray-700">
          <span className="font-semibold">+91 93200 99981</span>
          <span>|</span>
          <a href="mailto:info@jaywoodpallet.com" className="hover:text-orange-600">
            info@jaywoodpallet.com
          </a>
        </div>
      </div>

      {/* Logo Row */}
      <div className="flex justify-between items-center px-10 py-6">
        {/* Left Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/assets/logo.png"
            alt="Jaywood Pallet"
            className="h-16 object-contain"
          />
        </div>

        {/* Icons + Company Info */}
        <div className="flex items-center space-x-12">

          {/* Established */}
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <img src="/warehouse-icon.png" className="h-6" alt="" />
              <p className="text-gray-700">Established</p>
            </div>
            <p className="text-orange-600 font-semibold text-sm">In the year 1966</p>
          </div>

          {/* Certificate */}
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <img src="/award-icon.png" className="h-6" alt="" />
              <p className="text-gray-700">
                EPAL <span className="text-orange-600">IND-006</span> & <span className="text-orange-600">IND-016</span>
              </p>
            </div>
            <p className="text-orange-600 font-semibold text-sm">Certified ISO 9001:2015</p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#494949] text-white">
        <ul className="flex justify-center gap-12 py-3 font-semibold tracking-wide">
          <li className="hover:text-orange-500 cursor-pointer">HOME</li>
          <li className="hover:text-orange-500 cursor-pointer">ABOUT US</li>
          <li className="hover:text-orange-500 cursor-pointer">PRODUCTS</li>
          <li className="hover:text-orange-500 cursor-pointer">GALLERY</li>
          <li className="hover:text-orange-500 cursor-pointer">CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
};

export default HeroSection;
