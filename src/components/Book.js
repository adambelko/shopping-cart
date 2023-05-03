import { Link } from "react-router-dom";
import "../styles/Book.scss";

const Book = (props) => {
    return (
        <div className="book">
            <Link to={"/bookstore/" + props.id}>
                <img
                    className="book-img"
                    src={props.source}
                    alt={props.altName}
                />
                <span className="book-title">{props.title}</span>
                <span className="book-price">{props.price}</span>
            </Link>
            <button
                className="book-btn"
                onClick={() => props.addToCart(props.id)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Book;
