import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxMinus } from "react-icons/rx";

import "../styles/FilterItems.scss";

const FilterItems = (props) => {
    const [priceFilterOpen, setPriceFilterOpen] = useState(false);
    const [searchFilterOpen, setSearchFilterOpen] = useState(false);

    const togglePriceFilter = () => setPriceFilterOpen(!priceFilterOpen);
    const toggleSearchFilter = () => setSearchFilterOpen(!searchFilterOpen);

    return (
        <div className="store__filter">
            <div className="store__filter-title">Filter by</div>
            <div className="store__filter-wrapper">
                <div className="store__filter-price-section">
                    <button
                        className="store__filter-btn"
                        onClick={togglePriceFilter}
                    >
                        Price
                        {priceFilterOpen ? <RxMinus /> : <FiPlus />}
                    </button>
                    {priceFilterOpen && (
                        <div className="store__filter-price store__filter-shown-div">
                            <div className="store__price-wrapper">
                                <div className="store__filter-price-range">
                                    <input
                                        className="store__filter-price-min"
                                        type="text"
                                        name="min"
                                        onChange={props.handleChange}
                                        placeholder="Min"
                                        required
                                    />
                                    <p className="store__filter-price-separator">
                                        to
                                    </p>
                                    <input
                                        className="store__filter-price-max"
                                        type="text"
                                        name="max"
                                        onChange={props.handleChange}
                                        placeholder="Max"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="store__filter-search-section">
                    <button
                        className="store__filter-btn"
                        onClick={toggleSearchFilter}
                    >
                        Name
                        {searchFilterOpen ? <RxMinus /> : <FiPlus />}
                    </button>
                    {searchFilterOpen && (
                        <div className="store__filter-search store__filter-shown-div">
                            <label htmlFor="store__search-input"></label>
                            <input
                                type="search"
                                name="searchText"
                                id="store__search-input"
                                placeholder="Search..."
                                value={props.filterText}
                                onChange={props.handleChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterItems;
