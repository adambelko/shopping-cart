import { useRef, useState } from "react";
import data from "./data/data";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const events = useRef(null);
    const [cart, setCart] = useState([]);

    const addToCart = (id, quantity) => {
        const itemToAdd = data.find((item) => item.id === id);
        const existingItem = cart.find((item) => item.id === id);
        if (existingItem) return cart;
        setCart([...cart, { ...itemToAdd, quantity: quantity }]);
    };

    const removeFromCart = (id) => {
        const filteredList = cart.filter((item) => item.id !== id);
        setCart(filteredList);
    };

    const updateItemQuantity = (quantity, id) => {
        const updatedQuantity = cart.map((item) =>
            item.id === id ? { ...item, quantity: quantity } : item
        );
        setCart(updatedQuantity);
    };
    console.log(cart);

    const scrollDown = () => {
        window.scrollTo({
            top: events.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div className="root">
            <Header scrollDown={scrollDown} cart={cart} />
            <Main
                events={events}
                cart={cart}
                updateItemQuantity={updateItemQuantity}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
            <Footer />
        </div>
    );
}

export default App;
