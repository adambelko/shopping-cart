import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </div>
    );
}

export default App;
