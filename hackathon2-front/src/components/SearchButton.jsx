import React from "react";
import "./search.css";
import axios from "axios";
import searchIcon from "../images/magnifier.svg";

const SearchButton = ({ searchBarOn, onClick }) => {

    return (
        <div className={searchBarOn ? "hidden" : "search-button"} onClick={onClick}>
            <img className="icon" src={searchIcon} alt="search icon" />
        </div>
    )
}

export default SearchButton;