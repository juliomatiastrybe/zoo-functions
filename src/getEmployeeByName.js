const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const { employees } = data;
  const findEmployeeName = employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  if (!findEmployeeName) return {};
  return findEmployeeName;
};

// console.log(getEmployeeByName('Burl'));

module.exports = getEmployeeByName;
