const getRandomInt = function (min, max) {
  if (min < 0) {
    return 'Ошибка, минимум диапазона отрицательный';
  }
  if (min > max) {
    return 'Ошибка, минимум диапазона больще максимума';
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; // Источник - MDN

const getRandomFloat = function (min, max, digits) {
  if (min < 0) {
    return 'Ошибка, минимум диапазона отрицательный';
  }
  if (min > max) {
    return 'Ошибка, минимум диапазона больще максимума';
  }

  return parseFloat((Math.random() * (max - min) + min).toFixed(digits));
};

const TITLES = [
  'уютная студия',
  'просторная двушка',
  'королевские аппартаменты',
  'чистый номер',
  'уединенное койко-место',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPRIONS = [
  'недалеко от метро',
  'самая центровая',
  'великолепный вид из окна',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomElement = function (array) {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
};
const getRandomSlice = function (array) {
  return array.slice(0, getRandomInt(0, array.length));
};

const createOfferItem = function () {
  const offerItem = {
    author: {
      avatar: '',
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${  getRandomFloat(35.65, 35.7, 5)  }, ${  getRandomFloat(139.7, 139.8, 5)}`,
      price: getRandomInt(1000, 50000),
      type: getRandomElement(TYPES),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 20),
      checkin: getRandomElement(CHECK_TIME),
      checkout: getRandomElement(CHECK_TIME),
      features: getRandomSlice(FEATURES),
      description: getRandomElement(DESCRIPRIONS),
      photos: getRandomSlice(PHOTOS),
      location: {
        lat: getRandomFloat(35.65, 35.7, 5),
        lng: getRandomFloat(139.7, 139.8, 5),
      },
    },
  };
  return offerItem;
};

const getOffersList = function (offersNumber) {
  const offersList = [];
  for (let i = 0; i < offersNumber; i++) {
    offersList.push(createOfferItem());
    offersList[i].author.avatar = `img/avatars/user0${  i + 1  }.png`;
    if (i + 1 >= 10) {
      offersList[i].author.avatar = `img/avatars/user${  i + 1  }.png`;
    }
  }
  return offersList;
};

export {getOffersList};
