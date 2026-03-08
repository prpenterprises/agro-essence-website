import ProductsHero from '@/components/ProductsHero';
import ProductSection from '@/components/ProductSection';

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />

      {/* Soil and Manure */}
      <div id="soil-manure">
        <ProductSection
          title="Soil and Manure"
          category="Soil & Manure"
          products={[
            {
              name: 'Vermicompost',
              description: 'Organic compost that enhances soil fertility.',
              image: "/products/Vermicompost/vermi.webp",
              sizes: ['1 kg', '5 kg', '10 kg', '20 kg', '40 kg'],
            },
            {
              name: 'Neem Khali (Neem Cake)',
              description: 'Natural soil conditioner and pest-control solution.',
              image: "/products/neem_cake/neem_cake.webp",
              sizes: ['1 kg', '10 kg', '30 kg'],
            },
            {
              name: 'Mustard Cake',
              description: 'Nutrient-rich organic fertilizer for healthy crops.',
              image: "/products/Mustard_cake/yellow_mustard.webp",
              sizes: ['1 kg', '10 kg', '30 kg'],
            },
            {
              name: 'PROM',
              description: 'Phosphate-rich organic manure for root development.',
              image: "/products/PROM/prom.webp",
              sizes: ['1 kg', '50 kg'],
            },
          ]}
        />
      </div>


      {/* Plant Nutrition */}
      <div id="plant-nutrition">
        <ProductSection
          title="Plant Nutrition and Fertilizers"
          category="Plant Nutrition"
          products={[
            {
              name: 'NPK Fertilizer',
              description:
                'Balanced nutrient fertilizer for overall plant growth.',
              image: '/products/npk/npk1919.webp',
              sizes: ['1 kg', '25 kg'],
            },
            {
              name: 'Epsom Salt (Magnesium Sulphate)',
              description: 'Improves chlorophyll production and plant health.',
              image: '/products/epsom/epsom.webp',
              sizes: ['1 kg', '40 kg'],
            },
            {
              name: 'Growth Booster Liquid',
              description: 'Promotes faster growth and stronger plants.',
              image: '/products/growth-booster.jpg',
              sizes: ['100 ml', '1 L'],
            },
          ]}
        />
      </div>


      {/* Plant Protection */}
      <div id="plant-protection">
        <ProductSection
          title="Plant Protection and Bio-Solutions"
          category="Plant Protection"
          products={[
            {
              name: 'Neem Oil',
              description: 'Natural insecticide protecting plants from pests.',
              image: '/products/neem-oil.jpg',
              sizes: ['100 ml', '250 ml', '500 ml', '1 L', '20 L'],
            },
            {
              name: 'Trichoderma (Bio Fungicide)',
              description: 'Biological protection against soil-borne diseases.',
              image: '/products/trichoderma.jpg',
              sizes: ['1 kg'],
            },
          ]}
        />
      </div>


      {/* Soil Media */}
      <div id="soil-media">
        <ProductSection
          title="Soil Media and Potting Mix Components"
          category="Soil Media"
          products={[
            {
              name: 'Cocopeat Brick',
              description: 'Excellent water-retaining growing medium.',
              image: '/products/cocopeat_block/cocopeat_block.webp',
              sizes: ['1 kg block', '5 kg block'],
            },
            {
              name: 'Cocopeat Powder',
              description: 'Excellent water-retaining growing medium.',
              image: '/products/Cocopeat_powder/cocopeat_powder1.webp',
              sizes: ['1 kg', '5 kg', '40 kg'],
            },
            {
              name: 'Vermiculite',
              description: 'Improves soil aeration and moisture retention.',
              image: '/products/vermiculite.jpg',
              sizes: ['1 kg', '25 kg'],
            },
            {
              name: 'Perlite',
              description: 'Enhances drainage and root oxygenation.',
              image: '/products/perlite/perlite1.webp',
              sizes: ['200 gm', '1 kg', '10 kg'],
            },
          ]}
        />
      </div>


      {/* Garden Tools */}
      <div id="garden-tools">
        <ProductSection
          title="Garden Tools and Accessories"
          category="Garden Tools"
          products={[
            {
              name: 'Plant Cutter',
              description: 'Sharp and durable cutter for pruning plants.',
              image: '/products/cutter/cutter.webp',
              sizes: ['Standard'],
            },
            {
              name: 'Garden Tool Kit (5 Pcs)',
              description: 'Complete toolkit for home gardening needs.',
              image: '/products/tool_set/tool_set_5pc.webp',
              sizes: ['5 pcs set'],
            },
            {
              name: 'Khurpi',
              description: 'Traditional hand tool for soil preparation.',
              image: '/products/khurpi/khurpi.webp',
              sizes: ['1 inch', '2 inch', '3 inch'],
            },
            {
              name: 'Spray Bottle',
              description: 'Perfect for watering and plant care solutions.',
              image: '/products/spray_bottle/spray_2.webp',
              sizes: ['500 ml', '1 L'],
            },
            {
              name: 'Garden Water Can',
              description: 'Convenient watering can for daily plant care.',
              image: '/products/water_can/water_can.webp',
              sizes: ['5 L', '10 L'],
            },
            {
              name: 'Mulching Paper',
              description: 'Helps retain soil moisture and prevent weeds.',
              image: '/products/mulching/mulching_sheet.webp',
              sizes: ['Standard roll'],
            },
            {
              name: 'Vertical Garden Pots',
              description: 'Ideal for space-saving gardening solutions.',
              image: '/products/vertical/vertical.webp',
              sizes: ['Set'],
            },
          ]}
        />
      </div>

    </>
  );
}