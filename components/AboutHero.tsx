export default function AboutHero() {
    return (
      <section className="relative w-full h-[60vh]">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about-hero.jpg')",
          }}
        ></div>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              About AgroEssence
            </h1>
  
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              Supporting farmers and gardeners with sustainable agricultural
              solutions and premium-quality organic inputs.
            </p>
          </div>
        </div>
      </section>
    );
  }