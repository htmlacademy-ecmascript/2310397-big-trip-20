const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomJubileeNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let number = 1;
  while (number % 5 !== 0) {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return number;
};


export {getRandomArrayElement, getRandomJubileeNumber};
