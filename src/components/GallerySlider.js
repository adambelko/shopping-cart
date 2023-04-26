import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "./Book";

const GallerySlider = ({ gallery }) => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        speed: 500,
    };

    const shuffeledGallery = gallery.sort(() => 0.5 - Math.random());

    return (
        <div>
            <Slider {...settings}>
                {shuffeledGallery.map((book) => {
                    return (
                        <Book
                            id={book.id}
                            key={book.id}
                            source={book.img}
                            altName={book.name}
                            bookName={book.name}
                            bookPrice={book.price}
                        />
                    );
                })}
            </Slider>
        </div>
    );
};

export default GallerySlider;
