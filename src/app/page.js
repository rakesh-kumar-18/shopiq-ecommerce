"use client";

import { useState, useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import ProductCard from "../components/ProductCard";

const PRODUCTS_API = "https://dummyjson.com/products";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  // Fetch initial products
  useEffect(() => {
    fetchMoreProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to fetch more products
  const fetchMoreProducts = async () => {
    if (loading || allLoaded) return;
    setLoading(true);

    try {
      const res = await fetch(`${PRODUCTS_API}?limit=12&skip=${skip}`);
      const data = await res.json();

      if (data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
        setVisibleProducts((prev) => [...prev, ...data.products]);
        setSkip((prev) => prev + 12);
      }

      if (data.products.length < 12) {
        setAllLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Search Query
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setVisibleProducts(filteredProducts);
  };

  // Handle Sort By
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    let sortedProducts = [...visibleProducts];
    if (e.target.value === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setVisibleProducts(sortedProducts);
  };

  return (
    <>
      <HeroCarousel />
      <main className="container mx-auto px-4 my-8">
        <h1 className="text-2xl font-bold mb-6">Products</h1>

        {/* Search and Sort Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Search Bar */}
          <div className="relative w-1/3">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search..."
              className="p-2 pl-10 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
              </svg>
            </span>
          </div>

          {/* Sort By Dropdown */}
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 border rounded-md"
          >
            <option value="featured">Featured</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Show More Button */}
        {!allLoaded && (
          <button
            onClick={fetchMoreProducts}
            className="block mx-auto mt-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Loading..." : "Show More"}
          </button>
        )}

        {allLoaded && (
          <p className="text-center mt-4 text-gray-500">No more products to load.</p>
        )}
      </main>
    </>
  );
}
