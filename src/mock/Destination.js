import {getRandomArrayElement} from '../utils';
import {CITIES, DESCRIPTIONS} from '../const';


const mockDestination = [
  {
    city: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photo: '../img/photos/1.jpg',
  },
  {
    city: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photo: '../img/photos/3.jpg',
  },
  {
    city: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photo: '../img/photos/4.jpg',
  },
];

export {mockDestination};
