import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bookstore from "../pages/Bookstore";
import About from "../pages/About";
import NotFound from "./NotFound";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Bookstore" element={<Bookstore />} />
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Main;
