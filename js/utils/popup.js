const showErrorServerModal = function () {
  const errorServerTemplate = document.querySelector('#error-server').content;
  const errorServerModal = errorServerTemplate.cloneNode(true);
  const errorButton = errorServerModal.querySelector('.error__button');
  const error = errorServerModal.querySelector('.error');
  errorButton.addEventListener('click', () => {
    error.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      error.remove();
    }
  });
  document.body.appendChild(errorServerModal);
};

const showErrorSubmitModal = function () {
  const errorSubmitTemplate = document.querySelector('#error').content;
  const errorSubmitModal = errorSubmitTemplate.cloneNode(true);
  const errorButton = errorSubmitModal.querySelector('.error__button');
  const error = errorSubmitModal.querySelector('.error');
  errorButton.addEventListener('click', () => {
    error.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      error.remove();
    }
  });
  document.body.appendChild(errorSubmitModal);
};

const showSuccessModal = function () {
  const successTemplate = document.querySelector('#success').content;
  const successModal = successTemplate.cloneNode(true);
  const success = successModal.querySelector('.success');
  document.addEventListener('click', () => {
    success.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      success.remove();
    }
  });
  document.body.appendChild(successModal);
};

export {showErrorServerModal, showErrorSubmitModal, showSuccessModal};
