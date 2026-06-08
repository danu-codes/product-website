import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-28 text-center text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12">

      {/* IMAGE */}
      <div>
        <img
          src={product.image}
          className="rounded-2xl w-full object-cover aspect-[4/3]"
        />
      </div>

      {/* DETAILS */}
      <div>

        {/* CATEGORY */}
        <span className="px-3 py-1 text-xs rounded-full border">
          {product.category}
        </span>

        {/* NAME */}
        <h1 className="text-4xl font-bold mt-4">
          {product.name}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {product.description}
        </p>

        {/* PRICE */}
        <div className="mt-6 text-3xl font-bold">
          ${product.price}
        </div>

        {/* SPECS (NEW PART 🔥) */}
        <div className="mt-8 space-y-3">

          <h3 className="text-lg font-semibold">
            Product Specifications
          </h3>

          <div className="border rounded-xl overflow-hidden">
            {product.specs.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between px-4 py-3 border-b last:border-b-0 dark:border-gray-800"
              >
                <span className="text-gray-500">
                  {spec.label}
                </span>

                <span className="font-medium">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* BUTTON */}
        <button className="mt-8 w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black">
          Request Quote
        </button>

      </div>
    </div>
  );
}