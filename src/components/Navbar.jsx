import { useState } from "react";
import { Link, Links } from "react-router-dom";
import img from "../assets/logo2.png"; 
import { Menu, X, Warehouse, Award } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow">

        {/* ----------- TOP BAR FOR LARGE SCREENS ONLY ----------- */}
        <div className="hidden lg:flex w-full bg-white text-gray-700 justify-between items-center px-6 py-2 text-sm">
        <span className="font-medium">OPTION SEASON WOOD COMPANY</span>

        <span className="flex gap-2">
            <span>Harish Patel: 7020788177 |</span>
            <span>Mohit Patel: 8275544766 |</span>
            <span>optionseasonwood@gmail.com</span>
        </span>
        </div>


        {/* ----------- TOP BAR FOR MOBILE ONLY ----------- */}
        <div className="w-full lg:hidden bg-white py-1 text-center text-xs text-gray-700">
        Est. 2008 | IN-758 HT |  GSTIN 27AEEPP3996C1Z9
        </div>


      {/* ------------ MIDDLE BAR (Logo + Icons) ------------ */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <Link to={"/"}>
            <div className="flex items-center">
                <img src={img} alt="Option Season Wood" className="h-9 sm:h-12 w-auto" />
            </div>
          </Link>

          {/* CERTIFICATIONS (Desktop Only) */}
          <div className="hidden md:flex items-center gap-8 text-gray-700">

            {/* Established */}
            <div className="flex items-center gap-2">
              <Warehouse className="h-10 w-10 text-gray-600" />
              <div className="text-sm">
                Established <br />
                <span className="text-orange-600 font-semibold">in year 2008</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-2">
              <Award className="h-10 w-10 text-gray-600" />
              <div className="text-sm">
                IN-<span className="text-orange-600 font-semibold">758 HT</span> &{" "}
                <br />
                GST- 
                <span className="text-orange-600 font-semibold">27AEEPP3996C1Z9</span>
              </div>
            </div>

          </div>

          {/* HAMBURGER (Mobile Only) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-800"
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* ------------ NAVIGATION BAR (Desktop) ------------ */}
      <nav className="hidden md:flex w-full bg-[#C4793F]">
        <ul className="max-w-7xl mx-auto flex items-start gap-12 px-6 py-3 text-white text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className="hover:text-black transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ------------ MOBILE MENU OVERLAY ------------ */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* ------------ MOBILE SLIDE-IN MENU ------------ */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center bg-[#C4793F] text-white px-4 py-3">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Mobile Nav Items */}
        <ul className="flex flex-col px-6 py-6 space-y-6 text-gray-800 font-semibold text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="block hover:text-[#C4793F] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
