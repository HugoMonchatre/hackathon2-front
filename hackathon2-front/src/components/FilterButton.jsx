import React from "react";
import "./filter.css";
import filterIcon from "../images/new-filter.svg";

const FilterButton = ({ filterBarOn, handleClick }) => {

    return (
        <div className={filterBarOn ? "hidden" : "filter-button"} onClick={handleClick}>
            <h3 className="filter-title">Filtres</h3>
            <img className="icon" src={filterIcon} alt="search icon" />
        </div>
    )
}

export default FilterButton;