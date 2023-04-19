import { Routes, Route } from "react-router-dom";
import Bookstore from "../pages/Bookstore";
import About from "../pages/About";
import Home from "../pages/Home";

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
