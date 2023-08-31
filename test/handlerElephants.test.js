const handlerElephants = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');

describe('Testes da função HandlerElephants', () => {
  it('Caso a função não receba parametro, retorne undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });

  it('Caso receba parametro que não seja string, retorne: Parâmetro inválido, é necessário uma string', () => {
    const actual = handlerElephants(2);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });

  it('Caso receba um paramentro existentes, tenha o retorno do mesmos', () => {
    const actualLocation = handlerElephants('location');
    const actualPopularity = handlerElephants('popularity');
    const actualAvailabiility = handlerElephants('availability');
    const expectedLocation = 'NW';
    const expectedPopularity = 5;
    const expectedAvailability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actualLocation).toBe(expectedLocation);
    expect(actualPopularity).toBe(expectedPopularity);
    expect(actualAvailabiility).toEqual(expectedAvailability);
  });

  it('Caso a função receba parametro que não exista, retorne null', () => {
    const actual = handlerElephants('dsadas');
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('Caso o parametros for count o retorno deve ser quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expectedCount = 4;
    expect(actual).toBe(expectedCount);
  });
  it('Caso o parametros for names, retorno deve incluir Ilana ', () => {
    const actual = handlerElephants('names');
    const expected = 'Ilana';
    expect(actual).toContain(expected);
  });
  it('Caso o parametros for names, retorno deve incluir nomes dos elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('Caso o parametros for averageAge, retorno deve ser a media de idades dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = species.find((specie) => specie.name === 'elephants').residents.reduce((sum, elephant) => sum + elephant.age, 0) / 4;
    expect(actual).toBeCloseTo(expected, 2);
  });
});
