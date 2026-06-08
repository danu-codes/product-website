import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-white dark:bg-gray-950">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <span className="px-4 py-2 text-sm rounded-full border dark:border-gray-700">
            Premium Product Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900 dark:text-white">
            Build & Showcase Any <br />
            Product Business Easily
          </h1>

          <p className="mt-5 text-gray-500 dark:text-gray-400">
            A reusable React system that can transform into juice shop,
            perfume store, electronics store or any product business.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/products"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 text-sm text-gray-500">
            <div>
              <p className="text-xl font-bold text-black dark:text-white">500+</p>
              Products
            </div>

            <div>
              <p className="text-xl font-bold text-black dark:text-white">35+</p>
              Countries
            </div>

            <div>
              <p className="text-xl font-bold text-black dark:text-white">10K+</p>
              Customers
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>

      </div>
    </section>
  );
}