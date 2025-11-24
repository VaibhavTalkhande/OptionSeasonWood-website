import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo.png"; 
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
        <div className="hidden md:flex w-full bg-white text-gray-700 justify-between items-center px-6 py-2 text-sm">
        <span>OPTION SEASON WOOD COMPANY</span>
        <span>+91 93200 99981 | info@jaywoodpallet.com</span>
        </div>

        {/* ----------- TOP BAR FOR MOBILE ONLY ----------- */}
        <div className="w-full md:hidden bg-gray-100 py-1 text-center text-xs text-gray-700">
        Est. 1966 | EPAL IND-006 & IND-016 | ISO 9001:2015
        </div>


      {/* ------------ MIDDLE BAR (Logo + Icons) ------------ */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <div className="flex items-center">
            <img src={img} alt="Option Season Wood" className="h-14 sm:h-16 w-auto" />
          </div>

          {/* CERTIFICATIONS (Desktop Only) */}
          <div className="hidden md:flex items-center gap-8 text-gray-700">

            {/* Established */}
            <div className="flex items-center gap-2">
              <Warehouse className="h-10 w-10 text-gray-600" />
              <div className="text-sm">
                Established <br />
                <span className="text-orange-600 font-semibold">in year 1966</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-2">
              <Award className="h-10 w-10 text-gray-600" />
              <div className="text-sm">
                EPAL <span className="text-orange-600 font-semibold">IND-006</span> &{" "}
                <span className="text-orange-600 font-semibold">IND-016</span>
                <br />
                Certified{" "}
                <span className="text-orange-600 font-semibold">ISO 9001:2015</span>
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
      <nav className="hidden md:flex w-full bg-gray-800">
        <ul className="max-w-7xl mx-auto flex items-start gap-12 px-6 py-3 text-white text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className="hover:text-orange-500 transition">
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
        <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-3">
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
                className="block hover:text-orange-600 transition"
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
