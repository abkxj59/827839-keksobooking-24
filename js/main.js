
import {getOffersData} from './utils/server.js';
import {deactivateForm} from './utils/activation.js';
import {initiateMap, addMainMarker, addSimilarOffers, resetMainMarker} from './utils/map.js';
import {showErrorServerModal, showSuccessModal, showErrorSubmitModal} from './utils/popup.js';
import {setClearForm, setSubmitOffer} from './utils/form.js';
import {validation} from './utils/validation.js';
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
validation();
setClearForm(resetMainMarker);

setSubmitOffer(showSuccessModal, showErrorSubmitModal);
