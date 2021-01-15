import React from "react";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";

import "./rightBar.css";

const RightBar = ({ searchBarOn, handleClick, handleChange, zipcodeInput, citiesWithZipcode }) => {

    return (
        <div className="right-bar">
            <SearchButton searchBarOn={searchBarOn} handleClick={handleClick} />
            <SearchBar
                searchBarOn={searchBarOn}
                handleClick={handleClick}
                handleChange={handleChange}
                zipcodeInput={zipcodeInput}
                citiesWithZipcode={citiesWithZipcode}
            />
        </div>
    )
}

export default RightBar;