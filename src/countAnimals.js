const data = require('../data/zoo_data');

const { species } = data;

const filterCountAnimals = (array) => array.reduce((objectAnimals, specie) => {
  const objectCountAnimal = {
    ...objectAnimals,
    [specie.name]: specie.residents.length,
  };
  return objectCountAnimal;
}, {});

const countAnimalsSex = (arraySpecie, sex) => {
  const totalCount = arraySpecie.reduce((count, specie) => {
    const filteredResidents = specie.residents.filter((resident) => resident.sex === sex);
    return count + filteredResidents.length;
  }, 0);
  return totalCount;
};

const countAnimals = (animal = species) => {
  if (!animal.species) {
    return filterCountAnimals(species);
  }

  const matchingSpecie = species.find((specie) => specie.name === animal.species);

  if (animal.sex) {
    return countAnimalsSex([matchingSpecie], animal.sex);
  }

  return matchingSpecie.residents.length;
};

// console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
