const form = document.querySelector('.ad-form');
const roomsInput = form.querySelector('#room_number');
const capacityInput = form.querySelector('#capacity');
const capacityOptions = capacityInput.querySelectorAll('option');
const address = form.querySelector('#address');

const validation = () => {
  roomsInput.addEventListener('change', () => {
    capacityOptions.forEach((option) => {
      option.disabled = false;
    });
    if (roomsInput.value < 100) {
      capacityOptions[3].disabled = true;
    }
    if (roomsInput.value < 3) {
      capacityOptions[0].disabled = true;
    }
    if (roomsInput.value < 2) {
      capacityOptions[1].disabled = true;
    }
    if (roomsInput.value >= 100) {
      capacityOptions[0].disabled = true;
      capacityOptions[1].disabled = true;
      capacityOptions[2].disabled = true;
    }
  });

  const priceInput = document.querySelector('#price');
  const typeInput = document.querySelector('#type');

  typeInput.addEventListener('change', () => {
    if (typeInput.value === 'bungalow') {
      priceInput.placeholder = 0;
      priceInput.minValue = 0;
    } else if (typeInput.value === 'flat') {
      priceInput.placeholder = 1000;
      priceInput.minValue = 1000;
    } else if (typeInput.value === 'hotel') {
      priceInput.placeholder = 3000;
      priceInput.minValue = 3000;
    } else if (typeInput.value === 'house') {
      priceInput.placeholder = 5000;
      priceInput.minValue = 5000;
    } else if (typeInput.value === 'palace') {
      priceInput.placeholder = 10000;
      priceInput.minValue = 10000;
    }
  });

  address.disabled = true;
};

const writeNewAdress = function (coordinates) {
  address.value = `${coordinates.lat}, ${coordinates.lng}`;
};

export {validation, writeNewAdress};
