import L from 'leaflet';
// import tractor from '../images/tractor.png';

let greenIcon = L.icon({
    iconUrl: 'https://nsa40.casimages.com/img/2021/01/15//210115093151913751.png',
    // shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowSize:   [50, 64], // size of the shadow
    popupAnchor:  [12, -90], // point from which the popup should open relative to the iconAnchor
    // shadowAnchor: [4, 62],  // the same for the shadow
});

export { greenIcon };