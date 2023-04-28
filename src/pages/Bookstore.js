import { useEffect, useState } from "react";
import data from "../data/data";

import Book from "../components/Book";
import FilterItems from "../components/FilterItems";

import "../styles/Bookstore.scss";

const Bookstore = () => {
    const [filterResult, setFilterResult] = useState(data);

    const [{ min, max }, setRangeValues] = useState({ min: "", max: "" });
    const [searchText, setSearchText] = useState("");

    const handleChange = ({ target: { name, value } }) => {
        setRangeValues({
            ...{ min, max },
            [name]: value,
        });
    };

    const filterData = () => {
        // Condition for filtering by price
        if (min.length || max.length) {
            filterResult.filter((book) => {
                return book.price >= min && book.price <= max;
            });
        }

        // Condition for filtering by search text
        if (searchText.length) {
            filterResult.filter((book) => {
                return book.title.toLowerCase().includes(searchText);
            });
        }

        // here should be returned filtered array
        return filterResult;
    };

    const handleFilterData = () => {
        setFilterResult(filterData());
    };

    useEffect(() => {
        handleFilterData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText, min, max]);

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
                    {filterResult.map((book) => {
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
