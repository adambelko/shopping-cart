import ReactSlidy from "react-slidy";
import "react-slidy/lib/index.scss";

import Book from "./Book";

const GallerySlider = ({ gallery }) => {
    return (
        <div>
            <ReactSlidy numOfSlides={6}>
                {gallery.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            source={book.img}
                            altName={book.name}
                            bookName={book.name}
                            bookPrice={book.price}
                        />
                    );
                })}
            </ReactSlidy>
        </div>
    );
};

export default GallerySlider;
