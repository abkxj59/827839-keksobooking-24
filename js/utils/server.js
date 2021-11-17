const getOffersData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail;
      }
    })
    .then((offersData) => {
      onSuccess(offersData);
    })
    .catch(onFail);
};

const sendOffer = function (onSuccess, onFail, offer) {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: postMessage,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: offer,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export {getOffersData, sendOffer};
