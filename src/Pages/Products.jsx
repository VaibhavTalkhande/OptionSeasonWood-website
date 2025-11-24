import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const epalRef = useRef(null);
  const woodenRef = useRef(null);
  const cratesRef = useRef(null);
  const refurbishedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollTo = (ref) => {
    if (!ref.current) return;
    const offset = 150;
    const topPos = ref.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
  };

  /* ------------------ PRODUCT DATA ------------------ */

  const epalProducts = [
    { name: "EPAL EURO Pallets", size: "(800 x 1200 x 144 mm)", image: "/src/assets/products/epal-euro-1-thumb.jpg", slug: "epal-euro" },
    { name: "EPAL CP1 Pallets", size: "(1000 x 1200 x 138 mm)", image: "/src/assets/products/cp1-pallet-1-thumb.jpg", slug: "cp1-pallet" },
    { name: "EPAL CP3 Pallets", size: "(1140 x 1140 x 138 mm)", image: "/src/assets/products/cp3-pallet-1-thumb.jpg", slug: "cp3-pallet" },
    { name: "EPAL CP9 Pallets", size: "(1140 x 1140 x 156 mm)", image: "/src/assets/products/cp9-pallet-1-thumb.jpg", slug: "cp9-pallet" },
  ];

  const woodenProducts = [
    { name: "CP2 Pallets", size: "(800 x 1200 x 141 mm)", image: "/src/assets/products/cp2-pallet-1-thumb.jpg", slug: "cp2-pallet" },
    { name: "CP4 Pallets", size: "(1100 x 1300 x 138 mm)", image: "/src/assets/products/cp4-pallet-1-thumb.jpg", slug: "cp4-pallet" },
    { name: "CP5 Pallets", size: "(760 x 1140 x 138 mm)", image: "/src/assets/products/cp5-pallet-1-thumb.jpg", slug: "cp5-pallet" },
    { name: "CP6 Pallets", size: "(1000 x 1200 x 156 mm)", image: "/src/assets/products/cp6-pallet-1-thumb.jpg", slug: "cp6-pallet" },
    { name: "CP7 Pallets", size: "(1100 x 1300 x 156 mm)", image: "/src/assets/products/cp7-pallet-1-thumb.jpg", slug: "cp7-pallet" },
    { name: "CP8 Pallets", size: "(1140 x 1140 x 156 mm)", image: "/src/assets/products/cp8-pallet-1-thumb.jpg", slug: "cp8-pallet" },
    { name: "GMA Pallets", size: "", image: "/src/assets/products/gma-pallet-1-thumb.jpg", slug: "gma-pallet" },
    { name: "2 Way Pallets", size: "", image: "/src/assets/products/2way-pallet-1-thumb.jpg", slug: "2way-pallet" },
    { name: "4 Way Pallets", size: "", image: "/src/assets/products/4way-pallet-1-thumb.jpg", slug: "4way-pallet" },
    { name: "Non-Reversible Pallets", size: "", image: "/src/assets/products/non-reversible-pallet-1-thumb.jpg", slug: "non-reversible-pallet" },
    { name: "Reversible Pallets", size: "", image: "/src/assets/products/reversible-pallet-1-thumb.jpg", slug: "reversible-pallet" },
  ];

  const cratesProducts = [
    { name: "Wooden Crates", image: "/src/assets/products/wooden-crate-1-thumb.jpg", slug: "wooden-crates" },
    { name: "Pallet Collar / Boxes", image: "/src/assets/products/pallet-collar-1-thumb.jpg", slug: "pallet-collar" },
  ];

  const refurbishedProducts = [
    { name: "Refurbished Pallets", image: "/src/assets/products/refurbished-pallet.jpg", slug: "refurbished-pallets" },
  ];

  /* ------------------ PRODUCT CARD ------------------ */

  const ProductCard = ({ item }) => (
    <Link to={`/products/${item.slug}`}>
      <div className="border rounded-xl bg-white p-5 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
        <div className="h-48 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="text-xl font-semibold text-[#D98539] mt-4 group-hover:text-[#b56822] transition">
          {item.name}
        </h3>

        {item.size && <p className="text-gray-600 text-sm mt-1">{item.size}</p>}

        <p className="mt-3 text-sm font-medium text-gray-800 group-hover:text-[#D98539]">
          More Details →
        </p>
      </div>
    </Link>
  );

  return (
    <main className="w-full">

      {/* ------------------ INTRO SECTION (Responsive like screenshot) ------------------ */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-[#C4793F] mb-6">Products</h1>

        {/* Buttons */}
        {/* Category Buttons */}
        <div className="w-full mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:gap-4 gap-3">

            <button
            onClick={() => scrollTo(epalRef)}
            className="w-full md:w-auto px-5 py-2 border border-[#D98539] text-[#D98539] cursor-pointer 
                        font-semibold rounded md:hover:bg-orange-50 transition text-sm sm:text-base"
            >
            EPAL Pallets
            </button>

            <button
            onClick={() => scrollTo(woodenRef)}
            className="w-full md:w-auto px-5 py-2 border border-[#D98539] text-[#D98539] cursor-pointer 
                        font-semibold rounded md:hover:bg-orange-50 transition text-sm sm:text-base"
            >
            Wooden Pallets
            </button>

            <button
            onClick={() => scrollTo(cratesRef)}
            className="w-full md:w-auto px-5 py-2 border border-[#D98539] text-[#D98539] cursor-pointer 
                        font-semibold rounded md:hover:bg-orange-50 transition text-sm sm:text-base"
            >
            Crates & Boxes
            </button>

            <button
            onClick={() => scrollTo(refurbishedRef)}
            className="w-full md:w-auto px-5 py-2 border border-[#D98539] text-[#D98539] cursor-pointer 
                        font-semibold rounded md:hover:bg-orange-50 transition text-sm sm:text-base"
            >
            Refurbished
            </button>

        </div>
        </div>


        {/* Text + Image Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-gray-700 leading-relaxed text-lg">
            <p>
              Option Season Wood Company incorporates a vast collection ranging from corrugated cardboard products to
              wooden pallets that meet the functional expectations and make shipping effortless.
            </p>
            <p className="mt-4">
              We hold a high reputation in manufacturing wooden pallets as per ISPM15 ensuring strong durability.
              We manufacture wooden pallets as per ISMP15 which guarantee the optimum quality pallets. We hold a great reputation in manufacturing and supplying wooden pallets and wooden packaging products across the country as all our products undergo several phases of treatments.
            </p>
            <p className="mt-4">
              All wooden products go through heat treatment, anti-fungal & anti-borer processes ensuring long-term
              quality and performance.
            </p>
          </div>

          <img
            src="/src/assets/products/products-main.jpg"
            className="rounded-lg shadow-md object-cover w-full h-64 md:h-72"
            alt="Products"
          />
        </div>
      </section>

      {/* ------------------ EPAL ------------------ */}
      <section ref={epalRef} className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold text-[#C4793F] mb-10">EPAL Pallets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {epalProducts.map((p, i) => <ProductCard key={i} item={p} />)}
        </div>
      </section>
      {/* ------------------ WOODEN ------------------ */}
      <section ref={woodenRef} className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="text-4xl font-bold text-[#C4793F] mb-10">Wooden Pallets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {woodenProducts.map((p, i) => <ProductCard key={i} item={p} />)}
        </div>
      </section>

      {/* ------------------ CRATES ------------------ */}
      <section ref={cratesRef} className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="text-4xl font-bold text-[#C4793F] mb-10">Wooden Crates & Boxes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cratesProducts.map((p, i) => <ProductCard key={i} item={p} />)}
        </div>
      </section>

      {/* ------------------ REFURBISHED ------------------ */}
      <section ref={refurbishedRef} className="max-w-7xl mx-auto px-6 mt-24 mb-32">
        <h2 className="text-4xl font-bold text-[#C4793F] mb-10">Refurbished Pallets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {refurbishedProducts.map((p, i) => <ProductCard key={i} item={p} />)}
        </div>
      </section>

    </main>
  );
}
