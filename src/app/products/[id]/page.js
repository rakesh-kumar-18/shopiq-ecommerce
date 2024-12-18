import ProductImageCarousel from "../../../components/ProductImageCarousel";

export default async function ProductDetails({ params }) {
    const { id } = params;

    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();

    return (
        <div className="container mx-auto px-4 my-8 flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full md:w-1/2 mb-6">
                <ProductImageCarousel images={product.images} />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 p-6">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-xl text-gray-600 mb-2">${product.price}</p>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <button className="bg-green-500 text-white px-6 py-2 rounded">Add to Cart</button>
            </div>
        </div>
    );
}
