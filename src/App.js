import { useRef, useState } from "react";
import data from "./data/data";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const events = useRef(null);
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        const itemToAdd = data.find((book) => book.id === id);
        const existingItem = cart.find((book) => book.id === id);
        if (existingItem) return cart;
        setCart([...cart, itemToAdd]);
    };

    const scrollDown = () => {
        window.scrollTo({
            top: events.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <Header scrollDown={scrollDown} cart={cart} />
            <Main events={events} addToCart={addToCart} cart={cart} />
            <Footer />
        </div>
    );
}

export default App;
