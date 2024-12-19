import Image from "next/image";

const ProductCard = ({ product }) => {
    const isOnSale = product.discountPercentage > 0;

    return (
        <div className="border rounded-lg shadow-md p-4 relative group hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-md">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Product Details */}
            <div className="mt-4">
                {/* Product Title */}
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>

                {/* Rating */}
                <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }, (_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < Math.round(product.rating) ? "gold" : "none"}
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-yellow-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 17.75l-5.197 3.438 1.364-5.73L3.5 10.511l5.927-.493L12 4.75l2.573 5.268 5.927.493-4.667 4.947 1.364 5.73L12 17.75z"
                            />
                        </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                        {isOnSale && (
                            <span className="text-gray-400 line-through mr-2 text-sm">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                        <span className="text-lg font-bold text-gray-800">
                            ${(
                                product.price -
                                (product.price * product.discountPercentage) / 100
                            ).toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
