import { useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineMinusSm } from "react-icons/hi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import "../../styles/Cart/Book.scss";

const Book = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (newQuantity === "NaN") return;
        setQuantity(newQuantity);
        props.updateItemQuantity(newQuantity, props.id);
    };

    const handleDecreaseQuantity = () => {
        const newQuantity = quantity - 1;
        if (newQuantity < 1) return;
        setQuantity(newQuantity);
        props.updateItemQuantity(newQuantity, props.id);
    };

    const handleIncreaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        props.updateItemQuantity(newQuantity, props.id);
    };

    return (
        <div className="cart__book">
            <Link to={"/bookstore/" + props.id}>
                <img
                    className="book-img"
                    src={props.source}
                    alt={props.altName}
                />
            </Link>
            <div className="book__left-wrapper">
                <Link to={"/bookstore/" + props.id}>
                    <span className="book__title">{props.title}</span>
                    <span className="book__price">${props.price}</span>
                </Link>
                <div className="book__quantity-wrapper">
                    <HiOutlineMinusSm onClick={handleDecreaseQuantity} />
                    <input
                        type="number"
                        value={quantity}
                        min="1"
                        max="100"
                        onChange={handleQuantityChange}
                    />
                    <HiOutlinePlusSm onClick={handleIncreaseQuantity} />
                </div>
            </div>
            <div className="book__right-wrapper">
                <div className="book__total-price">{props.price}</div>
                <div className="book__remove-icon">
                    <RxCross2
                        size={"22px"}
                        onClick={() => props.removeFromCart(props.id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Book;
