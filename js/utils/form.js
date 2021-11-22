import { sendOffer } from './server.js';

const form = document.querySelector('.ad-form');
// const submitButton = document.querySelector('.ad-form__submit');
const clearButton = document.querySelector('.ad-form__reset');

const setClearForm = function (action) {
  clearButton.addEventListener('click', () => {
    action();
  });
};

const setSubmitOffer = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    // console.log(formData);
    sendOffer(
      onSuccess,
      onFail,
      formData,
    );
  });
};

export {setClearForm, setSubmitOffer};
