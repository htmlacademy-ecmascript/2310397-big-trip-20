import {getRandomArrayElement, getRandomJubileeNumber} from '../utils.js';
import { mockDestination } from './Destination.js';
import { mockOffers } from './offer.js';


const mockWaypoints = [
  {
    type: 'Taxi',
    photo: 'taxi.png',
    startTime: '00:23',
    endTime: '00:40',
    price: getRandomJubileeNumber(100, 300),
    isFavorite: true,
    offers: mockOffers[0].offers,
    destination: getRandomArrayElement(mockDestination)
  },
  {
    type: 'Bus',
    photo: '../img/icons/bus.png',
    startTime: '01:25',
    endTime : '02:25',
    price: getRandomJubileeNumber(50, 150),
    isFavorite: false,
    offers: mockOffers[1].offers,
    destination: getRandomArrayElement(mockDestination)
  },
  {
    type: 'Check-in',
    photo: '../img/icons/check-in.png',
    startTime: '03:20',
    endTime : '03:45',
    price: getRandomJubileeNumber(500, 1000),
    isFavorite: true,
    offers: mockOffers[2].offers,
    destination: getRandomArrayElement(mockDestination)
  },
];


const getRandomWaypoint = () => getRandomArrayElement(mockWaypoints);

export {getRandomWaypoint};
