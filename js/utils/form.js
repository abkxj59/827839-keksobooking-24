import { showErrorSubmitModal, showSuccessModal } from './popup.js';
import { sendOffer } from './server.js';

const submitButton = document.querySelector('.ad-form__submit');
const clearButton = document.querySelector('.ad-form__reset');

const setClearForm = function (action) {
  clearButton.addEventListener('click', () => {
    action();
  });
};

const setSubmitOffer = function () {
  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault;
    sendOffer(
      showSuccessModal(),
      showErrorSubmitModal(),
      new FormData(evt.target),
    );
  });
};

export {setClearForm, setSubmitOffer};
