import ProductImageCarousel from "../../../components/ProductImageCarousel";

export default async function ProductDetails({ params }) {
    const { id } = params;

    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();

    const availabilityStatus =
        product.availabilityStatus === "In Stock" ? (
            <span className="text-green-600 font-semibold">In Stock</span>
        ) : (
            <span className="text-red-600 font-semibold">Low Stock</span>
        );

    return (
        <div className="container mx-auto px-4 my-8 flex flex-col md:flex-row gap-8">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
                <ProductImageCarousel images={product.images} />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

                <div className="text-sm mb-4">{availabilityStatus}</div>

                {/* Product Rating */}
                <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }, (_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < Math.round(product.rating) ? "gold" : "none"}
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-yellow-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 17.75l-5.197 3.438 1.364-5.73L3.5 10.511l5.927-.493L12 4.75l2.573 5.268 5.927.493-4.667 4.947 1.364 5.73L12 17.75z"
                            />
                        </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                        ({product.reviews.length || "0"} reviews)
                    </span>
                </div>

                {/* Product Price */}
                <p className="text-2xl font-semibold text-gray-800 mb-4">
                    ${product.price.toFixed(2)}
                </p>

                {/* Product Description */}
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="mb-6">
                    <div className="flex items-center justify-between py-2 border-b">
                        <span className="font-medium text-gray-700">Brand</span>
                        <span className="text-gray-600">{product.brand}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                        <span className="font-medium text-gray-700">Weight</span>
                        <span className="text-gray-600">{product.weight || "N/A"} g</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                        <span className="font-medium text-gray-700">Available</span>
                        <span className="text-gray-600">{product.stock}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded">
                        Add to Cart
                    </button>
                    <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
