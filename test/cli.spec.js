const cli = require('../src/cli');
const api = require('..src/api');


// /home/ghlena/desktop/laboratoria/Lim/ debe de retornenar verdadero
// /home/ghlena/deskt.p/laboratoria/Lim/ debe de retornenar falso
// /home/ghlena/ --validate --state debe devolver verdadero
// /home/ghlena/ --state --validate debe devolver verdadero
// /home/ghlena/ --state debe devolver verdadero
// /home/ghlena/ --validate debe devolver verdadero
// /home/ghlena/ --validate --validate debe devolver falso
// /home/ghlena/ --debe devolver falso
// /home/ghlena/ state debe devolver falso
// /home/ghlena/ --state --validate  command1 comand2 debe devolver falso


// test for CLI
describe('CLI', () => {
  it('cli should be a function', () => {
    expect(typeof cli.CommandLineInteface).toBe('function');
  });
  it('validtePath should be a function', () => {
    expect(typeof cli.validatePath).toBe('function');
  });
  it('return true when path is /home/ghlena/desktop/laboratoria/', () => {
    expect(cli.validatePath('/home/ghlena/desktop/laboratoria/')).toBeTruthy();
  });
  it('return false when path is /home/ghlena/desktop.algo/laboratoria/', () => {
    expect(cli.validatePath('/home/ghlena/desktop!algo/laboratoria/')).toBeFalsy();
  });
  it('validateOptions should be a function', () => {
    expect(typeof cli.validateCommands).toBe('function');
  });
  it('Return a number between 1 to 4 when options is valid and zero when there is a error', () => {
    const options = [0, 1, 2, 3, 4];
    // expect(options.includes(cli.validateCommands('--validate', '--stats')).toBe(true));
    expect(cli.validateCommands('--validate', '--stats')).toBe(4);
    expect(cli.validateCommands('--stats')).toBe(3);
    expect(cli.validateCommands('--validate')).toBe(2);
    expect(cli.validateCommands()).toBe(1);
    expect(cli.validateCommands('--valid', 'sts')).toBe(0);
    expect(cli.validateCommands('validate')).toBe(0);
    expect(cli.validateCommands('valid', 'stats')).toBe(0);
    expect(cli.validateCommands(323, '#')).toBe(0);
  });
});


const mocks = [];
//  test con paths y opciones validos
describe('return a list of a links', () => {
  it('mdlinks should be a function', () => {
    expect(api.mdLinks()).toBe(mocks);
  });
});


// tests con la lista de links returnado
describe('return a list of a links', () => {
  it('mdlinks should be a function', () => {
    expect(cli.getStatsOfLinks(mocks)).toBe(mocks);
  });
});
