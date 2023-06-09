import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Book from "./Book";
import { useEffect, useState } from "react";

const GallerySlider = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 6,
        speed: 500,
    };

    if (windowWidth < 676) {
        settings.slidesToShow = 1;
    }

    return (
        <div>
            <Slider {...settings}>
                {props.data.map((book) => {
                    return (
                        <Book
                            id={book.id}
                            key={book.id}
                            source={book.img}
                            altName={book.title}
                            title={book.title}
                            price={book.price}
                            addToCart={props.addToCart}
                        />
                    );
                })}
            </Slider>
        </div>
    );
};

export default GallerySlider;
