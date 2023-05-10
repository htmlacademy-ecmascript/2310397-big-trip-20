import {getRandomArrayElement} from '../utils';
import {CITIES, DESCRIPTIONS} from '../const';

const destinationPhotos = [
  `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
  `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
  `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
  `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`
];

const mockDestination = [
  {
    city: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photo: destinationPhotos
  },
  {
    city: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photo: destinationPhotos
  },
  {
    city: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photo: destinationPhotos
  },
];

export {mockDestination};
