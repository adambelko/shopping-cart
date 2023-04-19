import Book from "./Book";

const GallerySlider = ({ gallery }) => {
    return (
        <div>
            <ul>
                {gallery.map((book) => {
                    return (
                        <li key={book.id}>
                            <Book
                                source={book.img}
                                altName={book.name}
                                bookName={book.name}
                                bookPrice={book.price}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default GallerySlider;
