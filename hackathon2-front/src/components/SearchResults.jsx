import React from 'react';

const SearchResults = ({ citiesWithZipcode, handleClickZip }) => {
  return (
    <div className="search-results">
      {citiesWithZipcode.map((city) => (
        <button key={city.id}>
          {city.city} {city.zipcode ? `(${city.zipcode})` : ''}
        </button>
      ))}
    </div>
  );
};

export default SearchResults;
