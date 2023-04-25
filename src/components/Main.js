import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bookstore from "../pages/Bookstore";
import About from "../pages/About";
import NotFound from "./NotFound";
import BookDetails from "./BookDetails";
import ScrollToTop from "react-scroll-to-top";

const Main = ({ events }) => {
    return (
        <main>
            <ScrollToTop smooth={true} />
            <Routes>
                <Route path="/">
                    <Route index element={<Home events={events} />} />
                    <Route path="/events" element={<Home events={events} />} />
                </Route>
                <Route path="/bookstore">
                    <Route index element={<Bookstore />} />
                    <Route path=":id" element={<BookDetails />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Main;
