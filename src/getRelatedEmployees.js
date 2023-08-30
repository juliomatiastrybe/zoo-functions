const data = require('../data/zoo_data');

const { employees } = data;

const getMenagersIds = [...new Set(employees.flatMap((employee) => employee.managers))];

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
  const comparateIdsMenagers = createArrayMenagersForIds.some((managerId) => managerId.id === id);
  return comparateIdsMenagers;
};

const getRelatedEmployees = (managerId) => {
  const verifyMenagerId = isManager(managerId);
  if (verifyMenagerId === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const managedPeople = employees
      .filter(({ managers }) => managers.includes(managerId))
      .reduce((managed, { firstName, lastName }) => {
        managed.push(`${firstName} ${lastName}`);
        return managed;
      }, []);
    return managedPeople;
  }
};
// console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
