import type { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useMediaQuery} from "react-responsive";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const CCarousel = ({ children}: { children: ReactNode | Element[]}) => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    return (
        <Carousel
            key={"carousel"}
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"

            deviceType={isMobile ? "mobile" : "desktop"}

        >
            {children}
        </Carousel>
    );
};

export default CCarousel;