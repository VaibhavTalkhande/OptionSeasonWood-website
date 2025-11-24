import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "src\\assets\\gallery\\1.jpeg",
  "src\\assets\\gallery\\2.jpeg",
  "src\\assets\\gallery\\3.jpeg",
  "src\\assets\\gallery\\4.jpeg",
  "src\\assets\\gallery\\5.jpeg",
  "src\\assets\\gallery\\6.jpeg",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="max-w-7xl relative mx-auto px-6 py-20">
      {/* ------------ Page Heading ------------ */}
      <h1 className="text-5xl font-bold text-[#2C1A7A] mb-6">Media Gallery</h1>
      <p className="text-gray-600 text-lg max-w-3xl mb-12">
        A gist of our packaging and logistics empire, showcasing our
        infrastructure, high-tech facilities, and production capabilities.
      </p>

      {/* ------------ Image Grid ------------ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Gallery"
            className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* ------------ Modal (Image Viewer) ------------ */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute cursor-pointer top-6 right-6 text-white"
            onClick={closeModal}
          >
            <X size={40} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute cursor-pointer left-6 text-white"
            onClick={showPrev}
          >
            <ChevronLeft size={50} />
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            alt="Zoomed"
          />

          {/* Right Arrow */}
          <button
            className="absolute cursor-pointer right-6 text-white"
            onClick={showNext}
          >
            <ChevronRight size={50} />
          </button>
        </div>
      )}
    </section>
  );
}
