import {getRandomArrayElement} from '../utils.js';
import { mockDestination } from './Destination.js';
import { mockOffers } from './offer.js';


const mockWaypoints = [
  {
    type: 'Taxi',
    photo: '../img/icons/taxi.png',
    startTime: '00:23',
    endTime: '00:40',
    price: '100',
    isFavorite: true,
  },
  {
    type: 'Bus',
    photo: '../img/icons/bus.png',
    startTime: '01:25',
    endTime : '02:25',
    price: '50',
    isFavorite: false
  },
  {
    type: 'Check-in',
    photo: '../img/icons/check-in.png',
    startTime: '03:20',
    endTime : '03:45',
    price: '400',
    isFavorite: true
  },
];


function getRandomWaypoint() {
  return getRandomArrayElement(mockWaypoints);
}

export {getRandomWaypoint};
