import { useState } from "react";
import data from "../data/data";

import Book from "../components/Book";
import FilterItems from "../components/FilterItems";

import "../styles/Bookstore.scss";

const Bookstore = () => {
    const [filterResult, setFilterResult] = useState([]);

    const [{ min, max }, setRangeValues] = useState({ min: "", max: "" });
    const [searchText, setSearchText] = useState("");

    const filteredData = data.filter((book) => {
        if (searchText === "") return data;
        return book.title.toLowerCase().includes(searchText);
    });

    const handleChange = ({ target: { name, value } }) => {
        setRangeValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="store">
            <div className="store__title title">
                <span>Our</span>
                <h2>BOOKSTORE</h2>
            </div>
            <div className="store__wrapper">
                <div className="store__col1">
                    <FilterItems
                        searchText={searchText}
                        setSearchText={setSearchText}
                        handleChange={handleChange}
                        min={min}
                        max={max}
                    />
                </div>
                <div className="store__col2">
                    {filteredData.map((book) => {
                        return (
                            <Book
                                id={book.id}
                                key={book.id}
                                source={book.img}
                                altName={book.title}
                                bookTitle={book.title}
                                bookPrice={book.price}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Bookstore;
