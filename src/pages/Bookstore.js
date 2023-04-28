import { useEffect, useState } from "react";
import data from "../data/data";

import Book from "../components/Book";
import FilterItems from "../components/FilterItems";

import "../styles/Bookstore.scss";

const Bookstore = () => {
    const [filters, setFilters] = useState({
        min: "",
        max: "",
        searchText: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setTimeout(() => {
            setFilters({
                ...filters,
                [name]: value.toLowerCase(),
            });
        }, 500);
    };

    let { min, max, searchText } = filters;

    const filterData = () => {
        const minValue = min.length ? Number(min) : "1";
        const maxValue = max.length ? Number(max) : "10000";
        const search = searchText.length ? searchText : "";

        const result = data.filter((book) => {
            return (
                book.price >= minValue &&
                book.price <= maxValue &&
                book.title.toLowerCase().includes(search)
            );
        });

        return result;
    };

    useEffect(() => {
        filterData();
    });

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
                        handleChange={handleChange}
                        min={min}
                        max={max}
                    />
                </div>
                <div className="store__col2">
                    {filterData().map((book) => {
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
