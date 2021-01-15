import React from "react";
import "./search.css";
import searchIcon from "../images/magnifier.svg";
import SearchResults from "./SearchResults";

const SearchBar = ({ searchBarOn, handleClick, zipcodeInput, handleChange, citiesWithZipcode }) => {
    return (
        <div className={searchBarOn ? "search" : "hidden"}>
            <div className="search-bar" >
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Entrer un code postal"
                    value={zipcodeInput}
                    onChange={handleChange}
                />
                <img className="icon" src={searchIcon} alt="search icon" onClick={handleClick} />
            </div>
            <SearchResults citiesWithZipcode={citiesWithZipcode} />
        </div>
    )
}

export default SearchBar;