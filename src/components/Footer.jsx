import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import logo from "../assets/footer.png";

const primary = "#94592C";
const accent = "#C4793F";

export default function Footer() {
  return (
    <footer className="w-full text-white" style={{ background: "#3A2516" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* ------------------------------------------------ */}
        {/* COMPANY INFO */}
        {/* ------------------------------------------------ */}
        <div>
          <img
            src={logo}
            alt="Open Season Wood"
            className="w-28 sm:w-32 md:w-40 object-contain mb-4"
          />

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Open Season Wood is a trusted manufacturer of high-quality wooden pallets,
            custom crates & boxes & sustainable packaging solutions. With a commitment
            to quality and eco-friendly manufacturing, we deliver durable pallet
            solutions across India.
          </p>
        </div>

        {/* ------------------------------------------------ */}
        {/* QUICK LINKS */}
        {/* ------------------------------------------------ */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: accent }}
          >
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300 text-base">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Products", "/products"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact"],
            ].map(([label, link]) => (
              <li key={label}>
                <a
                  href={link}
                  className="hover:text-white transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------------------------------------ */}
        {/* CONTACT INFO */}
        {/* ------------------------------------------------ */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: accent }}
          >
            Get in Touch
          </h3>

          <div className="space-y-4 text-gray-300 text-base">

            <ContactItem
              icon={<Phone size={22} color={accent} />}
              label="Harish Patel"
              value="7020788177"
              href="tel:7020788177"
            />

            <ContactItem
              icon={<Phone size={22} color={accent} />}
              label="Mohit Patel"
              value="8275544766"
              href="tel:8275544766"
            />

            <ContactItem
              icon={<MessageCircle size={22} color={accent} />}
              label="WhatsApp"
              value="7020788177"
              href="https://wa.me/7020788177"
            />

            <ContactItem
              icon={<Mail size={22} color={accent} />}
              label="Email"
              value="optionseasonwood@gmail.com"
              href="mailto:optionseasonwood@gmail.com"
            />

            {/* LOCATION */}
            <div className="flex gap-3 items-start">
              <MapPin size={32} color={accent} className="mt-1" />
              <p className="leading-relaxed text-sm sm:text-base">
                GROUND FLOOR, PLOT NO.6, BACHUBEN VELJI PATEL,<br />
                BARADWARI TANK ROAD, NEAR CENTRAL INDIA PUBLIC SCHOOL,<br />
                VILLAGE-KAPSI BUJURG POWARI,<br />
                Nagpur, Maharashtra – 440035.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* ------------------------------------------------ */}
      {/* FOOTER BOTTOM BAR */}
      {/* ------------------------------------------------ */}
      <div className="border-t border-white/20 mt-6 py-4 px-6 flex flex-col md:flex-row justify-between text-gray-300 text-sm">

        {/* Left side */}
        <p className="text-center md:text-left mb-2 md:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold">Open Season Wood</span>.
          All rights reserved.
        </p>

        {/* Right side */}
        <p className="text-center md:text-right">
          Crafted with ❤️ by{" "}
            QuickFusion Innovations
        </p>

      </div>
    </footer>
  );
}

/* ------------------------------------------------ */
/* REUSABLE CONTACT ITEM */
/* ------------------------------------------------ */
function ContactItem({ icon, label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 hover:text-white transition cursor-pointer"
    >
      {icon}
      <span>
        <span className="font-medium">{label}: </span>
        {value}
      </span>
    </a>
  );
}
