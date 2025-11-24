// src/components/Loader.jsx
import React from "react";
import favicon from "../assets/favicon.png";
export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white/90 flex flex-col items-center justify-center z-[9999] backdrop-blur-sm">

      {/* Logo animation */}
      <img
        src={favicon}
        className="w-28 h-28 drop-shadow-xl"
      />

      {/* Text */}
      <p className="mt-4 text-xl font-semibold text-[#C4793F] tracking-wide">
        Loading <span className="text-5xl animate-pulse">.</span><span className="text-5xl animate-pulse">.</span><span className="text-5xl animate-pulse">.</span>
      </p>
    </div>
  );
}
