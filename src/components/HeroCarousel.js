import CustomCarousel from "./Carousel";

const HeroCarousel = () => {
    const images = [
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
    ];

    return <CustomCarousel images={images} />;
};

export default HeroCarousel;
