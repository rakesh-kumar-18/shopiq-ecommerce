import HeroCarousel from "../components/HeroCarousel";
import ProductCard from "../components/ProductCard";

const PRODUCTS_API = "https://dummyjson.com/products?limit=12";

export default async function HomePage() {
  const res = await fetch(PRODUCTS_API);
  const data = await res.json();

  return (
    <main>
      <HeroCarousel />
      <div className="container mx-auto px-4 my-8">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
