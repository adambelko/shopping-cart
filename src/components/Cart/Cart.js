import { useState } from "react";
import { CiShoppingTag } from "react-icons/ci";

import Book from "./Book";

import "../../styles/Cart/Cart.scss";

const Cart = ({ cart, removeFromCart, updateItemQuantity }) => {
    const [promoIsOpen, setPromoIsOpen] = useState(false);

    const amount = (item) => item.price * item.quantity;
    const sum = (prev, next) => prev + next;

    const subTotal = () => (cart.length ? cart.map(amount).reduce(sum) : 0);
    const shippingFee = () => (cart.length ? 8.5 : 0);
    const totalPrice = () => subTotal() + shippingFee();

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
                                    id={book.id}
                                    source={book.img}
                                    altName={book.title}
                                    title={book.title}
                                    price={book.price}
                                    quantity={book.quantity}
                                    removeFromCart={removeFromCart}
                                    updateItemQuantity={updateItemQuantity}
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
                        <dd>${subTotal().toFixed(2)}</dd>
                    </dl>
                    <div className="cart__summary-shipping">
                        <span>Shipping fee</span>
                        <span>${shippingFee().toFixed(2)}</span>
                    </div>
                </div>
                <hr />
                <div className="cart__summary-total">
                    <dl>
                        <dt>Total</dt>
                        <dd>${totalPrice().toFixed(2)}</dd>
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
