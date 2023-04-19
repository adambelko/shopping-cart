import "../styles/Book.scss";

const Book = ({ source, altName, bookName, bookPrice }) => {
    return (
        <div className="book">
            <img className="book-img" src={source} alt={altName} />
            <span className="book-title">{bookName}</span>
            <span className="book-price">{bookPrice}</span>
            <button className="book-btn">Add to Cart</button>
        </div>
    );
};

export default Book;
