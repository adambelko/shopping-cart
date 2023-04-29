import chairs from "../../assets/images/Books/99-Chairs.webp";
import Book from "./Book";

import "../../styles/Cart/Cart.scss";

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__list">
                <div className="cart__section-title">My Cart</div>
                <hr />
                <ul className="cart__products">
                    <li>
                        <Book
                            bookTitle={"Hiking in the Alps"}
                            source={chairs}
                            bookPrice={20}
                        />
                        <hr />
                        <Book
                            bookTitle={"test"}
                            source={chairs}
                            bookPrice={20}
                        />
                    </li>
                </ul>
            </div>
            <div className="cart__order-summary">
                <div className="cart__section-title">Order Summary</div>
                <hr />
            </div>
        </div>
    );
};

export default Cart;
