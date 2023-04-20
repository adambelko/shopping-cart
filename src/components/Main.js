import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bookstore from "../pages/Bookstore";
import About from "../pages/About";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Bookstore" element={<Bookstore />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </main>
    );
};

export default Main;
