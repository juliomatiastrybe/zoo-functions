const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  if (ids.length === 1) return data.species.filter((specie) => specie.id === ids[0]);
  return ids.map((id) => data.species.find((specie) => specie.id === id));
};

// console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
