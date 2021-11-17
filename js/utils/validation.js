const form = document.querySelector('.ad-form');
const roomsInput = form.querySelector('#room_number');
const capacityInput = form.querySelector('#capacity');
const capacityOptions = capacityInput.querySelectorAll('option');

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

const address = form.querySelector('#address');
address.disabled = true;
const writeNewAdress = function (coordinates) {
  address.value = `${coordinates.lat}, ${coordinates.lng}`;
};

export {writeNewAdress};
