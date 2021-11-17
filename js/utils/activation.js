const form = document.querySelector('.ad-form');
const formInputs = form.querySelectorAll('input, select');
const filter = document.querySelector('.map__filters');
const filterInputs = filter.querySelectorAll('input, select');

const deactivateForm = function () {
  form.classList.add('ad-form--disabled');
  formInputs.disabled = true;
  filter.classList.add('map__filters--disabled');
  filterInputs.disabled = true;
};
const activateForm = function () {
  form.classList.remove('ad-form--disabled');
  formInputs.disabled = false;
  filter.classList.remove('map__filters--disabled');
  filterInputs.disabled = false;
};

export {deactivateForm, activateForm};
