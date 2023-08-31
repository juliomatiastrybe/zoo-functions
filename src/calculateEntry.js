const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const objectEntrants = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return objectEntrants;
};

const calculateEntry = (entrants = 0) => {
  if (Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  // console.log(prices);
  const sumEntry = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  return sumEntry;
};

// console.log(calculateEntry([{ name: 'Maria Costa', age: 18 }]));

module.exports = { calculateEntry, countEntrants };
