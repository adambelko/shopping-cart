import { Routes, Route } from "react-router-dom";
import Store from "../pages/Store";
import About from "../pages/About";
import Home from "../pages/Home";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Store" element={<Store />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </main>
    );
};

export default Main;
