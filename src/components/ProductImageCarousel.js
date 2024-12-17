import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const ProductImageCarousel = ({ images }) => (
    <Carousel showThumbs={false}>
        {images.map((img, index) => (
            <div key={index}>
                <Image src={img} alt={`Product ${index}`} />
            </div>
        ))}
    </Carousel>
);

export default ProductImageCarousel;
