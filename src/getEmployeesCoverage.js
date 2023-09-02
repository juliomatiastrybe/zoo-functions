const data = require('../data/zoo_data');

const { species, employees } = data;

const getSpecie = (arrIdSpecie, param) => arrIdSpecie.map((id) => {
  const specieFound = species.find((specie) => specie.id === id);
  return specieFound[param];
});

const createEmployeeInfo = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecie(responsibleFor, 'name'),
    locations: getSpecie(responsibleFor, 'location'),
  };
};

const findEmployee = (object) => {
  switch (Object.keys(object)[0]) {
  case 'name':
    return employees
      .find(({ firstName, lastName }) => firstName === object.name || lastName === object.name);
  case 'id':
    return employees.find(({ id }) => id === object.id);
  default:
    return null;
  }
};

const getEmployeesCoverage = (object = {}) => {
  if (Object.keys(object).length > 0) {
    const foundEmployee = findEmployee(object);
    // console.log(foundEmployee);
    if (foundEmployee) {
      return createEmployeeInfo(foundEmployee);
    }
    throw new Error('Informações inválidas');
  }
  return employees.map(createEmployeeInfo);
};

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
