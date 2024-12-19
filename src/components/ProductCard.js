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
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <div className="flex items-center justify-between mt-2">
                    {/* Price */}
                    <div className="flex items-center">
                        {isOnSale && (
                            <span className="text-gray-400 line-through mr-2 text-sm">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                        <span className="text-lg font-bold text-gray-800">
                            ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
