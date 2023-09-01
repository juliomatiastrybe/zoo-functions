const getOpeningHours = require('../src/getOpeningHours');

const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('Se nenhum parâmentro for passado retorne horários da semana', () => {
    const actual = getOpeningHours();
    const expected = hours;
    expect(actual).toBe(expected);
  });

  it('Verifica se a função pode receber paramentros case sensitive', () => {
    const caseSensitive = [
      { day: 'tuesday', hour: '09:00-am' },
      { day: 'tuesdAy', hour: '09:00-Am' },
      { day: 'tuEsDay', hour: '09:00-aM' },
    ];
    const expected = getOpeningHours('Tuesday', '09:00-AM');
    caseSensitive.forEach((zooInfo) => {
      const actual = getOpeningHours(zooInfo.day, zooInfo.hour);
      expect(actual).toBe(expected);
    });
  });

  it('Verifica se quando a função receber os argumentos Monday e 09:00-AM, retorne: The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('Verifica se quando a função receber os argumentos um dia invalido, retorne: message de erro: The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Mondafy', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Verifica se quando a função receber os argumentos com hora invalido, retorne: message de erro: The hour should represent a number', () => {
    expect(() => getOpeningHours('Monday', '0a:00-AM')).toThrow('The hour should represent a number');
  });

  it('Verifica se quando a função receber os argumentos com minutos invalido, retorne: message de erro:', () => {
    expect(() => getOpeningHours('Monday', '09:a0-AM')).toThrow('The minutes should represent a number');
  });

  it('Verifica se quando a função receber os argumentos com abreviação invalido, retorne: message de erro:', () => {
    expect(() => getOpeningHours('Monday', '09:00-0M')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se quando a função receber argumentos maiores que 12hrs, retorne: message de erro:', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Verifica se quando a função receber argumentos maiores que 59mins, retorne: message de erro:', () => {
    expect(() => getOpeningHours('Monday', '10:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
