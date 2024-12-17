import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div><Image src="/images/banner1.jpg" alt="Banner 1" /></div>
        <div><Image src="/images/banner2.jpg" alt="Banner 2" /></div>
        <div><Image src="/images/banner3.jpg" alt="Banner 3" /></div>
    </Carousel>
);

export default HeroCarousel;
