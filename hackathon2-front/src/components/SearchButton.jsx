import React from "react";
import "./search.css";
import searchIcon from "../images/magnifier.svg";

const SearchButton = ({ searchBarOn, handleClick }) => {

    return (
        <div className={searchBarOn ? "hidden" : "search-button"} onClick={handleClick}>
            <img className="icon" src={searchIcon} alt="search icon" />
        </div>
    )
}

export default SearchButton;