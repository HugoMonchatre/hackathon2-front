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

// const location = ('geolocation')

const markerIcon = new L.icon({
  iconUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AhH26-K3HyVfgM0X3g75hrT5PiQzZSAE0Q&usqp=CAU',
  iconSize: [30, 30],
});

const Map = () => {
  const [position, setPosition] = useState(['48.4671488', '1.0125312']);

  useEffect(() => {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) {
        console.log(err);
      } else {
        setPosition(position);
      }
    });
  }, []);

  return (
    <MapContainer id="mapid" center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[48.448553368159985, 1.5381089746419778]}
        icon={markerIcon}
      >
        <Popup>ComparateurAgricole.com</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
