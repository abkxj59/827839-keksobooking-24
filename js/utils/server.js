const getOffersData = (onSuccess, onFail) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
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
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: offer,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
        // throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch(() => {
      onFail();
      // console.log(err);
    });
};

export {getOffersData, sendOffer};
