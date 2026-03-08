import ProductCard from "./ProductCard";

type Product = {
  name: string;
  description?: string;
  image?: string;
  sizes?: string[];
};

type Props = {
  title: string;
  category: string;
  products: Product[];
};

export default function ProductSection({
  title,
  category,
  products,
}: Props) {
  return (
    <section className="max-w-8xl mx-auto px-6 py-12 bg-gradient-to-r from-green-700 to-green-900 text-white">
    {/* <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white"> */}

      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            category={category}
            description={product.description}
            image={product.image}
            sizes={product.sizes} 
          />
        ))}
      </div>
    </section>
  );
}
