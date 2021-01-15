import React, { useState } from 'react';
import L from 'leaflet';
import { useMapEvents, Marker, Popup } from 'react-leaflet';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  let map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Vous êtes ici</Popup>
    </Marker>
  );
}

export default LocationMarker;
