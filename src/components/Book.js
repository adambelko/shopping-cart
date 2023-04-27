import { Link } from "react-router-dom";
import "../styles/Book.scss";

const Book = ({ id, source, altName, bookTitle, bookPrice }) => {
    return (
        <div className="book">
            <Link to={"/bookstore/" + id}>
                <img className="book-img" src={source} alt={altName} />
                <span className="book-title">{bookTitle}</span>
                <span className="book-price">{bookPrice}</span>
            </Link>
            <button className="book-btn">Add to Cart</button>
        </div>
    );
};

export default Book;
