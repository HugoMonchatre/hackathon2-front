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
import LocationMarker from "./leaflet"
import { greenIcon } from './Icons';
import axios from 'axios';




const markerIcon = new L.icon({
  iconUrl:
    'https://media-exp1.licdn.com/dms/image/C4D0BAQGYpTU_YfBlyQ/company-logo_200_200/0/1519904413694?e=2159024400&v=beta&t=iGU8ND-fM6mQbBPjhWwBacc5pHCjgVFNQIMi6yy9HA4',
  iconSize: [(500, 50)],
});


const Map = () => {
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
      const lat1 = parseInt(position.coords.latitude) + 0.3;
      console.log(lat1);
      const lat2 = parseInt(position.coords.latitude) - 0.3;
      const long1 = parseInt(position.coords.longitude) - 0.3;
      const long2 = parseInt(position.coords.longitude) + 0.3;

      const url = `http://localhost:5000/api/cities/map?lat1=${lat1}&long1=${long1}&lat2=${lat2}&long2=${long2}`;
      console.log(url);
      axios
        .get(url)
        .then((result) => result.data)
        .then((data) => {
          setCities(data);
          console.log(data);
        });
    });
  }, []);

  return (
    <MapContainer id="mapid" center={[48.448959714197414, 1.537250677752061]} zoom={14} icon={markerIcon} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city) => (
        <Marker
          key={city.id}
          position={[city.lat, city.longitude]}
          icon={greenIcon}
        ></Marker>

      ))}
      <Marker
        position={[48.448959714197414, 1.537250677752061]}
        icon={markerIcon}
      >
        <Popup><div className="div-popup">ComparateurAgricole.com</div></Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
