import "../styles/Bookstore.scss";
import gallery from "../utils/BookGallery";
import Book from "../components/Book";
import { useState } from "react";

const Bookstore = () => {
    const [price, setPrice] = useState(25);

    const onSliderChange = (e) => {
        setPrice(e.target.value);
    };

    const bookList = gallery.filter((book) => book.price < price);

    return (
        <div className="store">
            <div className="store__title title">
                <span>Our</span>
                <h2>BOOKSTORE</h2>
            </div>
            <div className="store__wrapper">
                <div className="store__col1">
                    <div className="store__filter-text">Filter by price</div>
                    <hr />
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={price}
                        className="store__filter-slider"
                        onChange={onSliderChange}
                    />
                    <div className="store__filter-price-range">
                        <div className="store__filter-price-start">$0</div>
                        <div className="store__filter-price-end">{price}</div>
                    </div>
                    <hr />
                </div>
                <div className="store__col2">
                    {bookList.map((book) => {
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
                </div>
            </div>
        </div>
    );
};

export default Bookstore;
