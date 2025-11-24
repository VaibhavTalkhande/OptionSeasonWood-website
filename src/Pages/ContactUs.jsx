// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useEffect } from "react";

const primary = "#94592C";  // medium wood brown
const accent = "#C4793F";   // light warm brown

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold"
        style={{ color: primary }}
      >
        Contact Us
      </motion.h1>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
        {/* LEFT SIDE — CONTACT DETAILS */}
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
        >
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-wide"
            style={{ color: "#94592C" }}>
            Get in <span style={{ color: "#C4793F" }}>Touch</span>
        </h2>

        {/* Contact List */}
        <div className="space-y-5">

            {/* Harish Patel */}
            <a href="tel:7020788177"
            className="flex items-center gap-4 group transition">
            <Phone size={26} color="#94592C" />
            <div>
                <p className="text-lg font-semibold text-gray-800 group-hover:text-[#94592C] transition">
                Harish Patel
                </p>
                <p className="text-gray-700 group-hover:text-[#C4793F] transition">
                +91 70207 88177
                </p>
            </div>
            </a>

            {/* Mohit Patel */}
            <a href="tel:8275544766"
            className="flex items-center gap-4 group transition">
            <Phone size={26} color="#94592C" />
            <div>
                <p className="text-lg font-semibold text-gray-800 group-hover:text-[#94592C] transition">
                Mohit Patel
                </p>
                <p className="text-gray-700 group-hover:text-[#C4793F] transition">
                +91 82755 44766
                </p>
            </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/7020788177"
            target="_blank"
            className="flex items-center gap-4 group transition">
            <MessageCircle size={26} color="#C4793F" />
            <div>
                <p className="text-lg font-semibold text-gray-800 group-hover:text-[#94592C] transition">
                WhatsApp
                </p>
                <p className="text-gray-700 group-hover:text-[#C4793F] tracking-wide transition">
                +91 70207 88177
                </p>
            </div>
            </a>

            {/* Email */}
            <a href="mailto:optionseasonwood@gmail.com"
            className="flex items-center gap-4 group transition">
            <Mail size={26} color="#C4793F" />
            <div>
                <p className="text-lg font-semibold text-gray-800 group-hover:text-[#94592C] transition">
                Email
                </p>
                <p className="text-gray-700 group-hover:text-[#C4793F] transition">
                optionseasonwood@gmail.com
                </p>
            </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4">
            <MapPin size={26} color="#94592C" />
            <p className="text-gray-700 leading-relaxed max-w-sm">
                GROUND FLOOR, PLOT NO.6, BACHUBEN VELJI PATEL, BARADWARI TANK ROAD,
                NEAR CENTRAL INDIA PUBLIC SCHOOL, VILLAGE-KAPSI BUJURG POWARI,
                Nagpur, Maharashtra, 440035
            </p>
            </div>

        </div>
        </motion.div>


        {/* RIGHT SIDE — FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl shadow-xl p-8 border"
          style={{ borderColor: accent }}
        >
          <h3
            className="text-2xl font-semibold mb-6 text-center"
            style={{ color: primary }}
          >
            Send Inquiry
          </h3>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_WEB3FORMS_KEY"
            />

            <InputField label="Name" name="name" placeholder="Enter Name" />
            <InputField label="Phone No." name="phone" placeholder="Enter Phone Number" />
            <InputField label="Email Id." name="email" placeholder="Enter Email" />

            <div>
              <label className="block text-gray-700 mb-1">Message / Query:</label>
              <textarea
                name="message"
                required
                placeholder="Enter your message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: accent }}
                rows={5}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg font-semibold shadow-md"
              style={{
                background: primary,
                color: "white",
              }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* -----------------------------------------
   SMALL REUSABLE COMPONENTS
----------------------------------------- */

function ContactCard({ icon, title, value, href }) {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      href={href}
      className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl border transition"
      style={{ borderColor: "#E7D5C4" }}
    >
      {icon}
      <div>
        <p className="font-semibold" style={{ color: "#94592C" }}>
          {title}
        </p>
        <p className="text-gray-700 text-sm">{value}</p>
      </div>
    </motion.a>
  );
}

function InputField({ label, name, placeholder }) {
  return (
    <div>
      <label className="block text-gray-700 mb-1">{label}:</label>
      <input
        type="text"
        name={name}
        required
        placeholder={placeholder}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
        style={{ borderColor: accent }}
      />
    </div>
  );
}
