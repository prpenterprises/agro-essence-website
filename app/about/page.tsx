import AboutHero from "@/components/AboutHero";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          About AgroEssence
        </h1>

        <div className="space-y-6 text-white leading-relaxed text-lg">
          <p>
            Established in 2024, AgroEssence was founded with the vision of
            supporting sustainable agriculture and home gardening through
            reliable, high-quality agricultural inputs. Based in Ghaziabad,
            Uttar Pradesh (201011), we serve farmers, nurseries, and gardening
            enthusiasts with products designed to improve soil health and crop
            productivity.
          </p>

          <p>
            We specialize in essential agricultural and gardening solutions
            including vermicompost, cocopeat, neem-based products, organic
            fertilizers, and plant-care tools. Our goal is to provide the best
            quality products at competitive prices so growers can achieve better
            results without increasing costs.
          </p>

          <p>
            At AgroEssence, we believe that healthy soil leads to healthy crops
            and a healthier environment. By promoting eco-friendly and
            nutrient-rich agricultural inputs, we aim to contribute to
            sustainable farming practices across India.
          </p>

          <p>
            With a strong commitment to quality, trust, and customer
            satisfaction, AgroEssence continues to grow as a dependable partner
            for both home gardeners and farmers.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}