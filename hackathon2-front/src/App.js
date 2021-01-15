import React, { useState } from "react";
import axios from "axios";
import './App.css';
import Map from './components/Map';
import RightBar from './components/RightBar';

function App() {
  const [searchBarOn, SetSearchBarOn] = useState(false);
  const [filterBarOn, SetFilterBarOn] = useState(false);
  const [citiesWithZipcode, setCitiesWithZipcode] = useState([]);
  const [zipcodeInput, setZipcodeInput] = useState("");
  const [clientFilter, setClientFilter] = useState(false);
  const [center, setCenter] = useState([48.448553368159985, 1.5381089746419778])

  const handleZipcodeChange = (e) => {
    setZipcodeInput(e.target.value);
    if (e.target.value.length === 5) {
      if (parseInt(e.target.value) > 0) {
        getCitiesWithZipcode(e.target.value);
      }
      else {
        setCitiesWithZipcode([{
          city: "ceci n'est pas un code postal"
        }])
      }
    } else {
      setCitiesWithZipcode([])
    }
  }

  const getCitiesWithZipcode = (zipcode) => {
    const url = "http://localhost:5000/api/cities?zipcode=" + zipcode
    console.log(url)
    axios.get(url)
      .then(res => {
        console.log(res)
        return (
          res.data
        )
      })
      .then(data => setCitiesWithZipcode(data));
  }

  const onClickSearchBar = () => {
    SetSearchBarOn(!searchBarOn);
  }

  const onClickFilterBar = () => {
    SetFilterBarOn(!filterBarOn);
  }

  const handleFilterClient = () => {
    setClientFilter(!clientFilter);
  }

  const handleClickZip = (index) => {
    setCenter([citiesWithZipcode[index].lat, citiesWithZipcode[index].longitude])
  }
  return (
    <div className="App">
      <Map
        clientFilter={clientFilter}
        centerPosition={center} />
      <RightBar
        searchBarOn={searchBarOn}
        filterBarOn={filterBarOn}
        handleClick={onClickSearchBar}
        handleFilterClick={onClickFilterBar}
        handleChange={handleZipcodeChange}
        zipcodeInput={zipcodeInput}
        citiesWithZipcode={citiesWithZipcode}
        handleFilterClient={handleFilterClient}
        handleClickZip={handleClickZip}
      />
    </div>
  );
}


export default App;
