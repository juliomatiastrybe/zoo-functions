const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const { species } = data;
  if (ids.length === 0 || !ids) return [];
  return ids.map((id) => species.find((specie) => specie.id === id));
};

// console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
