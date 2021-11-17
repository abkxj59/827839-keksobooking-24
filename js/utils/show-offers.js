const cardTemplate = document.querySelector('#card').content;
const mapCanvas = document.querySelector('#map-canvas');


const renderDetailCard = ((item) => {
  const newCard = cardTemplate.cloneNode(true);

  const cardAvatar = newCard.querySelector('.popup__avatar');
  cardAvatar.src = item.author.avatar;
  if (!item.author.avatar) {
    cardAvatar.remove();
  }

  const offer = item.offer;

  const cardTitle = newCard.querySelector('.popup__title');
  cardTitle.textContent = offer.title;
  if (!offer.title) {
    cardTitle.remove();
  }

  const cardAddress = newCard.querySelector('.popup__text--address');
  cardAddress.textContent = offer.address;
  if (!offer.address) {
    cardAddress.remove();
  }

  const cardPrice = newCard.querySelector('.popup__text--price');
  cardPrice.textContent = `${offer.price} ₽/ночь`;
  if (!offer.price) {
    cardPrice.remove();
  }

  const cardType = newCard.querySelector('.popup__type');
  switch (offer.type) {
    case 'flat':
      cardType.textContent = 'Квартира';
      break;
    case 'palace':
      cardType.textContent = 'Дворец';
      break;
    case 'bungalow':
      cardType.textContent = 'Бунгало';
      break;
    case 'house':
      cardType.textContent = 'Дом';
      break;
    case 'hotel':
      cardType.textContent = 'Отель';
      break;
    default:
      cardType.remove();
  }

  const cardCapacity = newCard.querySelector('.popup__text--capacity');
  cardCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  if (offer.rooms === 1) {
    cardCapacity.textContent = `${offer.rooms} комната для ${offer.guests} гостей`;
  } else if (offer.rooms >= 5) {
    cardCapacity.textContent = `${offer.rooms} комнат для ${offer.guests} гостей`;
  } else if (!offer.rooms) {
    cardCapacity.remove();
  }

  const cardTime = newCard.querySelector('.popup__text--time');
  cardTime.textContent = `Заезд после ${offer.checkin}, выезд после ${offer.checkout}`;

  const cardFeatures = newCard.querySelectorAll('.popup__feature');
  if (offer.features) {
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
    cardFeatures.forEach((feature) => {
      const modifier = feature.classList[1];
      if (!modifiers.includes(modifier)) {
        feature.remove();
      }
    });
  } else {
    cardFeatures.textContent = '';
  }

  const cardDescription = newCard.querySelector('.popup__description');
  cardDescription.textContent = offer.description;
  if (!offer.description) {
    cardDescription.remove();
  }

  const cardPhotos = newCard.querySelector('.popup__photos');
  const cardPhoto = newCard.querySelector('.popup__photo');
  if (offer.photos) {
    cardPhoto.src = offer.photos[0];
    if (offer.photos.length === 0) {
      cardPhoto.remove();
    }
    if (offer.photos.length > 1) {
      for (let i = 1; i < offer.photos.length; i++) {
        const newPhoto = cardPhoto.cloneNode(true);
        newPhoto.src = offer.photos[i];
        cardPhotos.appendChild(newPhoto);
      }
    }
  } else {
    cardPhotos.textContent ='';
  }

  return newCard;
});

const showOffers = function (offersList) {
  offersList.forEach((item) => {
    mapCanvas.appendChild(renderDetailCard(item));
  });
};

export {renderDetailCard, showOffers};
