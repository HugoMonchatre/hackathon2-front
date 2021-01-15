import React, { useState, useEffect, useLeafletContext } from 'react';
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


const markerIcon = new L.icon({
  iconUrl:
    'https://media-exp1.licdn.com/dms/image/C4D0BAQGYpTU_YfBlyQ/company-logo_200_200/0/1519904413694?e=2159024400&v=beta&t=iGU8ND-fM6mQbBPjhWwBacc5pHCjgVFNQIMi6yy9HA4',
  iconSize: [(500, 50)],
});


const Map = () => {
  // const [position, setPosition] = useState(null);

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

  return (
    <MapContainer id="mapid" center={[48.448959714197414, 1.537250677752061]} zoom={14} icon={markerIcon} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      />
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
