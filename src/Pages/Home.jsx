// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, ClipboardCheck, Package, Award, Boxes, Users, Warehouse } from "lucide-react";
import logoUrl from "../assets/logo.png";
import heroImageUrl from "../assets/gallery/1.jpeg";
import europalletthumb from "../assets/products/epal-euro-1-thumb.jpg";
import woodenpalletthumb from "../assets/products/reversible-pallet-1-thumb.jpg";
import cratethumb from "../assets/products/wooden-crate-1-thumb.jpg";
import refurbishedthumb from "../assets/products/refurbished-pallet-1.jpg";

export default function Home() {
  const productsRef = useRef(null);
  const qualityRef = useRef(null);
  const certRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref.current) return;
    const top = ref.current.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const primary = "#94592C";
  const accent = "#C4793F";

  // Framer Motion Variants
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const scaleUp = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

  return (
    <main className="w-full text-gray-800 antialiased">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-white py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Mobile Image */}
          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:hidden mt-2 mb-4 rounded-xl"
            style={{ border: "6px solid #94592C" }}
          >
            <img src={heroImageUrl} alt="Hero Pallet" className="w-full rounded-sm object-cover" style={{ height: "35vh" }} />
          </motion.div>

          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ color: primary }}>
              Premium Wooden Pallets
              <span className="block text-2xl sm:text-3xl font-bold mt-2" style={{ color: "#2C1A7A" }}>
                Built for Strength & Reliability
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Option Season Wood Company is India's trusted manufacturer of EPAL pallets, industrial wooden pallets, crates and complete packaging solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-2 sm:gap-4"
            >
              <button
                onClick={() => scrollTo(productsRef)}
                className="px-1.5 sm:px-7 py-3 rounded-lg cursor-pointer font-semibold shadow-md transition hover:shadow-xl"
                style={{ background: primary, color: "white" }}
              >
                Explore Products
              </button>

              <button
                onClick={() => scrollTo(qualityRef)}
                className="px-1.5 sm:px-7 py-3 cursor-pointer rounded-lg font-semibold border-2 transition hover:bg-[#C4793F]/10"
                style={{ borderColor: accent, color: accent }}
              >
                Quality Standards
              </button>
            </motion.div>
          </motion.div>

          {/* Desktop Hero Image */}
          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center order-1 lg:order-2"
          >
            <div className="rounded-2xl shadow-xl bg-white" style={{ border: `6px solid ${primary}` }}>
              <img src={heroImageUrl} className="w-full h-96 object-contain" alt="Hero Pallet" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold"
              style={{ color: primary }}
            >
              Welcome!
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-700 leading-relaxed"
            >
              For over five decades, Option Season Wood has specialized in manufacturing durable wooden pallets...
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-gray-700 leading-relaxed"
            >
              We operate multiple heat-treatment plants and follow ISPM15 & EPAL guidelines...
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6"
            >
              <Link
                to="/about"
                className="inline-block px-6 py-3 rounded font-semibold"
                style={{ border: `2px solid ${accent}`, color: accent }}
              >
                Read More..
              </Link>
            </motion.div>
          </div>

          {/* Welcome Logo */}
          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <img src={logoUrl} alt="brand" className="w-80 h-80 object-contain opacity-95" />
          </motion.div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="w-full bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center"
            style={{ color: primary }}
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-gray-700 max-w-3xl mx-auto mt-3 text-lg"
          >
            We ensure top-tier quality, reliable service, and industry-grade manufacturing.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[ 
              { icon: <Truck color={accent} />, title: "Quality Raw Material", desc: "Superior materials..." },
              { icon: <ClipboardCheck color={accent} />, title: "Total Quality Management", desc: "Multi-level inspections..." },
              { icon: <Package color={accent} />, title: "In-house Logistics", desc: "Safe, timely transport..." }
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="cursor-pointer group flex flex-col items-center text-center px-6 py-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#C4793F]/10 transition-all">
                  {f.icon}
                </div>

                <h4 className="text-xl font-semibold mt-4" style={{ color: primary }}>{f.title}</h4>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= OUR PRODUCTS ================= */}
      <section ref={productsRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center"
          style={{ color: primary }}
        >
          Our Products
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-gray-700 max-w-3xl mx-auto mt-4"
        >
          We manufacture EPAL pallets, wooden pallets, crates, boxes, and more.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "EPAL Pallets", img: europalletthumb , href: "/products" },
            { title: "Wooden Pallets", img: woodenpalletthumb, href: "/products" },
            { title: "Crates & Boxes", img: cratethumb, href: "/products" },
            { title: "Refurbished Pallets", img: refurbishedthumb, href: "/products" },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                to={p.href}
                className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]"
              >
                <div className="p-6 flex items-center justify-center h-48 overflow-hidden">
                  <img src={p.img} className="object-contain max-h-full transition group-hover:scale-110" alt={p.title} />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold group-hover:text-[#94592C]" style={{ color: accent }}>
                    {p.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            to="/products"
            className="inline-block px-10 py-3 rounded-lg font-semibold border-2 transition hover:bg-[#C4793F]/10 hover:text-[#94592C]"
            style={{ borderColor: accent, color: accent }}
          >
            View All Products
          </Link>
        </motion.div>

      </section>

      {/* ================= QUALITY STANDARDS ================= */}
      <section ref={qualityRef} className="w-full bg-white py-16 px-6 lg:px-12">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-6"
          style={{ color: primary }}
        >
          Quality Standards
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          We follow globally compliant standards with certified heat-treatment and strict quality checks.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[ 
            { icon: <Award size={50} />, title: "12 Years of Expertise", desc: "Decades of high-quality manufacturing." },
            { icon: <Boxes size={50} />, title: "1,400,000+ Pallets / Year", desc: "Large-scale industrial production." },
            { icon: <Users size={50} />, title: "Skilled Workforce", desc: "Over 200+ trained professionals." },
            { icon: <Warehouse size={50} />, title: "6+ Acre Facilities", desc: "Large operational manufacturing zones." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl hover:scale-105 transition"
            >
              <div className="text-[#C4793F] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg" style={{ color: primary }}>{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ================= CERTIFICATES ================= */}
      <section ref={certRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center"
          style={{ color: primary }}
        >
          Certificates
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-gray-700 max-w-3xl mx-auto mt-4"
        >
          Certified and compliant with international manufacturing standards.
        </motion.p>

        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <div className="rounded-xl shadow-lg overflow-hidden">
            <img src="/src/assets/certificate.jpeg" className="w-full h-auto object-contain" />
          </div>
        </motion.div>
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
