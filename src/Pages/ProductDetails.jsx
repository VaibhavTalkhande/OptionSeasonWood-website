import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { productData } from "../data/productData";

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = productData[slug];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-red-600">Product Not Found</h1>
      </div>
    );
  }

  const [selectedIndex, setSelectedIndex] = useState(null);
  const openModal = (i) => setSelectedIndex(i);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = () =>
    setSelectedIndex((p) => (p > 0 ? p - 1 : product.gallery.length - 1));
  const showNext = () =>
    setSelectedIndex((p) => (p < product.gallery.length - 1 ? p + 1 : 0));

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{product.title} | Option Season Wood</title>
        <meta name="description" content={product.description?.[0] || "Premium wooden pallets"} />
        <meta name="keywords" content={`${product.title}, pallets, wooden pallets, EPAL pallets`} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description?.[0] || ""} />
        <meta property="og:image" content={product.main} />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-[#2C1A7A] hover:text-[#D98539] transition font-semibold"
        >
          <ArrowLeft size={22} /> Back
        </button>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C1A7A] mb-3">
          {product.title}
        </h1>

        <div className="w-24 h-1 bg-[#D98539] mb-10"></div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left Images */}
          <div>
            <img
              src={product.main}
              className="w-full h-80 sm:h-96 object-contain rounded-xl shadow cursor-pointer hover:shadow-lg transition"
              onClick={() => openModal(0)}
            />

            <div className="grid grid-cols-4 gap-4 mt-4">
              {product.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => openModal(index)}
                  className={`h-20 sm:h-24 object-cover rounded cursor-pointer transition 
                    ${selectedIndex === index ? "ring-2 ring-[#D98539]" : "opacity-90 hover:opacity-70"}`}
                />
              ))}
            </div>
          </div>

          {/* Right Details */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow">

            {/* Overview */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1A7A] mb-4">
              Overview
            </h2>

            <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
              {product.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>

            {/* Dimensions */}
            {product.dimensions && (
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-[#D98539] mb-3">
                  Dimensions
                </h3>

                {/* Mobile → stacked | Desktop → row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-700 font-medium">

                  <div>
                    <p className="text-gray-500 text-sm">Length</p>
                    <p className="text-lg">{product.dimensions.length}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Width</p>
                    <p className="text-lg">{product.dimensions.width}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Height</p>
                    <p className="text-lg">{product.dimensions.height}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Weight</p>
                    <p className="text-lg">{product.dimensions.weight}</p>
                  </div>

                </div>
              </div>
            )}

            {/* Other Info */}
            {product.otherInfo?.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-[#D98539] mb-3">
                  Other Info
                </h3>

                <ul className="space-y-2 text-gray-700 text-lg">
                  {product.otherInfo.map((info, idx) => (
                    <li key={idx}>• {info}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {product.specs?.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-[#D98539] mb-3">
                  Specifications
                </h3>

                <ul className="space-y-2 text-gray-700 text-lg">
                  {product.specs.map((spec, idx) => (
                    <li key={idx}>• {spec}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>

        {/* Modal Viewer */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">

            {/* Close Btn */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X size={40} />
            </button>

            {/* Prev */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-10 text-white hover:text-gray-300"
            >
              <ChevronLeft size={50} />
            </button>

            {/* Main Image */}
            <img
              src={product.gallery[selectedIndex]}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />

            {/* Next */}
            <button
              onClick={showNext}
              className="absolute right-4 sm:right-10 text-white hover:text-gray-300"
            >
              <ChevronRight size={50} />
            </button>
          </div>
        )}

      </section>
    </>
  );
}
