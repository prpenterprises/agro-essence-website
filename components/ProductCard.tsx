'use client';

import { useState } from 'react';

type Props = {
  name: string;
  category: string;
  description?: string;
  image?: string;
  sizes?: string[];
};

export default function ProductCard({
  name,
  category,
  description,
  image,
  sizes,
}: Props) {
  const [open, setOpen] = useState(false);

  const phoneNumber = '919599804558';

  const message = encodeURIComponent(
    `Hello, I would like to enquire about ${name} from AgroEssence.`
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* CARD */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300 border">

        {/* Image */}
        <div
          onClick={() => setOpen(true)}
          className="h-54 bg-gray-200 flex items-center justify-center overflow-hidden relative cursor-pointer"
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="max-h-[300px] w-auto object-contain transition duration-300 group-hover:scale-105"
            />
          ) : (
            <span className="text-gray-400">Product Image</span>
          )}

          {/* Bottom Hover Shadow */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">

          <span className="text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
            {category}
          </span>

          <h4
            onClick={() => setOpen(true)}
            className="mt-3 font-semibold text-lg text-gray-800 group-hover:text-green-700 transition cursor-pointer"
          >
            {name}
          </h4>

          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {description ||
              'High-quality agricultural input for better plant growth.'}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-2">

            {/* View Details */}
            <button
              onClick={() => setOpen(true)}
              className="flex-1 border border-green-600 text-green-700 hover:bg-green-50 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
            >
              View Details
            </button>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition cursor-pointer"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg cursor-pointer"
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-full bg-gray-50 rounded-lg mb-4 flex items-center justify-center p-1">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="max-h-[400px] w-auto object-contain rounded-lg"
                />
              ) : (
                <span className="text-gray-400">Product Image</span>
              )}
            </div>

            <h3 className="text-xl font-semibold text-green-800">{name}</h3>

            <p className="text-gray-600 mt-2">{description}</p>

            {/* Sizes */}
            {sizes && (
              <div className="mt-4">
                <p className="font-medium mb-2 text-gray-600">
                  Available Packaging:
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-green-700 text-white rounded-full text-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition cursor-pointer"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}