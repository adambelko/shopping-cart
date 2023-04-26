import "../styles/BookDetails.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../data/data";

const BookDetails = () => {
    const { id } = useParams();

    const bookInfo = data.filter((book) => book.id === id);

    return (
        <div>
            {bookInfo.map((book) => {
                return (
                    <article key={book.id} className="book-details">
                        <div className="book-details__breadcrumbs">
                            <Link to="/">Home</Link> /
                            <Link to="/bookstore">Bookstore</Link> / {book.name}
                        </div>
                        <div className="book-details__wrapper">
                            <div className="book-details__col1">
                                <img src={book.img} alt={book.name} />
                                <p className="book-details__description">
                                    {book.description}
                                </p>
                            </div>
                            <div className="book-details__col2">
                                <div className="book-details__top">
                                    <h1 className="book-details__title">
                                        {book.name}
                                    </h1>
                                    <span className="book-details__price">
                                        ${book.price}
                                    </span>
                                    <span className="book-details__author">
                                        By {book.author}
                                    </span>
                                    <span className="book-details__published">
                                        Published: 5th April 2023
                                    </span>
                                    <span className="book-details__isbn">
                                        ISBN: 9780008581435
                                    </span>
                                </div>
                                <div className="book-details__bottom">
                                    <div className="book-details__quantity">
                                        <label htmlFor="quantity">
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            defaultValue="1"
                                            id="quantity"
                                        />
                                    </div>
                                    <button
                                        className="book-details__add-btn"
                                        type="button"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        className="book-details__buy-btn"
                                        type="button"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default BookDetails;
