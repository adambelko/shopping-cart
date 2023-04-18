// import book from "../assets/images/Books/book1.webp";

const Book = ({ source, altName, bookName, bookPrice }) => {
    return (
        <div className="book-wrapper">
            <img src={source} alt={altName} />
            <span className="book-title">{bookName}</span>
            <span>{bookPrice}</span>
            <button>Add to Cart</button>
        </div>
    );
};

export default Book;