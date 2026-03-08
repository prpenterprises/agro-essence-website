import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center">
      {/* Background Image (Still) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home_base/farm_home.webp')",
        }}
      />

      {/* Professional Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Small Heading */}
          <p className="text-green-400 font-semibold mb-3 tracking-wide">
            Trusted Agricultural Solutions 🌱
          </p>

          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            Quality Inputs for <br />
            Better Farming & Gardening
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
            Premium quality Vermicompost, Cocopeat, Neem Products and Garden
            Tools designed to improve soil health and plant growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Explore Products */}
            <Link href="/products">
              <button className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-lg hover:shadow-xl">
                🌿 Explore Products
              </button>
            </Link>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/919599804558"
              target="_blank"
              className="border border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition"
            >
              📞 Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
