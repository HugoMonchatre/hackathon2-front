import React from "react";
import "./filter.css";
import filterIcon from "../images/new-filter.svg";

const FilterPopUp = ({ filterBarOn, handleClick, handleFilterClient }) => {
    return (
        <div className={filterBarOn ? "filter-popup" : "hidden"}>
            <div className="filter-close" onClick={handleClick}>
                <h3 className="filter-title">Filtres</h3>
                <img className="icon" src={filterIcon} alt="search icon" />
            </div>
            <div className="filter-info">
                <div className="filter-clients">
                    <input type="checkbox" id="client" name="client" onClick={handleFilterClient} />
                    <label for="horns">
                        N’afficher que les clients de
                        Comparateur Agricole
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FilterPopUp;