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

  return (
    <>
      <HeroCarousel />
      <main className="container mx-auto px-4 my-8">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Show More Button */}
        {!allLoaded && (
          <button
            onClick={fetchMoreProducts}
            className="block mx-auto mt-8 bg-blue-600 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Show More"}
          </button>
        )}

        {/* All Products Loaded Message */}
        {allLoaded && (
          <p className="text-center mt-4 text-gray-500">No more products to load.</p>
        )}
      </main>
    </>
  );
}
