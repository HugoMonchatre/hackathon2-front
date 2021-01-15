import React, { useState } from "react";
import "./search.css";
import searchIcon from "../images/magnifier.svg";

const SearchBar = ({ searchBarOn, onClick }) => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={searchBarOn ? "search-bar" : "hidden"} >
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Entrer un code postal"
                value={value}
                onChange={handleChange} />
            <img className="icon" src={searchIcon} alt="search icon" onClick={onClick} />
        </div>
    )
}

export default SearchBar;