import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { greenIcon } from './Icons';
import axios from 'axios';
import './Map.css';
import geolocation from 'geolocation';

const Map = () => {
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   getResolution();
  // }, []);

  // function getResolution() {
  //   setWidth(window.screen.width);
  //   setHeight(window.screen.height);
  // }

  const [cities, setCities] = useState([]);
  const [position, setPosition] = useState(['50.4671488', '1.0125312']);

  const map = useMapEvents({});

  useEffect(() => {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) {
        console.log(err);
      } else {
        setPosition([position.coords.latitude, position.coords.longitude]);
        map.flyTo(
          [position.coords.latitude, position.coords.longitude],
          map.getZoom()
        );
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
    <MapContainer id="mapid" center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city) => (
        <Marker
          key={city.id}
          position={[city.lat, city.longitude]}
          icon={greenIcon}
        ></Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
