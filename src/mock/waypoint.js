import {getRandomArrayElement} from '../utils.js';


const mockWaypoints = [
  {
    type: 'Taxi',
    city: 'Geneva',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    photo: '../img/icons/taxi.png',
    startTime: '00:23',
    endTime: '00:40',
    priceValue: '100'
  },
  {
    type: 'Bus',
    city: 'Amsterdam',
    description: 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
    photo: '../img/icons/bus.png',
    startTime: '01:25',
    endTime : '02:25',
    priceValue: '50'
  },
  {
    type: 'Check-in',
    city: 'Chamonix',
    description: 'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.In rutrum ac purus sit amet tempus.',
    photo: '../img/icons/check-in.png',
    startTime: '03:20',
    endTime : '03:45',
    priceValue: '400'
  },
];


function getRandomWaypoint() {
  return getRandomArrayElement(mockWaypoints);
}

export {getRandomWaypoint};
