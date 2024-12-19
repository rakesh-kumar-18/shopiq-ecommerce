import Carousel from "./Carousel";

const HeroCarousel = () => {
    const images = [
        "/banner1.jpg",
        "/banner2.avif",
        "/banner3.jpg",
    ];

    return <Carousel images={images} />;
};

export default HeroCarousel;
