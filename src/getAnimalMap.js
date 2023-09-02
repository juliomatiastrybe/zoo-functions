const data = require('../data/zoo_data');

const { species } = data;

const getLocationsZoo = [...new Set(species.map((specie) => specie.location))];

const getSpecieForLocalition = () => {
  const resultObject = {};
  getLocationsZoo.forEach((location) => {
    resultObject[location] = species
      .filter((animal) => animal.location === location)
      .map((animal) => animal.name);
  });
  return resultObject;
};

const getFilteredNames = (speciesInfo, options) => {
  // console.log(speciesInfo);
  // console.log(options);
  const names = speciesInfo.residents.map((resident) => resident.name);

  if (options.sex) {
    const filteredNames = names.filter((name) => {
      const resident = speciesInfo.residents.find((res) => res.name === name);
      return resident.sex === options.sex;
    });

    return options.sorted ? filteredNames.sort() : filteredNames;
  }

  return options.sorted ? names.sort() : names;
};

const getFilteredMap = (options) => {
  // console.log(options);
  const sortedNamesByLocation = {};

  getLocationsZoo.forEach((location) => {
    const speciesLocationObj = species.filter((specie) => specie.location.includes(location));
    // console.log(speciesLocationObj);
    sortedNamesByLocation[location] = [];
    // console.log(sortedNamesByLocation);

    for (const specie of speciesLocationObj) {
      const filteredNames = getFilteredNames(specie, options);
      // console.log(filteredNames);
      sortedNamesByLocation[location].push({ [specie.name]: filteredNames });
    }
  });

  return sortedNamesByLocation;
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return getSpecieForLocalition();
  }

  if (options.includeNames) {
    return getFilteredMap(options);
  }
};

// console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
