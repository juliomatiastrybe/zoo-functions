const data = require('../data/zoo_data');

const { employees } = data;

const getMenagersIds = [...new Set(employees.flatMap((employee) => employee.managers))];

console.log(getMenagersIds);

const createArrayMenagersForIds = getMenagersIds.map((id) => {
  const matchingMenager = employees.find((employee) => employee.id.includes(id));
  return {
    name: matchingMenager.firstName,
    id: matchingMenager.id,
  };
});
// o array criado no createArrayMenagersForId somente para melhor vizualização
// dos gerentes dinamicamente, sem a necessidade de ver no data.

const isManager = (id) => {
  const comparateIdsMenagers = createArrayMenagersForIds.every((manager) => manager.id === id);
  return comparateIdsMenagers;
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
};
// console.log(isManager('id'));

module.exports = { isManager, getRelatedEmployees };
