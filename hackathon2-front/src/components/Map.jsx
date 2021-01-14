import React, {useState} from 'react' 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css"

const Map = () => {
  return (
    <MapContainer id="mapid" center={[48.448553368159985, 1.5381089746419778]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48.448553368159985, 1.5381089746419778]}>
        <Popup>
          ComparateurAgricole.com
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
