const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const arrWeek = Object.keys(hours);

const daysAvailabilitySpecie = (nameSpecie) => species
  .find((specie) => specie.name === nameSpecie).availability;

const filterSpeciesDay = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }
  const arrSpecieByDay = species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
  return arrSpecieByDay;
};

const timeWeekAvailable = (dayWeek) => {
  let dayReceived = arrWeek;
  if (arrWeek.includes(dayWeek)) dayReceived = [dayWeek];
  const objectScheduleWeek = dayReceived.reduce((objectWeek, day) => {
    const arrTimeByDay = Object.values(hours[day]);
    const objectDay = {
      ...objectWeek,
      [day]: {
        officeHour: `Open from ${arrTimeByDay[0]}am until ${arrTimeByDay[1]}pm`,
        exhibition: filterSpeciesDay(day),
      },
    };
    if (day === 'Monday') {
      objectDay.Monday.officeHour = 'CLOSED';
    }
    return objectDay;
  }, {});
  return objectScheduleWeek;
};
// console.log(timeWeekAvailable('Monday'));

const getSchedule = (scheduleTarget = timeWeekAvailable()) => {
  const getNameAnimals = species.map((specie) => specie.name);
  if (getNameAnimals.includes(scheduleTarget)) return daysAvailabilitySpecie(scheduleTarget);
  if (!arrWeek.includes(scheduleTarget)) return timeWeekAvailable();
  if (arrWeek.includes(scheduleTarget)) return timeWeekAvailable(scheduleTarget);
  return scheduleTarget;
};

// console.log(getSchedule());

module.exports = getSchedule;
