import { useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import Book from "./Book";

import "../../styles/Cart/Cart.scss";

const Cart = ({ cart }) => {
    const [promoIsOpen, setPromoIsOpen] = useState(false);
    return (
        <div className="cart">
            <div className="cart__list">
                <div className="cart__section-title">My Cart</div>
                <hr />
                <ul className="cart__products">
                    {cart.length ? (
                        cart.map((book) => (
                            <li key={book.id}>
                                <Book
                                    source={book.img}
                                    altName={book.title}
                                    title={book.title}
                                    price={book.price}
                                />
                            </li>
                        ))
                    ) : (
                        <li className="cart__products-none">
                            Your cart is empty
                        </li>
                    )}
                </ul>
                <hr />
                <div className="cart__promo-code">
                    <button
                        className="cart__promo-code-btn"
                        onClick={() => setPromoIsOpen(!promoIsOpen)}
                    >
                        <CiShoppingTag />
                        <span>Enter a promo code</span>
                    </button>
                    {promoIsOpen && (
                        <div className="cart__promo-code-wrapper">
                            <input
                                type="text"
                                placeholder="Enter a promo code"
                                className="cart__promo-code-input"
                            />
                            <button className="cart__promo-code-apply-btn">
                                Apply
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="cart__order-summary">
                <div className="cart__section-title">Order Summary</div>
                <hr />
                <div className="cart__summary-subtotal">
                    <dl>
                        <dt>Subtotal</dt>
                        <dd>$44</dd>
                    </dl>
                    <div className="cart__summary-shipping">
                        <span>Flat Rate Shipping</span>
                        <span>$8.50</span>
                    </div>
                </div>
                <hr />
                <div className="cart__summary-total">
                    <dl>
                        <dt>Total</dt>
                        <dd>$65</dd>
                    </dl>
                    <button className="cart__checkout-btn" type="button">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
