const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getOldestFromFirstSpecies = (id) => {
  const getEmployee = employees.find((employee) => employee.id === id);
  const getResponsibleForSpecieId = getEmployee.responsibleFor.find((specie) => specie);
  const getSpecieOlder = species.find((specie) => specie.id === getResponsibleForSpecieId).residents
    .reduce((ageOlder, specie) => {
      if (specie.age > ageOlder.age) {
        const newAgeOlder = specie;
        return newAgeOlder;
      }
      return ageOlder;
    }, { age: 0 });
  return Object.values(getSpecieOlder);
};

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
