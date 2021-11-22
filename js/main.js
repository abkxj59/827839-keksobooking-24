
import {getOffersData} from './utils/server.js';
import {deactivateForm} from './utils/activation.js';
import {initiateMap, addMainMarker, addSimilarOffers} from './utils/map.js';
import {showErrorServerModal, showSuccessModal, showErrorSubmitModal} from './utils/popup.js';
import {setSubmitOffer} from './utils/form.js';
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

setSubmitOffer(showSuccessModal, showErrorSubmitModal);
