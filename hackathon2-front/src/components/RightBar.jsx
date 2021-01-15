import React from 'react';
import SearchButton from './SearchButton';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

import './rightBar.css';
import FilterPopUp from './filterPopUp';

const RightBar = ({
  searchBarOn,
  handleClick,
  handleChange,
  zipcodeInput,
  citiesWithZipcode,
  filterBarOn,
  handleFilterClick,
  handleFilterClient,
  handleClickZip,
}) => {
  return (
    <div className="right-bar">
      <FilterButton filterBarOn={filterBarOn} handleClick={handleFilterClick} />
      <FilterPopUp
        filterBarOn={filterBarOn}
        handleClick={handleFilterClick}
        handleFilterClient={handleFilterClient}
      />
      <SearchButton searchBarOn={searchBarOn} handleClick={handleClick} />
      <SearchBar
        searchBarOn={searchBarOn}
        handleClick={handleClick}
        handleChange={handleChange}
        zipcodeInput={zipcodeInput}
        citiesWithZipcode={citiesWithZipcode}
        handleClickZip={handleClickZip}
      />
    </div>
  );
};

export default RightBar;
