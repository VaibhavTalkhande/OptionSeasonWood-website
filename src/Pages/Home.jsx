// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Truck, ClipboardCheck, Package } from "lucide-react";
import {
  Award,
  Boxes,
  Users,
  Warehouse,
} from "lucide-react"
/*
  NOTE:
  - We're using a split-hero (text left / image right).
  - The hero image & logo are referenced from the uploaded files you provided.
    The file paths are used directly as URLs (per your environment).
    If you host files differently, update the paths accordingly.

  Uploaded assets used:
  - Logo (transparent): /mnt/data/Option Season Wood (Transparent Logo).png
  - Hero/product image (example): /mnt/data/13e8b68c-f8f1-4651-9b5d-4caf4aa88c2c.png
*/

const logoUrl = "/src/assets/logo.png";
const heroImageUrl = "/src/assets/gallery/1.jpeg";
const certWallpaper = "/src/assets/logo.png"; // temporary wallpaper (you can replace with real wallpaper)

export default function Home() {
  // Refs for product section scroll
  const productsRef = useRef(null);
  const qualityRef = useRef(null);
  const certRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref.current) return;
    const top = ref.current.getBoundingClientRect().top + window.scrollY - 80; // account for fixed header
    window.scrollTo({ top, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // demo product cards (images should exist in your src/assets/products folder)
  const demoProducts = [
    {
      title: "Wooden Pallets",
      img: "/src/assets/products/cp2-pallet-1-thumb.jpg",
      href: "/products#wooden",
    },
    {
      title: "Wooden Crates & Boxes",
      img: "/src/assets/products/wooden-crate-1-thumb.jpg",
      href: "/products#crates",
    },
    {
      title: "Refurbished Pallets",
      img: "/src/assets/products/refurbished-pallet-1-thumb.jpg",
      href: "/products#refurbished",
    },
  ];

  // theme colors (you asked primary: #94592C and #C4793F)
  const primary = "#94592C";
  const accent = "#C4793F";

  return (
    <main className="w-full text-gray-800 antialiased">
      {/* HERO: Split Layout */}
      {/* ================= HERO SECTION (REVAMPED) ================= */}
<section className="w-full bg-white py-6 sm:py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

    {/* MOBILE IMAGE FIRST (NO BORDER) */}
    <div className="lg:hidden mt-2 mb-4 rounded-xl" style={{ border: "6px solid #94592C" }}>
      <img
        src={heroImageUrl}
        alt="Hero Pallet"
        className="w-full object-cover rounded-sm"
        style={{ height: "35vh" }}
      />
    </div>

    {/* LEFT CONTENT */}
    <div className="animate-slideInLeft order-2 lg:order-1">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        style={{ color: "#94592C" }}
      >
        Premium Wooden Pallets
        <span
          className="block text-2xl sm:text-3xl font-bold mt-2"
          style={{ color: "#2C1A7A" }}
        >
          Built for Strength & Reliability
        </span>
      </h1>

      <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
        Option Season Wood Company is India's trusted manufacturer of EPAL
        pallets, industrial wooden pallets, crates and complete packaging
        solutions — engineered with durability, precision and eco-friendly
        standards.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-2 sm:gap-4">
        <button
          onClick={() => scrollTo(productsRef)}
          className="px-1.5 sm:px-7 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition"
          style={{ background: "#94592C", color: "white" }}
        >
          Explore Products
        </button>

        <button
          onClick={() => scrollTo(qualityRef)}
          className="px-1.5 sm:px-7 py-3 rounded-lg font-semibold border-2 hover:bg-[#C4793F]/10 transition"
          style={{ borderColor: "#C4793F", color: "#C4793F" }}
        >
          Quality Standards
        </button>
      </div>
    </div>

    {/* DESKTOP IMAGE RIGHT */}
    <div className="hidden lg:flex justify-center animate-slideInRight order-1 lg:order-2">
      <div
        className="rounded-2xl shadow-xl p-0 bg-white"
        style={{ border: "6px solid #94592C" }}
      >
        <img
          src={heroImageUrl}
          alt="Hero Pallet"
          className="w-full h-96 object-contain"
        />
      </div>
    </div>

  </div>
</section>




      {/* ====== Welcome Section (basic company info) ====== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold" style={{ color: primary }}>
              Welcome!
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              For over five decades, Option Season Wood has specialized in
              manufacturing durable wooden pallets and packaging solutions.
              Our heritage of craftsmanship, adherence to international standards
              and customer-first approach make us a preferred partner for industries across the country.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We operate multiple heat-treatment plants and follow ISPM15 & EPAL guidelines.
              Sustainability and quality are central to our process — we refurbish, recycle and responsibly source materials.
            </p>

            <div className="mt-6">
              <Link
                to="/about"
                className="inline-block px-6 py-3 rounded font-semibold"
                style={{ border: `2px solid ${accent}`, color: accent }}
              >
                Read More..
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={logoUrl}
              alt="brand"
              className="w-80 h-80 object-contain"
              style={{ opacity: 0.95 }}
            />
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US SECTION ================= */}
        <section className="w-full bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* SECTION HEADING */}
            <h2
            className="text-3xl sm:text-4xl font-bold text-center"
            style={{ color: "#94592C" }}
            >
            Why Choose Us
            </h2>

            <p className="text-center text-gray-700 max-w-3xl mx-auto mt-3 text-lg">
            We ensure top-tier quality, reliable service, and industry-grade manufacturing
            standards in every pallet we produce.
            </p>

            {/* FEATURES GRID */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* FEATURE 1 */}
            <div className="cursor-pointer group flex flex-col items-center text-center px-6 py-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#C4793F]/10
                                transition-all duration-300 group-hover:bg-[#C4793F]/20 group-hover:scale-105">
                <Truck className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                        color="#C4793F" strokeWidth={1.6} />
                </div>

                <h4
                className="text-xl font-semibold mt-4 transition-colors duration-300 group-hover:text-[#C4793F]"
                style={{ color: "#94592C" }}
                >
                Quality Raw Material
                </h4>

                <p className="text-gray-600 mt-2 text-base leading-relaxed">
                We procure only the superior quality raw materials for the
                manufacturing of our pallets.
                </p>
            </div>

            {/* FEATURE 2 */}
            <div className="cursor-pointer group flex flex-col items-center text-center px-6 py-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#C4793F]/10
                                transition-all duration-300 group-hover:bg-[#C4793F]/20 group-hover:scale-105">
                <ClipboardCheck className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                                color="#C4793F" strokeWidth={1.6} />
                </div>

                <h4
                className="text-xl font-semibold mt-4 transition-colors duration-300 group-hover:text-[#C4793F]"
                style={{ color: "#94592C" }}
                >
                Total Quality Management
                </h4>

                <p className="text-gray-600 mt-2 text-base leading-relaxed">
                Our products undergo multi-stage inspection ensuring durability and 
                world-class standards.
                </p>
            </div>

            {/* FEATURE 3 */}
            <div className="cursor-pointer group flex flex-col items-center text-center px-6 py-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#C4793F]/10
                                transition-all duration-300 group-hover:bg-[#C4793F]/20 group-hover:scale-105">
                <Package className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                        color="#C4793F" strokeWidth={1.6} />
                </div>

                <h4
                className="text-xl font-semibold mt-4 transition-colors duration-300 group-hover:text-[#C4793F]"
                style={{ color: "#94592C" }}
                >
                In-house Logistics & Transport
                </h4>

                <p className="text-gray-600 mt-2 text-base leading-relaxed">
                We manage our own fleet of vehicles ensuring safe, timely, and 
                hassle-free deliveries.
                </p>
            </div>

            </div>

        </div>
        </section>


      {/* ====== Our Products Section ====== */}
      <section
  ref={productsRef}
  className="max-w-7xl mx-auto px-6 lg:px-10 py-14"
>
  {/* Heading */}
  <h2
    className="text-3xl font-bold text-center"
    style={{ color: primary }}
  >
    Our Products
  </h2>

  <p className="text-center text-gray-700 max-w-3xl mx-auto mt-4">
    We manufacture a complete range of EPAL pallets, wooden pallets, 
    crates, boxes and refurbished pallet solutions. Explore our core categories below.
  </p>

  {/* PRODUCT GRID – 4 Categories */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "EPAL Pallets",
        img: "/src/assets/products/epal-euro-1-thumb.jpg",
        href: "/products#epal",
      },
      {
        title: "Wooden Pallets",
        img: "/src/assets/products/reversible-pallet-1-thumb.jpg",
        href: "/products#wooden",
      },
      {
        title: "Crates & Boxes",
        img: "/src/assets/products/wooden-crate-1-thumb.jpg",
        href: "/products#crates",
      },
      {
        title: "Refurbished Pallets",
        img: "/src/assets/products/refurbished-pallet-1.jpg",
        href: "/products#refurbished",
      },
    ].map((p, idx) => (
      <Link
        key={idx}
        to={p.href}
        className="
          group block bg-white rounded-xl overflow-hidden 
          shadow-md hover:shadow-xl transition-all duration-300 
          border-none hover:border-[#C4793F]
          hover:-translate-y-2 hover:scale-[1.03]
        "
      >
        {/* Image Container */}
        <div className="p-6 flex items-center justify-center h-48 overflow-hidden">
          <img
            src={p.img}
            alt={p.title}
            className="object-contain max-h-full transition-all duration-300 group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <div className="p-6 text-center">
          <h3
            className="text-xl font-semibold transition-all duration-300 group-hover:text-[#94592C]"
            style={{ color: accent }}
          >
            {p.title}
          </h3>
        </div>
      </Link>
    ))}
  </div>

  {/* VIEW ALL BUTTON */}
  <div className="mt-10 text-center">
    <Link
      to="/products"
      className="
        inline-block px-10 py-3 rounded-lg font-semibold border-2 
        transition-all duration-300 cursor-pointer hover:bg-[#C4793F]/10 hover:border-[#94592C] hover:text-[#94592C]
      "
      style={{ borderColor: accent, color: accent }}
    >
      View All Products
    </Link>
  </div>
      </section>


      {/* ====== Quality Standards Section ====== */}
        <section
        ref={qualityRef}
        className="w-full bg-white py-16 px-6 lg:px-12"
        >
        {/* Heading */}
        <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-6"
            style={{ color: "#94592C" }}
        >
            Quality Standards
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            We follow globally compliant manufacturing standards with certified
            heat-treatment, strict quality checks and advanced logistics to ensure
            top-tier wooden pallet solutions.
        </p>

        {/* ICON GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            
            {/* CARD 1 */}
            <div className="cursor-pointer group bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center border-none hover:border-[#C4793F]">
            <Award
                size={50}
                className="mx-auto mb-4 text-[#C4793F] group-hover:scale-110 transition-transform"
            />
            <h3 className="font-semibold text-lg" style={{ color: "#94592C" }}>
                12 Years of Expertise
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
                Delivering unmatched quality backed by decades of manufacturing experience.
            </p>
            </div>

            {/* CARD 2 */}
            <div className="cursor-pointer group bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center border-none hover:border-[#C4793F]">
            <Boxes
                size={50}
                className="mx-auto mb-4 text-[#C4793F] group-hover:scale-110 transition-transform"
            />
            <h3 className="font-semibold text-lg" style={{ color: "#94592C" }}>
                1,400,000+ Pallets / Year
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
                High-capacity production to meet industrial and international demands.
            </p>
            </div>

            {/* CARD 3 */}
            <div className="cursor-pointer group bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center border-none hover:border-[#C4793F]">
            <Users
                size={50}
                className="mx-auto mb-4 text-[#C4793F] group-hover:scale-110 transition-transform"
            />
            <h3 className="font-semibold text-lg" style={{ color: "#94592C" }}>
                Skilled Workforce
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
                Highly trained team with 200+ professionals ensuring precise craftsmanship.
            </p>
            </div>

            {/* CARD 4 */}
            <div className="cursor-pointer group bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center border-none hover:border-[#C4793F]">
            <Warehouse
                size={50}
                className="mx-auto mb-4 text-[#C4793F] group-hover:scale-110 transition-transform"
            />
            <h3 className="font-semibold text-lg" style={{ color: "#94592C" }}>
                6+ Acre Facilities
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
                Large-scale manufacturing & storage across multiple locations.
            </p>
            </div>

        </div>
        </section>


      {/* ====== Certificates Section ====== */}
        <section
        ref={certRef}
        className="max-w-7xl mx-auto px-6 lg:px-10 py-14"
        >
        <h2
            className="text-3xl font-bold text-center"
            style={{ color: "#94592C" }}
        >
            Certificates
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mt-4">
            We are certified and comply with internationally recognized
            quality and safety standards ensuring reliable and export-ready
            wooden pallets.
        </p>

        <div className="cursor-pointer mt-10 flex justify-center">
            <div
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-none"
            style={{ borderColor: "#C4793F" }}
            >
            <img
                src={"/src/assets/certificate.jpeg"}
                alt="Certification"
                className="w-full h-auto object-contain"
            />
            </div>
        </div>
        </section>

    </main>
  );
}

/* ---------- small helper components ---------- */

function StatCard({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow" aria-hidden>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold" style={{ color: "#33221a" }}>{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function StatIcon({ svg, title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 flex items-center justify-center rounded-md bg-white shadow">
        {svg}
      </div>
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
      </div>
    </div>
  );
}
