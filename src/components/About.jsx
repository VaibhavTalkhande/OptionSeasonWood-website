const primary = "#94592C";
const accent = "#C4793F";
import about from "../assets/gallery/4.jpeg";
import mohit from "../assets/founder1.jpeg";
import harish from "../assets/founder2.jpeg";
import image from "../assets/logo.png";
export default function About() {
  return (
    <main className="w-full bg-white">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="w-full bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: primary }}
            >
              About Us
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Option Season Wood is a trusted Indian manufacturer of high-quality 
              wooden pallets, crates, and industrial packaging solutions. With years 
              of expertise, we are committed to providing durable, safe, and 
              long-lasting wood packaging for industries across the country.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our operations follow strict ISPM-15 heat-treatment, 
              anti-fungal processing, quality inspection, and sustainable 
              timber sourcing. We ensure that every pallet we produce 
              is strong, reliable, and built for demanding logistics.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              className="rounded-2xl shadow-xl overflow-hidden"
              style={{ border: `6px solid ${primary}` }}
            >
              <img
                src={about}
                alt="Factory"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===================== CORE TEAM SECTION ===================== */}
        <section className="max-w-7xl flex flex-col justify-center items-center mx-auto px-6 lg:px-12 py-16">
        <h2
            className="text-center text-3xl sm:text-4xl font-extrabold"
            style={{ color: primary }}
        >
            Our Core Team
        </h2>

        <p className="text-center text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-lg">
            The leadership at Option Season Wood is driven by experience, dedication,
            and a strong commitment to quality and innovation.
        </p>

        <div className="max-w-7xl flex flex-col sm:flex-row justify-center items-center gap-12 mt-12">
            <FounderCard 
            name="Harish Patel" 
            img={harish}
            />
            <FounderCard 
            name="Mohit Patel" 
            img={mohit} 
            />
        </div>
        </section>

    </main>
  );
}


{/* ================= FOUNDER CARD COMPONENT ================= */}
const FounderCard = ({ name, img }) => (
  <div
    className="
      bg-white rounded-xl shadow-md overflow-hidden 
      max-w-sm w-[300px] mx-auto
      transition-all duration-300
      hover:shadow-2xl hover:-translate-y-2 hover:border-[#94592C]/80
    "
    style={{ border: `3px solid ${accent}` }}
  >
    <img
      src={img}
      alt={name}
      className="h-64 w-full object-cover"
    />

    <div className="p-5 text-center">
      <h3 className="text-xl font-bold" style={{ color: primary }}>
        {name}
      </h3>
      <p className="text-gray-700 text-sm mt-1">Co-Founder</p>
    </div>
  </div>
);
