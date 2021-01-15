import React, { useState } from "react";
import axios from "axios";
import './App.css';
import Map from './components/Map';
import RightBar from './components/RightBar';

function App() {
  const [searchBarOn, SetSearchBarOn] = useState(false);
  const [citiesWithZipcode, setCitiesWithZipcode] = useState([]);
  const [zipcodeInput, setZipcodeInput] = useState("");

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

  const onClick = () => {
    console.log("yolo");
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

  return (
    <div className="App">
      <Map />
      <RightBar
        searchBarOn={searchBarOn}
        handleClick={onClickSearchBar}
        handleChange={handleZipcodeChange}
        zipcodeInput={zipcodeInput}
        citiesWithZipcode={citiesWithZipcode}
      />
    </div>
  );
}


export default App;
