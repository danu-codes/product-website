import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition"
    >

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="text-xs text-gray-500">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold mt-1 text-gray-900 dark:text-white">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>

          <Link
            to={`/product/${product.id}`}
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            View
          </Link>

        </div>

      </div>
    </motion.div>
  );
}