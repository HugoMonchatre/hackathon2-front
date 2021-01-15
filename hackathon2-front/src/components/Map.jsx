import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import './Map.css';
import L from 'leaflet';
import geolocation from 'geolocation';
import LocationMarker from './leaflet';
import { greenIcon } from './Icons';
import axios from 'axios';
import taille from '../images/field.svg';
import product from '../products.json';
import farmerIcon from '../images/farmer.svg';

const markerIcon = new L.icon({
  iconUrl:
    'https://media-exp1.licdn.com/dms/image/C4D0BAQGYpTU_YfBlyQ/company-logo_200_200/0/1519904413694?e=2159024400&v=beta&t=iGU8ND-fM6mQbBPjhWwBacc5pHCjgVFNQIMi6yy9HA4',
  iconSize: [(500, 50)],
});

const Map = ({ clientFilter, centerPosition }) => {
  // useLeafletContext((position) => {
  //   geolocation.getCurrentPosition(function (err, position) {
  //     console.log(position)
  //     if (err) {
  //       console.log("error");
  //     } else {
  //       console.log([position.coords.latitude, position.coords.longitude ])
  //       setPosition  ([position.coords.latitude, position.coords.longitude ])
  //     }
  //   });
  // }, []);
  const [cities, setCities] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [position, setPosition] = useState(['50.4671488', '1.0125312']);

  useEffect(() => {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) {
        console.log(err);
      } else {
        setPosition([position.coords.latitude, position.coords.longitude]);
        // map.flyTo(
        //   [position.coords.latitude, position.coords.longitude],
        //   map.getZoom()
        // );
      }
      const lat1 = parseInt(position.coords.latitude) + 0.7;
      console.log(lat1);
      const lat2 = parseInt(position.coords.latitude) - 0.7;
      const long1 = parseInt(position.coords.longitude) - 0.7;
      const long2 = parseInt(position.coords.longitude) + 0.7;

      let url = `http://localhost:5000/api/cities/map?lat1=${lat1}&long1=${long1}&lat2=${lat2}&long2=${long2}&clients_only=${clientFilter}`;

      console.log(url);
      axios
        .get(url)
        .then((result) => result.data)
        .then((data) => {
          setCities(data);
          console.log(data);
        });
    });
  }, [clientFilter]);

  return (
    <MapContainer
      id="mapid"
      center={centerPosition}
      zoom={14}
      icon={markerIcon}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city) => (
        <Marker
          key={city.id}
          position={[city.lat, city.longitude]}
          icon={greenIcon}
        >
          <Popup
          // ville={city.city}
          // zipcode={city.zipcode}
          // taille={city.farmers.farm_size}
          // product={city.farmers.products}
          >
            <div className="div-popup">
              <h1 className="PopTitle">
                {city.city.substring(0, 1)}
                {city.city.substring(1, city.city.length).toLowerCase()} (
                {city.zipcode})
              </h1>
              <div className="farmers">
                <img src={farmerIcon} alt="farmer-icon" />
                {city.farmers.length} agriculteur(s)
              </div>
              <div className="productions">
                <strong>Produits vendus : </strong>
                {city.farmers[0].client === true
                  ? product.filter((p) => {
                      return city.farmers[0].products[0] === p.id;
                    })[0].category
                  : '0'}
              </div>
              <div className="taille">
                <img src={taille} className="ferme" alt="ferme" />
                <h3>{city.farmers[0].farm_size} ha</h3>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
      <Marker
        position={[48.448959714197414, 1.537250677752061]}
        icon={markerIcon}
      >
        <Popup>
          <div className="div-popup">ComparateurAgricole.com</div>
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
