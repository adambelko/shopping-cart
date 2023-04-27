import { useRef } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const events = useRef(null);

    const scrollDown = () => {
        window.scrollTo({
            top: events.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <Header scrollDown={scrollDown} />
            <Main events={events} />
            <Footer />
        </div>
    );
}

export default App;
