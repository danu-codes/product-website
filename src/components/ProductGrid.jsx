import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { siteConfig } from "../config/siteConfig";

export default function ProductGrid() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = ["All", ...new Set(products.map(p => p.category))];

    const filtered = products.filter((item) => {
        const matchSearch = item.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            category === "All" || item.category === category;

        return matchSearch && matchCategory;
    });

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE FROM CONFIG */}
                <h2 className="text-3xl font-bold mb-2">
                    {siteConfig.hero.title}
                </h2>

                <p className="text-gray-500 mb-8">
                    {siteConfig.hero.description}
                </p>

                {/* SEARCH */}
                <input
                    className="border px-4 py-2 rounded-lg mb-6 w-full md:w-1/2"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* CATEGORY */}
                <div className="flex gap-3 flex-wrap mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-full border ${category === cat
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : ""
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}