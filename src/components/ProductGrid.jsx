import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductGrid() {
  console.log("Products:", products); // DEBUG

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8">
          Featured Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </section>
  );
}