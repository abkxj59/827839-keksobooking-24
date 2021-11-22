import {activateForm} from './activation.js';
import {writeNewAdress} from './validation.js';
import {renderDetailCard} from './show-offers.js';
// import { setClearForm } from './form.js';

const initiateMap = function () {
  const map = L.map('map-canvas');
  map.on('load', () => {activateForm();});
  map.setView({
    lat: 35.6851408,
    lng: 139.752789,
  }, 15);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/  copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  return map;
};

const addMainMarker = function(map) {
  const mainMarkerIcon = L.icon(
    {
      iconUrl: 'img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    },
  );

  const mainMarker = L.marker(
    {
      lat: 35.6851408,
      lng: 139.752789,
    },
    {
      draggable: true,
      icon: mainMarkerIcon,
    },
  ).addTo(map);

  let markerCoordinates = mainMarker.getLatLng();
  writeNewAdress(markerCoordinates);
  mainMarker.on('moveend', (evt) => {
    markerCoordinates = evt.target.getLatLng();
    writeNewAdress(markerCoordinates);
  });

  // setClearForm(() => {
  //   L.marker(
  //     {
  //       lat: 35.6851408,
  //       lng: 139.752789,
  //     },
  //   );
  // });
};

const resetMainMarker = () => {
  L.marker(
    {
      lat: 35.6851408,
      lng: 139.752789,
    },
  );
  writeNewAdress(L.marker.getLatLng());
};

const addSimilarOffers = function(offersList, map) {
  const regularMarkerIcon = L.icon(
    {
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    },
  );

  offersList.forEach((offerItem) => {
    const offerMarker = L.marker(
      offerItem.location,
      {icon: regularMarkerIcon},
    );

    offerMarker.addTo(map);
    offerMarker.bindPopup(renderDetailCard(offerItem));
  });
};

export {initiateMap, addMainMarker, addSimilarOffers, resetMainMarker};
