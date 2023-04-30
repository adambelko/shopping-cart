import { Link } from "react-router-dom";
import { HiOutlineMinusSm } from "react-icons/hi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import "../../styles/Cart/Book.scss";

const Book = (props) => {
    return (
        <div className="cart__book">
            <Link to={"/bookstore/" + props.id}>
                <img
                    className="book-img"
                    src={props.source}
                    alt={props.altName}
                />
                <div className="book__left-wrapper">
                    <span className="book__title">{props.bookTitle}</span>
                    <span className="book__price">${props.bookPrice}</span>
                    <div className="book__quantity-wrapper">
                        <HiOutlineMinusSm />
                        <input type="text" defaultValue="1" />
                        <HiOutlinePlusSm />
                    </div>
                </div>
            </Link>
            <div className="book__right-wrapper">
                <div className="book__total-price">$50</div>
                <div className="book__remove-icon">
                    <RxCross2 size={"22px"} />
                </div>
            </div>
        </div>
    );
};

export default Book;
