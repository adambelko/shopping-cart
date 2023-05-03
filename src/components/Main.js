import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import Home from "../pages/Home";
import Bookstore from "../pages/Bookstore";
import About from "../pages/About";
import NotFound from "./NotFound";
import BookDetails from "./BookDetails";
import Cart from "./Cart/Cart";

const Main = (props) => {
    return (
        <main>
            <ScrollToTop smooth={true} />
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={<Home addToCart={props.addToCart} />}
                    />
                    <Route
                        path="/events"
                        element={<Home events={props.events} />}
                    />
                </Route>
                <Route path="/bookstore">
                    <Route
                        index
                        element={<Bookstore addToCart={props.addToCart} />}
                    />
                    <Route
                        path=":id"
                        element={<BookDetails addToCart={props.addToCart} />}
                    />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart cart={props.cart} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Main;
