import { useMemo, useState } from "react";
import { debounce } from "lodash";
import data from "../data/data";

import Book from "../components/Book";
import FilterItems from "../components/FilterItems";

import "../styles/Bookstore.scss";

const Bookstore = ({ addToCart }) => {
    const [filters, setFilters] = useState({
        min: "",
        max: "",
        searchText: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setFilters({
            ...filters,
            [name]: value.toLowerCase(),
        });
    };

    const { min, max, searchText } = filters;

    const minValue = min.length ? Number(min) : "1";
    const maxValue = max.length ? Number(max) : "10000";
    const search = searchText.length ? searchText : "";

    const filteredList = data.filter((book) => {
        return (
            book.price >= minValue &&
            book.price <= maxValue &&
            book.title.toLowerCase().includes(search)
        );
    });

    const debounceHandleChange = useMemo(() => {
        return debounce(handleChange, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [min, max, searchText]);

    return (
        <div className="store">
            <div className="store__title title">
                <span>Our</span>
                <h2>BOOKSTORE</h2>
            </div>
            <div className="store__wrapper">
                <div className="store__filter-section">
                    <FilterItems handleChange={debounceHandleChange} />
                </div>
                <div className="store__gallery-section">
                    {filteredList.length
                        ? filteredList.map((book) => {
                              return (
                                  <Book
                                      id={book.id}
                                      key={book.id}
                                      source={book.img}
                                      altName={book.title}
                                      title={book.title}
                                      price={book.price}
                                      addToCart={addToCart}
                                  />
                              );
                          })
                        : "No products found"}
                </div>
            </div>
        </div>
    );
};

export default Bookstore;
