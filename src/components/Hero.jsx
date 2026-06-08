import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Modern Product Showcase for Any Business
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            A fully reusable React + Tailwind system designed for companies
            that want a clean, scalable, and professional product platform.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl flex items-center gap-2">
              Explore Products <ArrowRight size={16} />
            </button>

            <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl"></div>

          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
            className="relative rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}