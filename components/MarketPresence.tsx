export default function MarketPresence() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
      
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          Our Market Presence
        </h3>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-green-100">
          AgroEssence has steadily built a growing presence in the agricultural 
          and home gardening sector by supplying reliable and high-quality 
          products to customers across Ghaziabad and nearby regions.
        </p>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-green-100 mt-6 mb-12">
          We serve home gardeners, nurseries, retailers and farmers with 
          premium organic manures, fertilizers, soil media and gardening tools 
          at competitive prices while promoting sustainable agriculture.
        </p>

        {/* Highlight Boxes */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Farmers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition hover:bg-white/20 hover:scale-105 duration-300 shadow-lg">
            <div className="text-4xl mb-3">🌾</div>
            <h4 className="text-xl font-semibold mb-3">
              Farmers
            </h4>
            <p className="text-green-100 text-sm">
              Supplying high-quality fertilizers and soil conditioners to 
              improve soil fertility and crop productivity.
            </p>
          </div>

          {/* Gardeners */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition hover:bg-white/20 hover:scale-105 duration-300 shadow-lg">
            <div className="text-4xl mb-3">🌱</div>
            <h4 className="text-xl font-semibold mb-3">
              Home Gardeners
            </h4>
            <p className="text-green-100 text-sm">
              Providing reliable gardening inputs and tools for healthy and 
              thriving plants at home.
            </p>
          </div>

          {/* Retailers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition hover:bg-white/20 hover:scale-105 duration-300 shadow-lg">
            <div className="text-4xl mb-3">🏪</div>
            <h4 className="text-xl font-semibold mb-3">
              Retailers & Nurseries
            </h4>
            <p className="text-green-100 text-sm">
              Supporting retailers and plant nurseries with consistent supply 
              and competitive pricing.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}