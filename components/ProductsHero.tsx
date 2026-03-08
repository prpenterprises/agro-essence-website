export default function ProductsHero() {
    return (
      <section className="relative w-full h-[55vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/product_base/product_bg_new.webp')" }}
        />
  
        <div className="absolute inset-0 bg-black/60" />
  
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              High-quality agricultural inputs for home gardening and farming.
            </p>
          </div>
        </div>
      </section>
    );
  }