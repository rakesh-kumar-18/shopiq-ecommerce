import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => (
    <div className="border rounded-lg p-4 shadow-md">
        <Image
            src={product.thumbnail}
            alt={product.title}
            width={100}
            height={100}
            className="h-40 w-full object-cover mb-2 rounded"
        />
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600">${product.price}</p>
        <Link href={`/products/${product.id}`}>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
        </Link>
    </div>
);

export default ProductCard;
