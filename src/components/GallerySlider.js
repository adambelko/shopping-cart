import data from "../data/data";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Book from "./Book";

const GallerySlider = (props) => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        speed: 500,
    };

    const shuffeledGallery = data.sort(() => 0.5 - Math.random());

    return (
        <div>
            <Slider {...settings}>
                {shuffeledGallery.map((book) => {
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
