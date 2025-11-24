{/* ================= FOUNDER CARD COMPONENT ================= */}
const FounderCard = ({ name, img }) => (
  <div
    className="
      bg-white rounded-xl shadow-md overflow-hidden 
      max-w-sm w-full mx-auto
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

export default FounderCard;