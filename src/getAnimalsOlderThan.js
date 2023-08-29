const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animalsName, age) => {
  const { species } = data;
  const findAnimal = species.find((specie) => specie.name === animalsName);
  // console.log(findAnimal);
  if (findAnimal === undefined) return false;
  return findAnimal.residents.every((resident) => resident.age >= age);
};

// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
