const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { species } = data;
  const findAnimal = species.find((specie) => specie.name.includes(animal));
  // console.log(findAnimal);
  if (findAnimal === undefined) return false;
  return findAnimal.residents.every((resident) => resident.age >= age);
};

// console.log(getAnimalsOlderThan('ottders', 7));

module.exports = getAnimalsOlderThan;
