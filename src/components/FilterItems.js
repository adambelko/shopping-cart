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
            <div className="store__filter-title">Search by</div>
            <button className="store__filter-btn" onClick={togglePriceFilter}>
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
                                value={props.min}
                                onChange={props.handleChange}
                                placeholder="MIN"
                                required
                            />
                            <p className="store__filter-price-separator">to</p>
                            <input
                                className="store__filter-price-max"
                                type="text"
                                name="max"
                                value={props.max}
                                onChange={props.handleChange}
                                placeholder="MAX"
                                required
                            />
                        </div>
                    </div>
                </div>
            )}

            <button className="store__filter-btn" onClick={toggleSearchFilter}>
                Name
                {searchFilterOpen ? <RxMinus /> : <FiPlus />}
            </button>
            {searchFilterOpen && (
                <div className="store__filter-search store__filter-shown-div">
                    <label htmlFor="store__search-input"></label>
                    <input
                        type="search"
                        id="store__search-input"
                        placeholder="Search..."
                        value={props.filterText}
                        onChange={(e) =>
                            props.setSearchText(e.target.value.toLowerCase())
                        }
                    />
                </div>
            )}
        </div>
    );
};

export default FilterItems;
