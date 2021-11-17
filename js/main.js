// import {getOffersList} from './utils/offers-generator.js';
// import {renderDetailCard, showOffers} from './utils/show-offers.js';
import {getOffersData} from './utils/server.js';
import {deactivateForm} from './utils/activation.js';
import {initiateMap, addMainMarker, addSimilarOffers} from './utils/map.js';
import {showErrorServerModal} from './utils/popup.js';
import './utils/validation.js';
import './utils/filter.js';

deactivateForm();

const map = initiateMap();

getOffersData(
  (offersData) => {
    addMainMarker(map);
    addSimilarOffers(offersData, map);
  },
  showErrorServerModal,
);

